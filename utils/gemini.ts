
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
    const jsonMatch = sanitizedText.match(/```(?:json)?\n([\s\S]*?)\n```/);
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
    // Remove the static 'item_ideas' to allow the model to find the latest trending news.
    const categoryInfo = NEWS_DATA.map(cat => ({
        id: cat.id,
        title: cat.title,
    }));

    // Update the prompt to be more explicit about fetching recent, trending news.
    // Reduced item count to 6 to prevent context limit issues and timeouts, ensuring all categories are returned.
    const prompt = `
      Generate a summary of the latest, most significant news and breakthroughs for the following tech categories.
      For each category, provide a list of exactly 6 key items. This is a strict requirement. Each item must have a concise, one-sentence description and a relevant source URL.
      Also, for each category, provide a list of 4-6 trending topics or keywords that are currently buzzing in that area (e.g., "Generative Video", "RAG", "LLM Agents").
      The information must be from the last few days to reflect the absolute current state of the industry.
      Focus on trending topics, major announcements, and significant updates.
      Do not skip any categories.
      The output must be a valid JSON array matching this structure: [{id: string, title: string, trendingTopics: string[], items: [{id: string, title: string, description: string, url: string}]}].
      Use the provided IDs for categories and generate unique, descriptive IDs for each news item (e.g., 'openai-sora-2-release').
      
      Categories to populate:
      ${JSON.stringify(categoryInfo, null, 2)}
    `;

    // Fix: Use generateContent with googleSearch tool for up-to-date information.
    const response = await ai.models.generateContent({
        model: model,
        contents: prompt,
        config: {
            tools: [{ googleSearch: {} }],
        },
    });

    const jsonData = parseJsonResponse(response.text);

    // Combine generated data with static data (like icons)
    const newsDataWithIcons: NewsCategory[] = jsonData.map((generatedCategory: any) => {
        const staticCategory = NEWS_DATA.find(c => c.id === generatedCategory.id);
        const itemsWithUrl = (generatedCategory.items || []).filter((item: NewsItem) => item.url);
        return {
            ...generatedCategory,
            icon: staticCategory ? staticCategory.icon : undefined,
            items: itemsWithUrl,
        };
    }).filter((cat: any): cat is NewsCategory => !!cat.icon); // Filter out any categories that couldn't be matched and ensure type correctness

    const sources = extractSources(response);

    return { newsData: newsDataWithIcons, sources };
}

export async function fetchLLMRankings(): Promise<LLMRankingItem[]> {
    // Update the prompt to fetch the most current rankings.
    const prompt = `
      Provide a list of the top 10 Large Language Models (LLMs), including Grok, based on the very latest performance benchmarks (e.g., from leaderboards like LMSys Chatbot Arena) and recent community consensus.
      The data should be as current as possible.
      For each model, include its rank, name, developer, and an overall score out of 100 representing its general capability.
      The output must be a valid JSON array matching this structure: [{rank: number, name: string, developer: string, score: number}].
    `;

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
