import React, { useState, useRef, useEffect } from 'react';
// Correctly import GoogleGenAI and Chat from @google/genai
import { GoogleGenAI, Chat as GenAIChat } from '@google/genai';
import { useAuth } from '../hooks/useAuth';
import Card from '../components/ui/Card';
import { UserRole } from '../types';

const Chat: React.FC = () => {
    const { user } = useAuth();
    const [messages, setMessages] = useState<{ text: string, sender: 'user' | 'bot' }[]>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [chat, setChat] = useState<GenAIChat | null>(null);
    const [error, setError] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Fix: Use process.env.API_KEY as required by the guidelines
        if (!process.env.API_KEY) {
            setError("API key is not configured. Please contact support.");
            return;
        }

        try {
            // Fix: Initialize GoogleGenAI with the API key from environment variables
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const systemInstruction = user?.role === UserRole.STUDENT
                ? "You are a helpful academic assistant for a university student. Answer questions about courses, exams, and general knowledge concisely."
                : "You are a helpful assistant for a university faculty member. Assist with queries about teaching, student management, and academic administration.";

            // Fix: Create a new chat session using the recommended 'gemini-2.5-flash' model
            const newChat = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction,
                },
            });
            setChat(newChat);
        } catch (e) {
            console.error("Error initializing Gemini chat:", e);
            setError("Could not initialize the AI chat service.");
        }
    }, [user?.role]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = async () => {
        if (input.trim() === '' || loading || !chat) return;

        const userMessage = { text: input, sender: 'user' as const };
        setMessages(prev => [...prev, userMessage]);
        const currentInput = input;
        setInput('');
        setLoading(true);

        try {
            // Fix: Use the chat.sendMessage method to interact with the model
            const result = await chat.sendMessage({ message: currentInput });
            // Fix: Extract text response directly from the 'text' property
            const botMessage = { text: result.text, sender: 'bot' as const };
            setMessages(prev => [...prev, botMessage]);
        } catch (e) {
            console.error('Error sending message to Gemini:', e);
            const errorMessage = { text: 'Sorry, I encountered an error. Please try again.', sender: 'bot' as const };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="flex flex-col h-[calc(100vh-12rem)]">
            <h1 className="text-3xl font-bold text-dark mb-4">AI Chat Assistant</h1>
            <Card className="flex-1 flex flex-col">
                 <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {error ? (
                        <div className="text-center text-red-500 p-4">{error}</div>
                    ) : (
                        <>
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-lg px-4 py-2 rounded-xl whitespace-pre-wrap ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-light text-dark'}`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {loading && (
                                <div className="flex justify-start">
                                    <div className="max-w-lg px-4 py-2 rounded-xl bg-light text-dark">
                                        Thinking...
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                <div className="p-4 border-t flex items-center">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder={error ? "Chat is unavailable" : "Ask me anything..."}
                        className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={loading || !chat || !!error}
                    />
                    <button onClick={handleSend} disabled={loading || !chat || !!error} className="ml-4 px-6 py-2 bg-primary text-white rounded-full font-semibold disabled:bg-gray-400 transition-colors">
                        Send
                    </button>
                </div>
            </Card>
        </div>
    );
};

export default Chat;
