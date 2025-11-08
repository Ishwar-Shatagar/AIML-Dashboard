import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import { MOCK_ASSIGNMENTS, MOCK_SUBMISSIONS } from '../constants';
import { Submission } from '../types';

const SubmissionView: React.FC = () => {
    const { assignmentId } = useParams<{ assignmentId: string }>();
    const assignment = MOCK_ASSIGNMENTS.find(a => a.id === assignmentId);
    const submissions = MOCK_SUBMISSIONS.filter(s => s.assignmentId === assignmentId);

    if (!assignment) {
        return <div>Assignment not found.</div>;
    }

    const getStatusColor = (status: Submission['status']) => {
        switch (status) {
            case 'Submitted': return 'text-green-600 bg-green-100';
            case 'Late': return 'text-yellow-600 bg-yellow-100';
            case 'Not Submitted': return 'text-red-600 bg-red-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <Link to="/faculty/assignments" className="text-sm text-primary hover:underline">&larr; Back to Assignments</Link>
                <h1 className="text-3xl font-bold text-dark mt-2">{assignment.title}</h1>
                <p className="text-gray-500">{assignment.courseName} | Due: {new Date(assignment.dueDate).toLocaleDateString()}</p>
            </div>
            <Card>
                 <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase border-b">
                            <tr>
                                <th className="px-4 py-3">Student Name</th>
                                <th className="px-4 py-3">USN</th>
                                <th className="px-4 py-3">Submission Date</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3 text-center">Grade</th>
                                <th className="px-4 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {submissions.map((submission) => (
                                <tr key={submission.id} className="border-b last:border-0 hover:bg-light">
                                    <td className="px-4 py-3 font-semibold flex items-center">
                                        <img src={submission.studentAvatar} alt={submission.studentName} className="w-8 h-8 rounded-full mr-3" />
                                        {submission.studentName}
                                    </td>
                                    <td className="px-4 py-3">{submission.studentUsn}</td>
                                    <td className="px-4 py-3">{submission.status !== 'Not Submitted' ? new Date(submission.submissionDate).toLocaleString() : '-'}</td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(submission.status)}`}>
                                            {submission.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-center font-semibold">
                                        {submission.grade !== null ? `${submission.grade}/${assignment.totalPoints}` : 'Not Graded'}
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <button className="font-medium text-primary hover:underline">Grade/View</button>
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

export default SubmissionView;
