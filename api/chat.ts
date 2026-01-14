import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY!, // ✅ FIXED
  baseURL: "https://api.groq.com/openai/v1", // ✅ GROQ endpoint
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const completion = await client.chat.completions.create({
      model: "llama3-70b-8192", // ✅ GROQ model
      messages: [
        {
          role: "system",
          content: `
You are an AI Portfolio Assistant for Mohammed Hanees M,
a Master of Science student in Data Science.

Your purpose is to assist recruiters and visitors by answering
questions about:
- Education
- Skills
- Projects
- Experience
- Certifications
- Resume

Identity rules:
- If asked "What is your name?" say:
  "I am the AI Portfolio Assistant for Mohammed Hanees M."
- If asked "Who are you?" say:
  "I am a customized AI assistant designed to present Mohammed Hanees M’s portfolio."

Response style:
- Professional and concise
- Portfolio-focused
- No hallucination
`
        },
        { role: "user", content: message },
      ],
    });

    return res.status(200).json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return res.status(500).json({ error: "AI response failed" });
  }
}
