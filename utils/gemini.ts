
import { GoogleGenAI, Chat } from "@google/genai";
import { NEWS_DATA } from '../constants';
import type { NewsCategory, LLMRankingItem, GroundingSource, NewsItem } from '../types';

// Fix: Correctly initialize GoogleGenAI with the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
// Fix: Use a recommended model for the task.
const model = "gemini-2.5-flash";

/**
 * Parses a JSON response from the model, which might be wrapped in markdown.
 * @param text The raw text response from the model.
 * @returns The parsed JSON object.
 */
function parseJsonResponse(text: string): any {
    const sanitizedText = text.trim();
    // The model may return JSON in a markdown code block.
    // Updated regex to be more robust with whitespace handling
    const jsonMatch = sanitizedText.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    if (jsonMatch && jsonMatch[1]) {
        try {
            return JSON.parse(jsonMatch[1]);
        } catch (e) {
            console.error("Failed to parse JSON from markdown block. Falling back to parsing the full text.", e);
        }
    }

    // Fallback for when the response is just the JSON string.
    try {
        return JSON.parse(sanitizedText);
    } catch (e) {
        console.error("Failed to parse text as JSON:", sanitizedText);
        throw new Error("Invalid JSON response from the model.");
    }
}


/**
 * Extracts grounding sources from the model's response.
 * @param response The full response object from generateContent.
 * @returns An array of grounding sources.
 */
function extractSources(response: any): GroundingSource[] {
    const groundingMetadata = response.candidates?.[0]?.groundingMetadata;
    if (!groundingMetadata?.groundingChunks) {
        return [];
    }
    // Fix: Correctly extract web URI and title from grounding chunks.
    return groundingMetadata.groundingChunks
        .map((chunk: any) => chunk.web)
        .filter((web: any) => web && web.uri)
        .map((web: any) => ({
            uri: web.uri,
            title: web.title || '',
        }));
}

export async function fetchNewsData(): Promise<{ newsData: NewsCategory[], sources: GroundingSource[] }> {
    // Fetch each category in parallel to ensure reliability and prevent token limits/timeouts
    // that cause invalid JSON responses when fetching everything at once.
    const categoryPromises = NEWS_DATA.map(async (category) => {
        const prompt = `
            Generate a summary of the latest, most significant news and breakthroughs for the tech category: "${category.title}" (ID: ${category.id}).

            Requirements:
            1. Provide exactly 5 key news items.
            2. Each item must have a concise, one-sentence description and a relevant source URL.
            3. Provide 4-6 trending topics/keywords for this category.
            4. Focus on news from the last 7 days.
            
            Output JSON format:
            {
                "id": "${category.id}",
                "trendingTopics": ["topic1", "topic2"],
                "items": [
                    {
                        "id": "unique-id-1",
                        "title": "News Title",
                        "description": "Short description.",
                        "url": "https://source.url"
                    }
                ]
            }
        `;

        try {
            const response = await ai.models.generateContent({
                model: model,
                contents: prompt,
                config: {
                    tools: [{ googleSearch: {} }],
                },
            });

            const data = parseJsonResponse(response.text);
            const sources = extractSources(response);

            // Validate and sanitize structure
            const items = Array.isArray(data.items) ? data.items.map((item: any) => ({
                id: item.id || Math.random().toString(36).substring(7),
                title: item.title || 'Untitled',
                description: item.description || '',
                url: item.url || '#'
            })) : [];

            return {
                category: {
                    ...category,
                    trendingTopics: Array.isArray(data.trendingTopics) ? data.trendingTopics : [],
                    items: items,
                },
                sources: sources
            };
        } catch (error) {
            console.error(`Error fetching category ${category.title}:`, error);
            // Return the static category data as fallback so the app doesn't crash
            return {
                category: { ...category, items: [], trendingTopics: [] },
                sources: []
            };
        }
    });

    const results = await Promise.all(categoryPromises);

    const newsData = results.map(r => r.category);
    
    // Aggregate and deduplicate sources
    const allSources = results.flatMap(r => r.sources);
    const uniqueSourcesMap = new Map();
    allSources.forEach(s => uniqueSourcesMap.set(s.uri, s));
    const uniqueSources = Array.from(uniqueSourcesMap.values());

    return { newsData, sources: uniqueSources };
}

