import React, { useState } from 'react';
import Card from '../components/ui/Card';
import { MOCK_COURSES, feedbackQuestions } from '../constants';

const StarRatingInput: React.FC<{ question: string, rating: number, onRate: (rating: number) => void }> = ({ question, rating, onRate }) => {
    const [hover, setHover] = useState(0);
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <p className="mb-2 sm:mb-0">{question}</p>
            <div className="flex">
                {[...Array(5)].map((_, index) => {
                    const ratingValue = index + 1;
                    return (
                        <label key={index}>
                            <input
                                type="radio"
                                name={question}
                                value={ratingValue}
                                onClick={() => onRate(ratingValue)}
                                className="hidden"
                            />
                            <svg
                                className={`w-6 h-6 cursor-pointer ${ratingValue <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(0)}
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.368-2.446a1 1 0 00-1.176 0l-3.368 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.073 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                            </svg>
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

const Feedback: React.FC = () => {
    const [selectedCourse, setSelectedCourse] = useState(MOCK_COURSES[0].id);
    const [ratings, setRatings] = useState<Record<string, number>>({});
    const [comments, setComments] = useState('');

    const handleRating = (question: string, rating: number) => {
        setRatings(prev => ({...prev, [question]: rating}));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Check if all questions are rated
        if (Object.keys(ratings).length !== feedbackQuestions.length) {
            alert('Please rate all categories.');
            return;
        }
        console.log({
            courseId: selectedCourse,
            ratings,
            comments,
        });
        alert('Thank you for your feedback!');
        // Reset form
        setRatings({});
        setComments('');
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-dark">Submit Feedback</h1>
            <p className="text-gray-500 -mt-4">Your feedback is valuable for improving teaching quality.</p>

            <Card>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Select Course</label>
                        <select
                            id="course"
                            value={selectedCourse}
                            onChange={(e) => setSelectedCourse(e.target.value)}
                            className="mt-1 block w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        >
                            {MOCK_COURSES.map(course => (
                                <option key={course.id} value={course.id}>{course.name} - {course.faculty}</option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-4 pt-4 border-t">
                        <h3 className="font-medium text-gray-700">Rate the following:</h3>
                        {feedbackQuestions.map(q => (
                             <StarRatingInput key={q} question={q} rating={ratings[q] || 0} onRate={(rating) => handleRating(q, rating)} />
                        ))}
                    </div>

                    <div className="pt-4 border-t">
                        <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">Additional Comments (Optional)</label>
                        <textarea
                            id="comments"
                            rows={4}
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            placeholder="Share any specific thoughts or suggestions..."
                        ></textarea>
                    </div>
                     <div className="flex justify-end pt-4">
                        <button type="submit" className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                            Submit Feedback
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default Feedback;
