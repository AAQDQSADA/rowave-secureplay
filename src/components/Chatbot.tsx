import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MessageCircle, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const RESPONSES = {
  pricing: {
    keywords: ["price", "cost", "pricing", "subscription", "plan", "payment"],
    response: "We offer three plans: Basic ($9.99/mo), Pro ($19.99/mo), and Enterprise (custom pricing). Each plan includes different levels of protection and features. Would you like to know more about a specific plan?",
  },
  security: {
    keywords: ["secure", "security", "protection", "safe", "protect"],
    response: "RoWave uses industry-leading security measures including AI-driven analysis, real-time monitoring, and automated threat detection. Our system processes over 1M+ security events daily with a 99.9% accuracy rate.",
  },
  features: {
    keywords: ["feature", "capabilities", "can", "do", "what"],
    response: "RoWave offers comprehensive game protection features including: \n• Event Security\n• AI-Driven Analysis\n• Real-Time Alerts\n• Admin Dashboard\n• Automated Bans\n• Live Protection Status",
  },
  support: {
    keywords: ["help", "support", "contact", "assistance", "reach"],
    response: "Our support team is available 24/7! You can reach us through:\n• Email: support@rowave.com\n• Discord: discord.gg/rowave\n• Documentation: docs.rowave.com",
  },
  games: {
    keywords: ["game", "protect", "roblox", "protection"],
    response: "RoWave protects over 2,500+ games across different genres. We support all types of Roblox games and offer specialized protection for different game mechanics.",
  },
  stats: {
    keywords: ["statistics", "numbers", "users", "active"],
    response: "RoWave currently protects:\n• 50,000+ Active Users\n• 1,000,000+ Threats Blocked\n• 2,500+ Games Protected\n• 99.9% Accuracy Rate",
  },
  team: {
    keywords: ["team", "company", "who", "people"],
    response: "Our expert team includes:\n• Ibra (Founder + Developer)\n• Diego (Head Developer)\n• Chris (Backend Dev)\nAll dedicated to providing the best game security solutions.",
  },
  greeting: {
    keywords: ["hi", "hello", "hey", "morning", "afternoon", "evening"],
    response: "Hello! I'm the RoWave Assistant. I'm here to help you with any questions about our game protection services. What would you like to know?",
  }
};

const HARMFUL_KEYWORDS = ["hack", "exploit", "bypass", "crack", "steal", "malicious"];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Hi! I'm RoWave Assistant. How can I help you today?", isBot: true },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const checkForHarmfulContent = (message: string) => {
    return HARMFUL_KEYWORDS.some(keyword => 
      message.toLowerCase().includes(keyword)
    );
  };

  const generateResponse = async (userMessage: string) => {
    if (!isVerified && !userMessage.startsWith("HTMQ")) {
      return "Please enter the verification code 'HTMQ' before your message to continue.";
    }

    if (userMessage.startsWith("HTMQ")) {
      setIsVerified(true);
      return "Verification successful! How can I assist you today?";
    }

    if (checkForHarmfulContent(userMessage)) {
      return "I apologize, but I cannot assist with potentially harmful or malicious requests. Is there something else I can help you with?";
    }

    const lowercaseMessage = userMessage.toLowerCase();
    
    // Check for exact matches first
    for (const category of Object.values(RESPONSES)) {
      if (category.keywords.some(keyword => lowercaseMessage === keyword)) {
        return category.response;
      }
    }
    
    // Generate a more natural response based on keywords
    let bestMatch = {
      response: "",
      matchCount: 0
    };

    for (const category of Object.values(RESPONSES)) {
      const matchCount = category.keywords.filter(keyword => 
        lowercaseMessage.includes(keyword)
      ).length;

      if (matchCount > bestMatch.matchCount) {
        bestMatch = {
          response: category.response,
          matchCount
        };
      }
    }

    // If no good match is found, provide a more natural response
    if (bestMatch.matchCount === 0) {
      return "I understand you're asking about " + userMessage + ". Could you please provide more specific details about what you'd like to know? I can help with information about our features, pricing, security measures, or support options.";
    }

    return bestMatch.response;
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
                  placeholder={isVerified ? "Type your message..." : "Enter HTMQ followed by your message..."}
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