import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { getGeminiResponse } from '../../../services/gemini';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '¡Hola! Soy el asistente inteligente de la propuesta Powest. ¿En qué puedo ayudarte hoy sobre este proyecto?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      // Prepare history for Gemini - MUST start with 'user'
      // We exclude the first assistant greeting if it's the only and first message
      const historyForGemini = messages
        .filter((_, i) => i > 0) // Skip the initial greeting at index 0
        .map(msg => ({
          role: msg.role === 'assistant' ? 'model' : 'user',
          parts: msg.content
        }));
      
      historyForGemini.push({ role: 'user', parts: userMsg });

      const response = await getGeminiResponse(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error: any) {
      console.error('Error in ChatBot:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Lo siento, hubo un problema al procesar tu solicitud. Por favor, asegúrate de que la API Key esté configurada.' + (error.message ? ` (${error.message})` : '') }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 md:bottom-28 md:right-10 z-[9999] font-body flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[90vw] max-w-[400px] h-[500px] bg-white/90 dark:bg-[#111111]/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 flex flex-col"
          >
            {/* Header */}
            <div className="bg-black p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-lime)] flex items-center justify-center">
                  <Bot className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-tight">Asistente iAnBot</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-lime)] animate-pulse" />
                    <span className="text-[10px] uppercase font-bold text-gray-400">En línea</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Cerrar Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto overflow-x-hidden p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-white/10">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex flex-col min-w-0",
                    msg.role === 'user' ? "items-end" : "items-start"
                  )}
                >
                  <div className={cn(
                    "max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed break-words overflow-hidden",
                    msg.role === 'user' 
                      ? "bg-black text-white rounded-tr-none shadow-md shadow-black/5" 
                      : "bg-[#F3F3F5] dark:bg-white/5 text-gray-800 dark:text-gray-200 rounded-tl-none border border-gray-100 dark:border-white/5"
                  )}>
                    {msg.role === 'assistant' && (
                      <div className="flex items-center gap-1.5 mb-1.5 opacity-50 font-bold uppercase text-[9px]">
                        <Bot className="w-3 h-3" /> iAnBot AI
                      </div>
                    )}
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#F3F3F5] dark:bg-white/5 p-4 rounded-2xl flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-[var(--color-lime)]" />
                    <span className="text-xs text-gray-500 animate-pulse">Pensando...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-gray-50 dark:bg-white/5 border-t border-gray-100 dark:border-white/10">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Escribe tu pregunta..."
                  className={cn(
                    "flex-grow bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-2xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--color-lime)] focus:border-transparent transition-all",
                    "dark:text-white placeholder:text-gray-400"
                  )}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className={cn(
                    "p-2.5 rounded-xl transition-all duration-300",
                    input.trim() && !isLoading 
                      ? "bg-[var(--color-lime)] text-black shadow-lg shadow-[var(--color-lime)]/20 hover:scale-105 active:scale-95" 
                      : "bg-gray-200 dark:bg-white/5 text-gray-400 cursor-not-allowed"
                  )}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-2 text-[9px] text-center text-gray-400 uppercase tracking-widest font-bold">
                Potenciado por Gemini 2.5 Flash
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBadge && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute bottom-20 right-0 mb-4 mr-2 w-52 bg-[var(--color-lime)] p-4 rounded-2xl rounded-br-none shadow-2xl shadow-[var(--color-lime)]/30 z-[10000] cursor-pointer"
            onClick={() => {
              setIsOpen(true);
              setShowBadge(false);
            }}
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowBadge(false);
              }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-90 transition-all border border-white/20"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-[12px] leading-tight text-black font-semibold">
              ¿Tienes dudas sobre la propuesta o el proyecto? <span className="font-extrabold block mt-1 uppercase text-[10px] tracking-tight">Pregúntale a iAnBot</span>
            </p>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-[var(--color-lime)] transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-black flex items-center justify-center shadow-2xl relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-lime)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {isOpen ? (
          <X className="w-7 h-7 text-[var(--color-lime)]" />
        ) : (
          <div className="relative">
            <MessageSquare className="w-7 h-7 text-[var(--color-lime)]" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--color-lime)] rounded-full border-2 border-black" />
          </div>
        )}
      </motion.button>
    </div>
  );
};
