// FIX: Creating Feedback page component.
import React, { useState } from 'react';
import Card from '../components/ui/Card';
import { MOCK_FACULTY, feedbackQuestions } from '../constants';

const StarRatingInput: React.FC<{ rating: number; setRating: (rating: number) => void }> = ({ rating, setRating }) => {
    return (
        <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <button
                        type="button"
                        key={ratingValue}
                        onClick={() => setRating(ratingValue)}
                        className="focus:outline-none"
                    >
                        <svg
                            className={`w-6 h-6 ${ratingValue <= rating ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.368-2.446a1 1 0 00-1.176 0l-3.368 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.073 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                        </svg>
                    </button>
                );
            })}
        </div>
    );
};


const Feedback: React.FC = () => {
    const [selectedFaculty, setSelectedFaculty] = useState(MOCK_FACULTY[0].name);
    const [ratings, setRatings] = useState<{[key: string]: number}>({});
    const [comments, setComments] = useState('');

    const handleRatingChange = (question: string, rating: number) => {
        setRatings(prev => ({...prev, [question]: rating}));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your feedback!');
        // Reset form
        setRatings({});
        setComments('');
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-dark">Submit Feedback</h1>
            <p className="text-gray-500 -mt-4">Your feedback is anonymous and helps us improve.</p>
            <Card>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="faculty" className="block text-sm font-medium text-gray-700 mb-1">Select Faculty</label>
                        <select
                            id="faculty"
                            value={selectedFaculty}
                            onChange={(e) => setSelectedFaculty(e.target.value)}
                            className="mt-1 block w-full max-w-sm px-3 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        >
                            {MOCK_FACULTY.map(f => <option key={f.id} value={f.name}>{f.name}</option>)}
                        </select>
                    </div>

                    <div className="space-y-4 pt-4 border-t">
                        <h3 className="font-semibold text-dark">Rate the following aspects:</h3>
                        {feedbackQuestions.map(q => (
                             <div key={q} className="flex flex-col sm:flex-row justify-between sm:items-center">
                                <span className="text-gray-700 mb-2 sm:mb-0">{q}</span>
                                <StarRatingInput rating={ratings[q] || 0} setRating={(r) => handleRatingChange(q, r)} />
                            </div>
                        ))}
                    </div>

                     <div className="pt-4 border-t">
                        <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">Additional Comments</label>
                        <textarea
                            id="comments"
                            rows={4}
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            placeholder="Share any other thoughts or suggestions..."
                        ></textarea>
                    </div>
                    
                    <div className="flex justify-end pt-4">
                        <button type="submit" className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                            Submit Feedback
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default Feedback;
