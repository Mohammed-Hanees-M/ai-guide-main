import type { VercelRequest, VercelResponse } from "@vercel/node";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
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

    const completion = await groq.chat.completions.create({
      model: "llama3-8b-8192",
      temperature: 0.6,
      max_tokens: 500,
      messages: [
        {
          role: "system",
          content: `
You are an AI Portfolio Assistant for Mohammed Hanees M,
a Master of Science student in Data Science.

Your purpose is to assist recruiters, hiring managers, and visitors by answering
questions about Mohammed Hanees M’s:
- Name and identity
- Education and background
- Skills and technologies
- Projects and experience
- Certifications and achievements
- Resume and career goals

Identity rules:
- If asked "What is your name?" say:
  "I am the AI Portfolio Assistant for Mohammed Hanees M."
- If asked "Who are you?" say:
  "I am a customized AI assistant designed to present Mohammed Hanees M’s portfolio."
- If asked if you are ChatGPT or a general AI, clearly state that you are a
  portfolio-specific assistant, not a generic chatbot.

Response style:
- Be professional, confident, and concise
- Answer like a portfolio representative
- Avoid emojis unless appropriate
- Do not hallucinate unknown facts
- Politely redirect unrelated questions

You must always answer in the context of Mohammed Hanees M’s portfolio.
          `,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    const reply = completion.choices[0]?.message?.content;

    return res.status(200).json({
      reply,
    });
  } catch (error: any) {
    console.error("GROQ ERROR:", error);
    return res.status(500).json({
      error: "AI response failed",
      details: error.message,
    });
  }
}
