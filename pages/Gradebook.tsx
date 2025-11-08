import React from 'react';
import Card from '../components/ui/Card';
import { useAuth } from '../hooks/useAuth';
import { StudentProfile, InternalAssessment } from '../types';

// Mock data for demonstration as it's optional in the new dataset
const MOCK_ASSESSMENTS: InternalAssessment[] = [
    { id: 'ia1-ds', subject: 'Data Structures', type: 'Internal Assessment 1', score: 25, maxScore: 30 },
    { id: 'ia1-algo', subject: 'Algorithms', type: 'Internal Assessment 1', score: 28, maxScore: 30 },
    { id: 'ia1-db', subject: 'Database Systems', type: 'Internal Assessment 1', score: 22, maxScore: 30 },
    { id: 'ia2-ds', subject: 'Data Structures', type: 'Internal Assessment 2', score: 27, maxScore: 30 },
    { id: 'ia2-algo', subject: 'Algorithms', type: 'Internal Assessment 2', score: 26, maxScore: 30 },
    { id: 'ia2-db', subject: 'Database Systems', type: 'Internal Assessment 2', score: 29, maxScore: 30 },
];


const Gradebook: React.FC = () => {
    const { user } = useAuth();
    const student = user as StudentProfile;

    const assessments = student?.assessments || MOCK_ASSESSMENTS;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-dark">Gradebook</h1>
            <p className="text-gray-500 -mt-4">Your scores from internal assessments and exams.</p>
            
            <Card title="Internal Assessment Scores">
                {assessments.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-gray-500 uppercase border-b">
                                <tr>
                                    <th className="px-4 py-3">Subject</th>
                                    <th className="px-4 py-3">Assessment Type</th>
                                    <th className="px-4 py-3 text-right">Score</th>
                                    <th className="px-4 py-3 text-right">Max Score</th>
                                    <th className="px-4 py-3 text-right">Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {assessments.map((assessment) => (
                                    <tr key={assessment.id} className="border-b last:border-0 hover:bg-light">
                                        <td className="px-4 py-3 font-semibold">{assessment.subject}</td>
                                        <td className="px-4 py-3">{assessment.type}</td>
                                        <td className="px-4 py-3 text-right">{assessment.score}</td>
                                        <td className="px-4 py-3 text-right">{assessment.maxScore}</td>
                                        <td className="px-4 py-3 text-right font-medium">
                                            {((assessment.score / assessment.maxScore) * 100).toFixed(2)}%
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No assessment scores available at the moment.</p>
                    </div>
                )}
            </Card>
        </div>
    );
};

export default Gradebook;
