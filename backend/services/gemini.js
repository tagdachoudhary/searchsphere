import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const generateSummary = async (query, searchResults) => {
  const prompt = `
You are SearchSphere AI.

Search Query:
${query}

Search Results:
${searchResults
  .map(
    (result, index) => `
${index + 1}. ${result.title}
${result.snippet}
Source: ${result.link}
`
  )
  .join("\n")}

Instructions:
- Give a concise summary.
- Use bullet points.
- Mention only important facts.
- End with a short conclusion.
`;

  const response = await ai.models.generateContent({
    model: "gemini-flash-latest",
    contents: prompt,
  });

  return response.text;
};