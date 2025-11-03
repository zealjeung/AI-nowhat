import { GoogleGenAI } from "@google/genai";
import { NEWS_DATA } from '../constants';
import type { NewsCategory, LLMRankingItem, GroundingSource } from '../types';

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
    const categoryInfo = NEWS_DATA.map(cat => ({
        id: cat.id,
        title: cat.title,
        item_ideas: cat.items.map(item => item.title).join(', ')
    }));

    const prompt = `
      Generate a summary of the latest news and breakthroughs for the following tech categories.
      For each category, provide a list of 5-7 key items with a concise, one-sentence description for each.
      The information must be very recent, reflecting the current state of the industry.
      The output must be a valid JSON array matching this structure: [{id: string, title: string, items: [{id: string, title: string, description: string}]}].
      Use the provided IDs for categories and generate unique IDs for news items.
      
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
        return {
            ...generatedCategory,
            icon: staticCategory ? staticCategory.icon : undefined,
        };
    }).filter((cat: any): cat is NewsCategory => !!cat.icon); // Filter out any categories that couldn't be matched and ensure type correctness

    const sources = extractSources(response);

    return { newsData: newsDataWithIcons, sources };
}

export async function fetchLLMRankings(): Promise<LLMRankingItem[]> {
    const prompt = `
      Provide a list of the top 10 Large Language Models (LLMs), including Grok, based on the latest performance benchmarks and community consensus.
      For each model, include its rank, name, developer, and an overall score out of 100.
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