import React, { useState, useMemo, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { MOCK_STUDENTS, MOCK_FACULTY, MOCK_COURSES, MOCK_CHAT_MESSAGES } from '../constants';
import { AppUser, StudentProfile, FacultyProfile, UserRole, ChatMessage } from '../types';
import Card from '../components/ui/Card';

const Chat: React.FC = () => {
    const { user } = useAuth();
    const [selectedContact, setSelectedContact] = useState<AppUser | null>(null);
    const [messages, setMessages] = useState<ChatMessage[]>(MOCK_CHAT_MESSAGES);
    const [newMessage, setNewMessage] = useState('');

    const contacts = useMemo(() => {
        if (!user) return [];
        if (user.role === UserRole.STUDENT) {
            const student = user as StudentProfile;
            const facultyIds = MOCK_COURSES.map(c => c.faculty);
            const uniqueFacultyIds = [...new Set(facultyIds)];
            return MOCK_FACULTY.filter(f => uniqueFacultyIds.includes(f.name));
        } else {
            return MOCK_STUDENTS;
        }
    }, [user]);

    useEffect(() => {
        if (contacts.length > 0 && !selectedContact) {
            setSelectedContact(contacts[0]);
        }
    }, [contacts, selectedContact]);

    const handleSendMessage = () => {
        if (!newMessage.trim() || !user || !selectedContact) return;

        const message: ChatMessage = {
            id: Date.now(),
            senderId: (user as StudentProfile).usn || (user as FacultyProfile).teacherId,
            receiverId: (selectedContact as StudentProfile).usn || (selectedContact as FacultyProfile).teacherId,
            text: newMessage,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            senderName: user.name,
            senderAvatar: user.avatar,
        };
        setMessages([...messages, message]);
        setNewMessage('');
    };
    
    const conversation = useMemo(() => {
        if (!user || !selectedContact) return [];
        const userId = (user as StudentProfile).usn || (user as FacultyProfile).teacherId;
        const contactId = (selectedContact as StudentProfile).usn || (selectedContact as FacultyProfile).teacherId;

        return messages.filter(msg => 
            (msg.senderId === userId && msg.receiverId === contactId) ||
            (msg.senderId === contactId && msg.receiverId === userId)
        );
    }, [user, selectedContact, messages]);


    return (
        <div className="flex flex-col h-[calc(100vh-10rem)]">
             <h1 className="text-3xl font-bold text-dark mb-4">Chat</h1>
            <Card className="flex-1 flex overflow-hidden p-0">
                {/* Contacts List */}
                <div className="w-1/3 border-r bg-light overflow-y-auto">
                     <div className="p-4 border-b">
                        <h2 className="font-semibold">{user?.role === UserRole.STUDENT ? 'Teachers' : 'Students'}</h2>
                    </div>
                    <ul>
                        {contacts.map(contact => (
                            <li key={(contact as StudentProfile).usn || (contact as FacultyProfile).teacherId}>
                                <button 
                                    onClick={() => setSelectedContact(contact)}
                                    className={`w-full text-left flex items-center p-3 hover:bg-gray-200 ${selectedContact && ((selectedContact as StudentProfile).usn === (contact as StudentProfile).usn || (selectedContact as FacultyProfile).teacherId === (contact as FacultyProfile).teacherId) ? 'bg-primary/10' : ''}`}
                                >
                                    <img src={contact.avatar} alt={contact.name} className="w-10 h-10 rounded-full mr-3" />
                                    <div>
                                        <p className="font-semibold text-sm">{contact.name}</p>
                                        <p className="text-xs text-gray-500">{contact.role === UserRole.STUDENT ? (contact as StudentProfile).usn : 'Faculty'}</p>
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Chat Area */}
                <div className="w-2/3 flex flex-col">
                    {selectedContact ? (
                        <>
                            <div className="p-4 border-b flex items-center">
                               <img src={selectedContact.avatar} alt={selectedContact.name} className="w-10 h-10 rounded-full mr-3" />
                                <div>
                                    <p className="font-semibold">{selectedContact.name}</p>
                                    <p className="text-xs text-gray-500">Online</p>
                                </div>
                            </div>
                            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
                                {conversation.map(msg => (
                                     <div key={msg.id} className={`flex items-end gap-2 ${msg.senderId === ((user as StudentProfile).usn || (user as FacultyProfile).teacherId) ? 'justify-end' : 'justify-start'}`}>
                                        {msg.senderId !== ((user as StudentProfile).usn || (user as FacultyProfile).teacherId) && <img src={msg.senderAvatar} className="w-6 h-6 rounded-full" />}
                                        <div className={`max-w-md px-4 py-2 rounded-lg ${msg.senderId === ((user as StudentProfile).usn || (user as FacultyProfile).teacherId) ? 'bg-primary text-white' : 'bg-white text-dark shadow-sm'}`}>
                                           {msg.text}
                                           <div className="text-xs opacity-70 mt-1 text-right">{msg.timestamp}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4 border-t bg-white">
                                <div className="flex space-x-2">
                                    <input
                                        type="text"
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                        placeholder="Type a message..."
                                        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-primary"
                                    />
                                     <button className="p-2 border rounded-lg hover:bg-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    </button>
                                    <button onClick={handleSendMessage} className="px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 flex items-center justify-center text-gray-500">
                            <p>Select a contact to start chatting.</p>
                        </div>
                    )}
                </div>
            </Card>
        </div>
    );
};

export default Chat;