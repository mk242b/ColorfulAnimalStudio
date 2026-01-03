import { GoogleGenAI, Type } from "@google/genai";
import { CharacterIdea } from '../types';

const apiKey = process.env.API_KEY || '';

// We use the flash model for quick, creative text generation
const MODEL_NAME = 'gemini-3-flash-preview';

export const generateCharacterConcept = async (animal: string, theme: string): Promise<CharacterIdea | null> => {
  if (!apiKey) {
    console.warn("API Key is missing. Please provide a valid API Key.");
    return null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const prompt = `Create a fun, kid-friendly character concept for a customized game or animation. 
    The character is a "${animal}" with a theme of "${theme}".
    Provide a name, a description of appearance, 3 personality traits, and a short story hook.
    Make it colorful and imaginative.`;

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            species: { type: Type.STRING },
            description: { type: Type.STRING },
            personality: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            storyHook: { type: Type.STRING }
          },
          required: ["name", "species", "description", "personality", "storyHook"]
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    
    return JSON.parse(text) as CharacterIdea;

  } catch (error) {
    console.error("Error generating character concept:", error);
    return null;
  }
};