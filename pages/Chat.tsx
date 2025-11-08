import React, { useState, useMemo } from 'react';
import { useAuth } from '../hooks/useAuth';
import Card from '../components/ui/Card';
import { UserRole, StudentProfile, FacultyProfile } from '../types';
import { MOCK_STUDENTS, MOCK_FACULTY, MOCK_TIMETABLE } from '../constants';

const Chat: React.FC = () => {
    const { user } = useAuth();
    const [selectedContact, setSelectedContact] = useState<StudentProfile | FacultyProfile | null>(null);
    const [input, setInput] = useState('');

    const contacts = useMemo(() => {
        if (user?.role === UserRole.STUDENT) {
            const student = user as StudentProfile;
            const semesterTimetable = MOCK_TIMETABLE[student.semester];
            if (!semesterTimetable) return [];
            
            const teacherNames = new Set<string>();
            Object.values(semesterTimetable).forEach(daySchedule => {
                daySchedule.forEach(entry => {
                    if (entry.teacher !== 'TBD') {
                        teacherNames.add(entry.teacher);
                    }
                });
            });

            return MOCK_FACULTY.filter(faculty => teacherNames.has(faculty.name));
        }
        if (user?.role === UserRole.FACULTY) {
            return MOCK_STUDENTS;
        }
        return [];
    }, [user]);

    const handleSend = () => {
        if (input.trim() === '') return;
        alert(`Message sent to ${selectedContact?.name}: "${input}"\n(This is a demo, no message was actually sent)`);
        setInput('');
    };

    return (
        <div className="flex flex-col h-[calc(100vh-12rem)]">
            <h1 className="text-3xl font-bold text-dark mb-4">Chat</h1>
            <Card className="flex-1 flex overflow-hidden">
                {/* Contacts List */}
                <div className="w-1/3 border-r overflow-y-auto">
                    <div className="p-4 border-b font-semibold">Contacts</div>
                    <ul>
                        {contacts.map(contact => (
                            <li
                                key={contact.id}
                                onClick={() => setSelectedContact(contact)}
                                className={`p-4 cursor-pointer flex items-center space-x-3 hover:bg-light ${selectedContact?.id === contact.id ? 'bg-light' : ''}`}
                            >
                                <img src={contact.avatar} alt={contact.name} className="w-10 h-10 rounded-full" />
                                <div>
                                    <p className="font-semibold">{contact.name}</p>
                                    <p className="text-sm text-gray-500">
                                        {contact.role === UserRole.STUDENT ? (contact as StudentProfile).usn : 'Faculty'}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Chat Window */}
                <div className="w-2/3 flex flex-col">
                    {selectedContact ? (
                        <>
                            <div className="p-4 border-b flex items-center space-x-3">
                                <img src={selectedContact.avatar} alt={selectedContact.name} className="w-10 h-10 rounded-full" />
                                <div>
                                    <p className="font-semibold">{selectedContact.name}</p>
                                </div>
                            </div>
                            <div className="flex-1 p-4 overflow-y-auto space-y-4">
                                {/* Mock messages */}
                                <div className="flex justify-start">
                                    <div className="max-w-lg px-4 py-2 rounded-xl bg-light text-dark">Hello! How can I help you today?</div>
                                </div>
                                <div className="flex justify-end">
                                    <div className="max-w-lg px-4 py-2 rounded-xl bg-primary text-white">I have a question about the assignment.</div>
                                </div>
                            </div>
                            <div className="p-4 border-t flex items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type a message..."
                                    className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                 <button onClick={handleSend} className="ml-4 px-6 py-2 bg-primary text-white rounded-full font-semibold transition-colors">
                                    Send
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 flex items-center justify-center text-gray-500">
                            Select a contact to start chatting
                        </div>
                    )}
                </div>
            </Card>
        </div>
    );
};

export default Chat;
