'use client'

import { useState } from 'react';
import { Bot, ThumbsUp, ThumbsDown, Send, Mic, ChevronDown, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm SmartSahayak Assistant. How can I help you with your banking needs today?",
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const languages = [
    { value: 'english', label: 'English' },
    { value: 'hindi', label: 'Hindi' },
    { value: 'marathi', label: 'Marathi' },
    { value: 'tamil', label: 'Tamil' },
    { value: 'telugu', label: 'Telugu' },
    { value: 'kannada', label: 'Kannada' },
    { value: 'gujarati', label: 'Gujarati' },
    { value: 'bengali', label: 'Bengali' },
    { value: 'malayalam', label: 'Malayalam' },
    { value: 'odia', label: 'Odia' },
    { value: 'punjabi', label: 'Punjabi' },
  ];

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputText,
        isUser: true,
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setInputText('');
      
      // Simulate assistant response
      setTimeout(() => {
        const assistantResponse: Message = {
          id: messages.length + 2,
          text: "Thank you for your message. I'm here to help you with your banking queries. Could you please provide more details about what you need assistance with?",
          isUser: false,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, assistantResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Assistant Header */}
      <div className="border-b border-border bg-card shadow-sm p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-primary/10 rounded-full p-2">
              <Bot className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">SmartSahayak Assistant</h1>
              <p className="text-sm text-muted-foreground">Your Banking Helper</p>
            </div>
          </div>
          
          {/* Back to Home Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.location.href = '/'}
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to Home</span>
          </Button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="max-w-4xl mx-auto flex flex-col h-[calc(100vh-140px)]">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="space-y-2">
                <div
                  className={`flex ${
                    message.isUser ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-xs sm:max-w-md lg:max-w-lg p-4 rounded-lg ${
                      message.isUser
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card border border-border shadow-sm'
                    }`}
                  >
                    <p className="text-sm sm:text-base leading-relaxed">
                      {message.text}
                    </p>
                  </div>
                </div>
                
                {/* Feedback buttons for assistant messages */}
                {!message.isUser && (
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <span>Was this helpful?</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-6 w-6 p-0 hover:bg-accent"
                    >
                      <ThumbsUp className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-6 w-6 p-0 hover:bg-accent"
                    >
                      <ThumbsDown className="h-3 w-3" />
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t border-border bg-card p-4">
          <div className="flex items-center space-x-2">
            {/* Language Selector */}
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-32 sm:w-36">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((language) => (
                  <SelectItem key={language.value} value={language.value}>
                    {language.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Message Input */}
            <div className="flex-1 flex items-center space-x-2 bg-background border border-input rounded-md px-3 py-2">
              <Input
                placeholder="Type your message..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                className="border-0 p-0 focus-visible:ring-0 bg-transparent"
              />
              
              {/* Microphone Button */}
              <Button
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 hover:bg-accent"
              >
                <Mic className="h-4 w-4" />
              </Button>
            </div>

            {/* Send Button */}
            <Button
              onClick={handleSendMessage}
              size="sm"
              className="h-10 w-10 p-0"
              disabled={!inputText.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}