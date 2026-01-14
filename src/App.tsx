import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import AIChatbot from "./components/AIChatbot";
import ChatLauncher from "./components/ChatLauncher";

const queryClient = new QueryClient();

const App = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/** Use Vite's BASE_URL so builds served from a subpath work,
         *  while local previews served at `/` also work. BASE_URL may end
         *  with a trailing slash, remove it for `basename`. */}
        <BrowserRouter
          basename={(import.meta.env.BASE_URL || "/").replace(/\/$/, "") || "/"}
        >
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

        {/* ================= CHATBOT LOGIC ================= */}
        {!chatOpen && (
          <ChatLauncher onClick={() => setChatOpen(true)} />
        )}

        {chatOpen && (
          <AIChatbot onClose={() => setChatOpen(false)} />
        )}
        {/* ================================================= */}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
