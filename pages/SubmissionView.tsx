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
        return (
            <div>
                <h1 className="text-3xl font-bold text-dark">Assignment Not Found</h1>
                <Link to="/faculty/assignments" className="text-primary hover:underline mt-4 inline-block">
                    &larr; Back to all assignments
                </Link>
            </div>
        );
    }

    const getStatusColor = (status: Submission['status']) => {
        switch(status) {
            case 'Submitted': return 'bg-green-100 text-green-800';
            case 'Late': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    }

    return (
        <div className="space-y-6">
            <div>
                 <Link to="/faculty/assignments" className="text-sm text-primary hover:underline mb-2 inline-block">
                    &larr; Back to Assignments
                </Link>
                <h1 className="text-3xl font-bold text-dark">{assignment.title}</h1>
                <p className="text-gray-500 mt-1">{assignment.courseName} | Due: {assignment.dueDate}</p>
            </div>

            <Card>
                 <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase border-b">
                            <tr>
                                <th className="px-4 py-3">Student</th>
                                <th className="px-4 py-3">Submission Date</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Grade</th>
                                <th className="px-4 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {submissions.map((submission) => (
                                <tr key={submission.id} className="border-b last:border-0 hover:bg-light">
                                    <td className="px-4 py-3 font-semibold flex items-center">
                                        <img src={submission.studentAvatar} alt={submission.studentName} className="w-8 h-8 rounded-full mr-3" />
                                        <div>
                                            <p>{submission.studentName}</p>
                                            <p className="text-xs text-gray-500">{submission.studentUsn}</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">{submission.submissionDate}</td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(submission.status)}`}>
                                            {submission.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 font-medium">
                                        {submission.grade ? `${submission.grade} / ${assignment.totalPoints}` : 'Not Graded'}
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <button className="font-medium text-primary hover:underline">Grade</button>
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