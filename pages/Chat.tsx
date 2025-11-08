import React, { useState } from 'react';
import Card from '../components/ui/Card';
import { GoogleGenAI } from '@google/genai';

const Chat: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [history, setHistory] = useState<{user: string, model: string}[]>([]);

    const handleGenerate = async () => {
        if (!prompt || loading) return;
        
        setLoading(true);
        setResponse('');
        const currentPrompt = prompt;
        setPrompt('');

        try {
            // FIX: Initialize GoogleGenAI with apiKey from environment variables.
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
            // FIX: Use ai.models.generateContent to generate a response.
            const result = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: currentPrompt,
            });
            // FIX: Extract text response directly from the result object.
            const textResponse = result.text;
            setResponse(textResponse);
            setHistory(prev => [...prev, { user: currentPrompt, model: textResponse }]);
        } catch (error) {
            console.error(error);
            const errorMessage = 'Sorry, an error occurred while fetching the response.';
            setResponse(errorMessage);
            setHistory(prev => [...prev, { user: currentPrompt, model: errorMessage }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-dark">AI Assistant</h1>
            <Card>
                <div className="flex flex-col h-[70vh]">
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {history.map((entry, index) => (
                            <React.Fragment key={index}>
                                <div className="flex justify-end">
                                    <p className="bg-primary text-white p-3 rounded-lg max-w-lg">{entry.user}</p>
                                </div>
                                <div className="flex justify-start">
                                    <p className="bg-light p-3 rounded-lg max-w-lg whitespace-pre-wrap">{entry.model}</p>
                                </div>
                            </React.Fragment>
                        ))}
                         {loading && <div className="flex justify-start"><p className="bg-light p-3 rounded-lg">Thinking...</p></div>}
                    </div>
                    <div className="p-4 border-t">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
                                placeholder="Ask me anything..."
                                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                disabled={loading}
                            />
                            <button
                                onClick={handleGenerate}
                                disabled={loading || !prompt}
                                className="px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark disabled:bg-primary/50 transition-colors"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Chat;
