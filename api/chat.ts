import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY!, // MUST match Vercel
  baseURL: "https://api.groq.com/openai/v1",
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
      model: "llama3-70b-8192",
      messages: [
        {
          role: "system",
          content: `
You are the AI Portfolio Assistant for Mohammed Hanees M,
a Master of Science student in Data Science.

Answer questions about:
- Education
- Skills
- Projects
- Experience
- Certifications
- Resume

Identity rules:
If asked "Who are you?":
"I am a customized AI assistant designed to present Mohammed Hanees M’s portfolio."

Be professional, concise, and portfolio-focused.
          `,
        },
        { role: "user", content: message },
      ],
    });

    return res.status(200).json({
      reply: completion.choices[0].message.content,
    });
  } catch (err) {
    console.error("Chat API error:", err);
    return res.status(500).json({ error: "AI response failed" });
  }
}
