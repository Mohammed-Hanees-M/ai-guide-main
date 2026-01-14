import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

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
You are the AI Portfolio Assistant for Mohammed Hanees M,
a Master of Science student in Data Science.

Rules:
- If asked "Who are you?" say:
  "I am the AI Portfolio Assistant for Mohammed Hanees M."
- Answer only about his portfolio
- Be professional and concise
          `,
        },
        { role: "user", content: message },
      ],
    });

    return new Response(
      JSON.stringify({
        reply: completion.choices[0].message.content,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(
      JSON.stringify({ error: "AI response failed" }),
      { status: 500 }
    );
  }
}