export async function fetchLLMRankings(): Promise<LLMRankingItem[]> {
    // Update the prompt to fetch the most current rankings.
    const prompt = `
      Provide a list of the top 10 Large Language Models (LLMs), including Grok, based on the very latest performance benchmarks (e.g., from leaderboards like LMSys Chatbot Arena) and recent community consensus.
      The data should be as current as possible.
      For each model, include its rank, name, developer, and an overall score out of 100 representing its general capability.
      The output must be a valid JSON array matching this structure: [{rank: number, name: string, developer: string, score: number}].
    `;

    try {
        // Fix: Use generateContent with googleSearch tool for up-to-date information.
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                tools: [{ googleSearch: {} }],
            },
        });

        const jsonData = parseJsonResponse(response.text);
        return jsonData as LLMRankingItem[];
    } catch (error) {
        console.error("Failed to fetch LLM rankings:", error);
        return [];
    }
}

export function createChat(contextData: { newsData: NewsCategory[], rankingsData: LLMRankingItem[] }): Chat {
    const contextString = JSON.stringify(contextData);
    const systemInstruction = `
        You are a highly intelligent AI assistant, powered by Gemini 2.5 Pro. Your name is "Briefing Bot".
        You are embedded in a web app that displays a daily briefing on AI and technology.
        Your primary goal is to act as an expert investigator for the user.
        It is crucial that you follow user instructions precisely, especially regarding the length and format of your answers.
        First, check if the answer can be found in the page's CONTEXT provided below.
        If the information is not in the context or if the user asks for more details, use your ability to search the internet to find the most accurate and up-to-date information.
        You are not limited to the on-page context. Be resourceful and provide comprehensive answers.
        Do not use markdown in your responses.

        CONTEXT:
        ${contextString}
    `;

    const chat: Chat = ai.chats.create({
        model: 'gemini-2.5-pro', // Upgraded model for better chat performance
        config: {
            systemInstruction: systemInstruction,
            tools: [{ googleSearch: {} }],
        },
    });
    return chat;
}

/**
 * Generates a unique, abstract background image reflecting the day's tech trends.
 */
export async function generateDailyBackground(trends: string[]): Promise<string | null> {
    const uniqueTrends = [...new Set(trends)].slice(0, 5); // Reduced to 5 items
    // Enhanced prompt to strictly forbid text and focus on 3D GFX/abstract art
    const prompt = `
        Create a stunning, photorealistic 3D abstract background wallpaper that visually represents these technology concepts: ${uniqueTrends.join(', ')}.
        
        Visual Direction: "GFX", High-tech, Abstract, 3D Rendering.
        Content: Use abstract geometric shapes, glowing data streams, intricate circuit patterns, neural nodes, and futuristic metallic structures to represent the trends.
        
        CRITICAL CONSTRAINT: ABSOLUTELY NO TEXT, NO LETTERS, NO WORDS, NO NUMBERS, NO TYPOGRAPHY. The image must be pure visual art.
        
        Atmosphere: Deep, dark, sophisticated, and mysterious.
        Colors: Dark slate, midnight blue, void black, with subtle neon cyan and electric violet highlights.
        Lighting: Cinematic, volumetric, soft glows.
        Composition: Wide-angle, uncluttered center (for website content), detailed edges.
        Quality: 8k resolution, Unreal Engine 5 style, hyper-detailed.
    `;

    try {
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: prompt,
            config: {
                numberOfImages: 1,
                outputMimeType: 'image/jpeg',
                aspectRatio: '16:9',
            }
        });
        
        const base64 = response.generatedImages?.[0]?.image?.imageBytes;
        return base64 ? `data:image/jpeg;base64,${base64}` : null;
    } catch (e) {
        console.error("Failed to generate background image:", e);
        return null;
    }
}
