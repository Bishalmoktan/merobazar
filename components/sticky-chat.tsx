"use client";

import type React from "react";
import { X, Paperclip, Send, MessagesSquare } from "lucide-react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
  id: string;
  text: string;
  sender: "user" | "seller";
  timestamp: string;
}

export default function StickyChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi Sir 👋",
      sender: "user",
      timestamp: "11:31 AM",
    },
    {
      id: "2",
      text: "Is the price negotiable?",
      sender: "user",
      timestamp: "11:31 AM",
    },
    {
      id: "3",
      text: "Hi",
      sender: "seller",
      timestamp: "11:31 AM",
    },
    {
      id: "4",
      text: "Yes for ure, i can do 15,000",
      sender: "seller",
      timestamp: "11:31 AM",
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: message,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Online Users Indicator */}
        {!isOpen && (
          <div className="mb-4 bg-white rounded-full px-4 py-2 shadow-lg border border-gray-200 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium">
              <span className="text-green-500 font-bold">1233</span> people
              online
            </span>
          </div>
        )}

        {/* Chat Button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-indigo-600 hover:bg-indigo-700 shadow-lg cursor-pointer"
          size="icon"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <MessagesSquare className="size-7 text-white" />
          )}
        </Button>
      </div>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <MessagesSquare className="h-5 w-5 text-indigo-600" />
              <h3 className="font-semibold text-gray-900">Product Chat</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 text-gray-500 hover:text-gray-700"
            >
              <X className="size-5 text-red-500" />
            </Button>
          </div>

          {/* Seller Info */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium text-gray-900">Seller Name</h4>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    msg.sender === "user"
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-500 text-white"
                  }`}
                >
                  <p>{msg.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      msg.sender === "user"
                        ? "text-indigo-200"
                        : "text-gray-300"
                    }`}
                  >
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-gray-500"
              >
                <Paperclip className="h-4 w-4" />
              </Button>
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="chat with the seller"
                className="flex-1 text-sm"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="h-8 w-8 bg-indigo-600 hover:bg-indigo-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
