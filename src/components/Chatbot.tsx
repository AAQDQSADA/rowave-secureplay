import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MessageCircle, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Hi! I'm RoWave Assistant. How can I help you today?", isBot: true },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generateResponse = async (userMessage: string) => {
    // This is a simple response generation logic
    // In production, you would connect this to a real AI service
    const keywords = {
      "pricing": "We offer three plans: Basic ($9.99/mo), Pro ($19.99/mo), and Enterprise (custom pricing). Check our pricing page for more details!",
      "license": "You can generate a license key in our Key Generator page. Each key is unique and secure.",
      "features": "RoWave offers secure key generation, real-time validation, and usage analytics. Visit our documentation for the full feature list.",
      "support": "We provide 24/7 support through this chat assistant and email support@rowave.com",
      "security": "We use industry-standard encryption and security practices to protect your keys and data.",
    };

    let response = "I apologize, but I'm not sure about that. Could you try rephrasing your question?";
    
    for (const [key, value] of Object.entries(keywords)) {
      if (userMessage.toLowerCase().includes(key)) {
        response = value;
        break;
      }
    }

    return new Promise<string>(resolve => {
      setTimeout(() => resolve(response), 1000);
    });
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput("");
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setIsLoading(true);

    try {
      const response = await generateResponse(userMessage);
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    } catch (error) {
      toast.error("Sorry, I couldn't process your request. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 rounded-full w-12 h-12 bg-blue-500 hover:bg-blue-600 shadow-lg animate-bounce"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200"
          >
            <div className="bg-blue-500 p-4 flex justify-between items-center">
              <h3 className="text-white font-semibold">RoWave Assistant</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-blue-100"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="h-96 overflow-y-auto p-4 bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 ${message.isBot ? "text-left" : "text-right"}`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      message.isBot
                        ? "bg-blue-100 text-blue-900"
                        : "bg-blue-500 text-white"
                    } max-w-[90%]`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-gray-500"
                >
                  <div className="flex gap-1 justify-center items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </motion.div>
              )}
            </div>

            <div className="p-4 border-t">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button type="submit" size="icon" disabled={isLoading}>
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};