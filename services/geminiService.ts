
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

export const generateAIResponse = async (userInput: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Prepare conversation context
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });

    // Note: In real scenarios, we'd feed the history into the chat
    // For this simple version, we'll send the user message directly
    const response = await chat.sendMessage({ message: userInput });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Désolé, je rencontre une petite erreur technique. Vous pouvez contacter Emryc directement via WhatsApp au +237672170259 !";
  }
};
