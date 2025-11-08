import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import { MOCK_ASSIGNMENTS } from '../constants';
import { Assignment } from '../types';

const AssignmentManagement: React.FC = () => {
    const [assignments, setAssignments] = useState<Assignment[]>(MOCK_ASSIGNMENTS);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-dark">Assignment Management</h1>
                <button 
                    onClick={() => alert('Create new assignment functionality not implemented.')}
                    className="px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                    Create Assignment
                </button>
            </div>
            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase border-b">
                            <tr>
                                <th className="px-4 py-3">Assignment Title</th>
                                <th className="px-4 py-3">Course</th>
                                <th className="px-4 py-3">Due Date</th>
                                <th className="px-4 py-3 text-center">Total Points</th>
                                <th className="px-4 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assignments.map((assignment) => (
                                <tr key={assignment.id} className="border-b last:border-0 hover:bg-light">
                                    <td className="px-4 py-3 font-semibold">{assignment.title}</td>
                                    <td className="px-4 py-3">{assignment.courseName}</td>
                                    <td className="px-4 py-3">{new Date(assignment.dueDate).toLocaleDateString()}</td>
                                    <td className="px-4 py-3 text-center">{assignment.totalPoints}</td>
                                    <td className="px-4 py-3 text-right">
                                        <Link 
                                            to={`/faculty/assignments/${assignment.id}/submissions`}
                                            className="font-medium text-primary hover:underline"
                                        >
                                            View Submissions
                                        </Link>
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

export default AssignmentManagement;
