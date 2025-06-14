"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

export function PlantChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content:
        "Hello! I'm your AI plant care assistant. I can help you with plant diseases, care tips, watering schedules, and more. What would you like to know?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef(null);
  const inputRef = useRef(null);

  const quickQuestions = [
    "How often should I water my plants?",
    "What are signs of overwatering?",
    "How to prevent plant diseases?",
    "Best fertilizer for houseplants?",
    "Why are my plant leaves turning yellow?",
    "How to increase humidity for plants?",
  ];

  useEffect(() => {
    // Scroll to bottom when new messages are added
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      );
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (message = inputMessage) => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: message.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse = generateAIResponse(message.trim());
      const aiMessage = {
        id: Date.now() + 1,
        type: "ai",
        content: aiResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // Random delay between 1.5-2.5 seconds
  };

  const generateAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    // Simple keyword-based responses (in a real app, this would be actual AI)
    if (message.includes("water") || message.includes("watering")) {
      return "Most houseplants prefer to dry out slightly between waterings. Check the soil moisture by inserting your finger about 1-2 inches deep. If it's dry, it's time to water. Generally, this means watering every 7-10 days, but it varies by plant type, season, and environment.";
    }

    if (message.includes("yellow") || message.includes("yellowing")) {
      return "Yellow leaves can indicate several issues: 1) Overwatering (most common) - check if soil is soggy, 2) Underwatering - soil completely dry, 3) Natural aging - lower leaves yellow first, 4) Nutrient deficiency - especially nitrogen, 5) Too much direct sunlight. Check your watering routine first!";
    }

    if (message.includes("disease") || message.includes("sick")) {
      return "Common signs of plant diseases include: yellowing leaves, brown spots, white powdery coating, wilting, or unusual growth. Prevention is key: ensure good air circulation, avoid overwatering, remove dead plant material, and quarantine new plants. Would you like me to help identify a specific issue?";
    }

    if (message.includes("fertilizer") || message.includes("feed")) {
      return "For most houseplants, use a balanced liquid fertilizer (like 10-10-10 or 20-20-20) diluted to half strength every 2-4 weeks during growing season (spring/summer). Reduce or stop fertilizing in fall/winter. Organic options include compost tea or fish emulsion.";
    }

    if (message.includes("humidity")) {
      return "Many houseplants thrive with 40-60% humidity. Increase humidity by: 1) Using a humidifier, 2) Placing plants on pebble trays with water, 3) Grouping plants together, 4) Misting (but avoid fuzzy leaves), 5) Using a bathroom with good light for humidity-loving plants.";
    }

    if (message.includes("light") || message.includes("sun")) {
      return "Light requirements vary by plant: 1) Bright direct light: succulents, cacti, 2) Bright indirect light: most houseplants like pothos, snake plants, 3) Low light: ZZ plants, peace lilies. Signs of too much light: scorched/brown leaves. Too little: leggy growth, pale leaves.";
    }

    if (message.includes("pest") || message.includes("bug")) {
      return "Common houseplant pests include aphids, spider mites, mealybugs, and fungus gnats. Treatment options: 1) Insecticidal soap spray, 2) Neem oil, 3) Rubbing alcohol on cotton swabs for spot treatment, 4) Yellow sticky traps for flying pests. Isolate affected plants immediately!";
    }

    if (message.includes("repot") || message.includes("transplant")) {
      return "Repot when: roots grow through drainage holes, water runs straight through, plant becomes top-heavy, or growth slows significantly. Best time is spring. Choose a pot 1-2 inches larger in diameter. Use fresh potting mix and water thoroughly after repotting.";
    }

    // Default responses for unmatched queries
    const defaultResponses = [
      "That's a great question! Plant care can be complex, and each plant has unique needs. Could you provide more specific details about your plant or the issue you're experiencing?",
      "I'd be happy to help with that! For the most accurate advice, it would be helpful to know what type of plant you're dealing with and any specific symptoms you've noticed.",
      "Plant care involves many factors like light, water, humidity, and soil. Could you tell me more about your specific situation so I can give you targeted advice?",
      "Every plant is different! To give you the best guidance, I'd need to know more about your plant type, current care routine, and any problems you're seeing.",
    ];

    return defaultResponses[
      Math.floor(Math.random() * defaultResponses.length)
    ];
  };

  const handleQuickQuestion = (question) => {
    handleSendMessage(question);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="mx-auto h-[600px] max-w-2xl">
      <CardHeader className="bg-green-50">
        <CardTitle className="flex items-center gap-2 text-green-800">
          <div className="rounded-full bg-green-600 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-message-circle"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
          </div>
          Chat with Plant AI Assistant
          <Badge variant="secondary" className="ml-auto">
            Online
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex h-[500px] flex-col p-0">
        <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.type === "user"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p
                    className={`mt-1 text-xs ${
                      message.type === "user"
                        ? "text-green-100"
                        : "text-gray-500"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg bg-gray-100 px-4 py-2">
                  <div className="flex items-center space-x-1">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]"></div>
                      <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]"></div>
                      <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
                    </div>
                    <span className="ml-2 text-xs text-gray-500">
                      AI is typing...
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Quick Questions */}
        <div className="border-t bg-gray-50 p-3">
          <p className="mb-2 text-xs font-medium text-gray-600">
            Quick Questions:
          </p>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.slice(0, 3).map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="h-auto whitespace-normal p-2 text-xs"
                onClick={() => handleQuickQuestion(question)}
                disabled={isTyping}
              >
                {question}
              </Button>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t p-4">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about plant care..."
              disabled={isTyping}
              className="flex-1"
            />
            <Button
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim() || isTyping}
              className="bg-green-600 hover:bg-green-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-send"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
