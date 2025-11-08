import React from 'react';
import Card from '../components/ui/Card';
import { useAuth } from '../hooks/useAuth';
import { StudentProfile, InternalAssessment } from '../types';

const Gradebook: React.FC = () => {
    const { user } = useAuth();
    const student = user as StudentProfile;

    if (!student) return null;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-dark">Gradebook</h1>
            <p className="text-gray-500 -mt-4">Here are your scores from internal assessments.</p>
            
            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase border-b">
                            <tr>
                                <th className="px-4 py-3">Subject</th>
                                <th className="px-4 py-3">Assessment Type</th>
                                <th className="px-4 py-3">Score</th>
                                <th className="px-4 py-3">Max Score</th>
                                <th className="px-4 py-3 text-right">Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {student.assessments.map((assessment: InternalAssessment) => (
                                <tr key={assessment.id} className="border-b last:border-0 hover:bg-light">
                                    <td className="px-4 py-3 font-semibold">{assessment.subject}</td>
                                    <td className="px-4 py-3">{assessment.type}</td>
                                    <td className="px-4 py-3">{assessment.score}</td>
                                    <td className="px-4 py-3">{assessment.maxScore}</td>
                                    <td className="px-4 py-3 text-right font-medium">
                                        {((assessment.score / assessment.maxScore) * 100).toFixed(2)}%
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default Gradebook;