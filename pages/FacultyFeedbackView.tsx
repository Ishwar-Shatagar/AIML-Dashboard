import React from 'react';
import Card from '../components/ui/Card';
import { useAuth } from '../hooks/useAuth';
import { MOCK_TEACHER_FEEDBACK, feedbackQuestions } from '../constants';
import { TeacherFeedback } from '../types';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex">
        {[...Array(5)].map((_, i) => (
            <svg
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.368-2.446a1 1 0 00-1.176 0l-3.368 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.073 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
            </svg>
        ))}
    </div>
);


const FeedbackItem: React.FC<{ feedback: TeacherFeedback }> = ({ feedback }) => (
    <Card>
        <div className="flex justify-between items-start">
            <div>
                <p className="font-semibold text-dark">From: <span className="font-normal">{feedback.studentUsn}</span></p>
                <p className="text-sm text-gray-500">{new Date(feedback.date).toLocaleDateString()}</p>
            </div>
        </div>
        
        <div className="mt-4 space-y-3">
            <h4 className="font-semibold">Ratings:</h4>
            <ul className="space-y-2">
                {feedback.ratings.map((r, index) => (
                    <li key={index} className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{r.question}</span>
                        <StarRating rating={r.rating} />
                    </li>
                ))}
            </ul>
        </div>

        {feedback.comments && (
            <div className="mt-4">
                <h4 className="font-semibold">Comments:</h4>
                <p className="text-sm text-gray-700 bg-light p-3 rounded-lg mt-1">{feedback.comments}</p>
            </div>
        )}
    </Card>
);

const FacultyFeedbackView: React.FC = () => {
    const { user } = useAuth();

    const facultyFeedback = MOCK_TEACHER_FEEDBACK.filter(
        fb => fb.teacherName === user?.name
    );

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-dark">Student Feedback</h1>
            <p className="text-gray-500 -mt-4">Here is the feedback submitted by your students.</p>
            
            {facultyFeedback.length > 0 ? (
                <div className="space-y-6">
                    {facultyFeedback.map(fb => (
                        <FeedbackItem key={fb.id} feedback={fb} />
                    ))}
                </div>
            ) : (
                <Card>
                    <div className="text-center py-12">
                         <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <h2 className="mt-4 text-xl font-semibold text-gray-800">No Feedback Yet</h2>
                        <p className="mt-2 text-gray-500">You have not received any feedback from students.</p>
                    </div>
                </Card>
            )}
        </div>
    );
};

export default FacultyFeedbackView;