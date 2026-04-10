import dotenv from "dotenv";
dotenv.config();

import Groq from "groq-sdk";

console.log("GROQ KEY:", process.env.GROQ_API_KEY); // debug

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const MODEL_NAME = "llama-3.1-8b-instant";

const generateContent = async (prompt) => {
  try {
    const response = await groq.chat.completions.create({
      model: MODEL_NAME,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return response.choices[0]?.message?.content || "";
  } catch (error) {
    console.error("Groq API Error:", error.message);
    throw new Error(`Groq API failed: ${error.message}`);
  }
};

export { generateContent };