import { useState } from "react";

type Message = {
  role: "user" | "ai";
  text: string;
};

type Props = {
  onClose: () => void;
};

const quickActions = [
  "Projects",
  "Skills",
  "Experience",
  "Certifications",
  "Resume",
];

export default function AIChatbot({ onClose }: Props) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Hello! I’m the AI Portfolio Assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text?: string) => {
    const messageToSend = text || input;
    if (!messageToSend.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: messageToSend }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageToSend }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "ai", text: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text:
            "The assistant is currently unavailable in preview mode. Please try the deployed version.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 w-80 h-[32rem] bg-white rounded-xl shadow-2xl flex flex-col z-50 border">
      {/* Header */}
      <div className="bg-blue-600 text-white p-3 rounded-t-xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
            🤖
          </div>
          <div className="text-sm font-semibold">AI Portfolio Assistant</div>
        </div>
        <button onClick={onClose} className="text-sm hover:opacity-80">
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm bg-gray-50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`px-3 py-2 rounded-lg max-w-[85%] text-gray-800 ${
              msg.role === "user"
                ? "ml-auto bg-blue-100 text-right"
                : "mr-auto bg-white border"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="bg-white border px-3 py-2 rounded-lg w-fit text-xs text-gray-500">
            Typing…
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="px-3 py-2 border-t bg-white grid grid-cols-2 gap-2">
        {quickActions.map((action) => (
          <button
            key={action}
            onClick={() => sendMessage(`Tell me about your ${action}`)}
            className="border border-blue-500 text-blue-600 rounded-lg text-xs py-1 hover:bg-blue-50"
          >
            {action}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="p-2 border-t flex gap-2 bg-white">
        <input
          className="flex-1 border rounded-lg px-3 py-2 text-sm
                     bg-white text-gray-900 placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={() => sendMessage()}
          className="bg-blue-600 text-white px-4 rounded-lg text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}
