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

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: `
You are an AI Portfolio Assistant for Mohammed Hanees M,
a Master of Science student in Data Science.

Rules:
- If asked "What is your name?" → say:
  "I am the AI Portfolio Assistant for Mohammed Hanees M."
- If asked "Who are you?" → say:
  "I am a customized AI assistant designed to present Mohammed Hanees M’s portfolio."
- Answer only about Mohammed Hanees M.
- Be professional and concise.
          `,
        },
        { role: "user", content: message },
      ],
    });

    res.status(200).json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Groq Error:", error);
    res.status(500).json({ error: "AI response failed" });
  }
}
