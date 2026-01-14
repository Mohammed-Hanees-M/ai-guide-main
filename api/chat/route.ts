import OpenAI from "openai";

export const runtime = "edge"; // ✅ IMPORTANT

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return new Response(
        JSON.stringify({ error: "Message is required" }),
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are an AI Portfolio Assistant for Mohammed Hanees M,
a Master of Science student in Data Science.

Your job is to answer questions about:
- Education
- Skills
- Projects
- Experience
- Certifications
- Resume

Rules:
- If asked "Who are you?" say:
  "I am the AI Portfolio Assistant for Mohammed Hanees M."
- Be professional and concise
- Do NOT hallucinate information
`,
        },
        { role: "user", content: message },
      ],
    });

    return new Response(
      JSON.stringify({
        reply: completion.choices[0].message.content,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(
      JSON.stringify({ error: "AI response failed" }),
      { status: 500 }
    );
  }
}
