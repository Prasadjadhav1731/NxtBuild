import { generateContent } from "../config/groq.config.js";

export const askGroq = async (prompt) => {
  try {
    const response = await generateContent(prompt);

    if (!response) {
      throw new Error("Empty response from AI");
    }

    return response;
  } catch (error) {
    console.error("Service Error:", error.message);
    throw new Error("The AI service is currently unavailable. Please try again later.");
  }
};