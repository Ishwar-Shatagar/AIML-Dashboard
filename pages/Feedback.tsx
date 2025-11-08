import React, { useState, useMemo } from 'react';
import Card from '../components/ui/Card';
import { useAuth } from '../hooks/useAuth';
import { MOCK_COURSES, MOCK_FACULTY, feedbackQuestions } from '../constants';
import { StudentProfile, UserRole } from '../types';

const StarInput: React.FC<{ rating: number, onRate: (rating: number) => void }> = ({ rating, onRate }) => (
    <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
            <svg
                key={i}
                onClick={() => onRate(i + 1)}
                className={`w-6 h-6 cursor-pointer ${i < rating ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.368-2.446a1 1 0 00-1.176 0l-3.368 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.073 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
            </svg>
        ))}
    </div>
);

const Feedback: React.FC = () => {
    const { user } = useAuth();
    const [submitted, setSubmitted] = useState(false);
    const [selectedTeacher, setSelectedTeacher] = useState('');
    const [ratings, setRatings] = useState<{ [key: string]: number }>({});
    const [comments, setComments] = useState('');

    const teachers = useMemo(() => {
        if (user?.role !== UserRole.STUDENT) return [];
        const facultyNames = MOCK_COURSES.map(c => c.faculty);
        return [...new Set(facultyNames)];
    }, [user]);

     React.useEffect(() => {
        if (teachers.length > 0) {
            setSelectedTeacher(teachers[0]);
        }
    }, [teachers]);

    const handleRating = (question: string, rating: number) => {
        setRatings(prev => ({...prev, [question]: rating }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to a backend
        console.log({
            teacher: selectedTeacher,
            ratings,
            comments
        });
        setSubmitted(true);
    };
    
    if (submitted) {
        return (
            <div className="space-y-6">
                <h1 className="text-3xl font-bold text-dark">Feedback Submitted</h1>
                 <Card>
                    <div className="text-center py-12">
                         <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h2 className="mt-4 text-xl font-semibold text-gray-800">Thank You!</h2>
                        <p className="mt-2 text-gray-500">Your feedback has been received and will help us improve.</p>
                    </div>
                </Card>
            </div>
        );
    }
    
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-dark">Give Feedback for a Teacher</h1>
            <p className="text-gray-500 -mt-4">Your anonymous feedback helps improve the quality of teaching.</p>
            <Card>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="teacher" className="block text-sm font-medium text-gray-700 mb-1">Select Teacher</label>
                        <select 
                            id="teacher" 
                            value={selectedTeacher}
                            onChange={(e) => setSelectedTeacher(e.target.value)}
                            className="mt-1 block w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        >
                            {teachers.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                    </div>

                    <div className="space-y-4">
                        {feedbackQuestions.map((q, index) => (
                            <div key={index} className="flex flex-col sm:flex-row justify-between sm:items-center">
                                <p className="text-sm text-gray-700 mb-2 sm:mb-0">{q}</p>
                                <StarInput rating={ratings[q] || 0} onRate={(rating) => handleRating(q, rating)} />
                            </div>
                        ))}
                    </div>
                    
                    <div>
                        <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">Additional Comments (Optional)</label>
                        <textarea 
                            id="comments" 
                            rows={4}
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" 
                            placeholder="Please provide any other feedback here..."></textarea>
                    </div>

                    <div className="flex justify-end pt-2">
                        <button type="submit" className="inline-flex justify-center py-2.5 px-6 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                            Submit Feedback
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default Feedback;