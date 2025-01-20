"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, X } from 'lucide-react';

interface Message {
  content: string;
  sender: "user" | "bot";
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://portfolio-backend-jg4d.onrender.com';

export function Chatbot({ onClose }: { onClose: () => void }) {
  const initialMessage: Message = {
    content: "Hi, I am an AI Assistant that can answer any questions you have about Yash! How can I help you today?",
    sender: "bot",
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstMessage, setIsFirstMessage] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage: Message = { content: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    if (isFirstMessage) {
      const loadingMessage: Message = {
        content: "Just a moment! The server is warming up (this might take up to 50 seconds for the first message).",
        sender: "bot"
      };
      setMessages((prev) => [...prev, loadingMessage]);
    }

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'An error occurred');
      }

      const data = await response.json();
      
      // Remove the loading message if it was the first message
      if (isFirstMessage) {
        setMessages((prev) => prev.filter(msg => msg.content !== "Please wait up to 50 seconds for the first response."));
        setIsFirstMessage(false);
      }

      const botMessage: Message = {
        content: data.response.answer || "Sorry, I couldn't generate a response.",
        sender: "bot",
      };
      
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        content: error instanceof Error ? error.message : "Sorry, I encountered an error. Please try again.",
        sender: "bot"
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="relative flex flex-col h-full bg-background text-text">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 z-10"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] p-2 rounded-lg text-sm ${
                  message.sender === "user"
                    ? "bg-foreground text-background"
                    : "bg-muted"
                }`}
              >
                <div className="whitespace-pre-wrap">{message.content}</div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted p-2 rounded-lg">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-4 border-t border-foreground/20">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex space-x-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 text-sm"
              disabled={isLoading}
            />
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}