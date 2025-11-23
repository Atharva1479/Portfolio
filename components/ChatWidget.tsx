'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface ChatWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm Yash's AI Assistant. Ask me anything about his projects, skills, or experience." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Focus input when AI finishes responding
  useEffect(() => {
    if (!isLoading && isOpen) {
      inputRef.current?.focus();
    }
  }, [isLoading, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      // Call secure backend API instead of Google directly
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      setMessages(prev => [...prev, {
        role: 'model',
        text: data.response || "I couldn't generate a response."
      }]);

    } catch (error) {
      console.error('Chat Error:', error);
      setMessages(prev => [...prev, {
        role: 'model',
        text: 'Error: Unable to connect to the AI service. Please try again later.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${isOpen ? 'bg-zinc-800 text-zinc-400 rotate-90' : 'bg-emerald-600 text-white hover:bg-emerald-500'
          }`}
        aria-label="Toggle AI Chat"
      >
        {isOpen ? <X className="h-5 w-5 text-white drop-shadow-lg" /> : <MessageSquare className="h-6 w-6 text-white drop-shadow-lg" />}
      </button>


      {/* Chat Window */}
      {isOpen && (
        <>
          {/* Backdrop Overlay - Visible on all screens */}
          <div
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
            onClick={onToggle}
            aria-hidden="true"
          />

          <div className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-[420px] h-[550px] bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-slide-up origin-bottom-right">

            {/* Header */}
            <div className="relative p-5 border-b border-zinc-800/50 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80">
              {/* Gradient accent line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  {/* Avatar with glow */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 flex items-center justify-center backdrop-blur-sm">
                    <Sparkles className="h-6 w-6 text-emerald-400" />
                  </div>
                  {/* Status indicator */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-zinc-950 rounded-full">
                    <span className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75"></span>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-white text-base tracking-tight">AI Portfolio Assistant</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <p className="text-xs text-zinc-400 font-mono">Online • Ready to help</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} animate-fade-in`}
                >
                  <div className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center border ${msg.role === 'user'
                    ? 'bg-gradient-to-br from-zinc-800 to-zinc-900 border-zinc-700 text-zinc-300'
                    : 'bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border-emerald-500/30 text-emerald-400'
                    }`}>
                    {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>

                  <div className={`max-w-[80%] text-sm leading-relaxed ${msg.role === 'user'
                    ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-2xl rounded-tr-md px-4 py-3 shadow-lg shadow-emerald-500/20'
                    : 'bg-zinc-900/60 border border-zinc-800/60 text-zinc-300 rounded-2xl rounded-tl-md px-4 py-3 backdrop-blur-sm'
                    }`}>
                    {msg.role === 'user' ? (
                      msg.text
                    ) : (
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                          strong: ({ children }) => <span className="font-bold text-emerald-400">{children}</span>,
                          em: ({ children }) => <span className="italic text-zinc-200">{children}</span>,
                          ul: ({ children }) => <ul className="space-y-1 my-2 list-disc list-inside marker:text-emerald-500/70">{children}</ul>,
                          ol: ({ children }) => <ol className="space-y-1 my-2 list-decimal list-inside marker:text-emerald-500/70">{children}</ol>,
                          li: ({ children }) => <li className="pl-1">{children}</li>,
                          a: ({ href, children }) => (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-emerald-400 hover:text-emerald-300 hover:underline decoration-emerald-400/30 underline-offset-2 transition-all"
                            >
                              {children}
                            </a>
                          ),
                          code: ({ children }) => <code className="bg-zinc-800/50 px-1.5 py-0.5 rounded text-emerald-300 font-mono text-xs border border-zinc-700/50">{children}</code>
                        }}
                      >
                        {msg.text}
                      </ReactMarkdown>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 animate-fade-in">
                  <div className="shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-zinc-900/60 border border-zinc-800/60 px-4 py-3 rounded-2xl rounded-tl-md backdrop-blur-sm flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin text-emerald-400" />
                    <span className="text-xs text-zinc-400">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-5 border-t border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm">
              <div className="relative flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about skills, projects, experience..."
                  className="flex-1 bg-zinc-900/80 border border-zinc-700/50 text-zinc-200 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all placeholder:text-zinc-500"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !inputValue.trim()}
                  className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 disabled:from-zinc-800 disabled:to-zinc-800 text-white disabled:text-zinc-600 flex items-center justify-center transition-all hover:scale-105 active:scale-95 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/20 disabled:shadow-none"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <div className="text-[10px] text-center text-zinc-600 mt-3 font-mono flex items-center justify-center gap-1">
                <Sparkles className="h-3 w-3 text-emerald-500/50" />
                <span>Powered by Google Gemini</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ChatWidget;