// FIX: Creating Gradebook page component.
import React from 'react';
import Card from '../components/ui/Card';
import { MOCK_GRADES } from '../constants';
import CgpaChart from '../components/charts/CgpaChart';
import { useAuth } from '../hooks/useAuth';
import { StudentProfile } from '../types';

const Gradebook: React.FC = () => {
    const { user } = useAuth();
    const student = user as StudentProfile;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-dark">Gradebook</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                     <Card>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-gray-500 uppercase border-b">
                                    <tr>
                                        <th className="px-4 py-3">Subject</th>
                                        <th className="px-4 py-3 text-center">Internals</th>
                                        <th className="px-4 py-3 text-center">Externals</th>
                                        <th className="px-4 py-3 text-center">Total</th>
                                        <th className="px-4 py-3 text-center">Grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {MOCK_GRADES.map((grade) => (
                                        <tr key={grade.subjectCode} className="border-b last:border-0 hover:bg-light">
                                            <td className="px-4 py-3">
                                                <p className="font-semibold">{grade.subject}</p>
                                                <p className="text-xs text-gray-500">{grade.subjectCode}</p>
                                            </td>
                                            <td className="px-4 py-3 text-center">{grade.internal}</td>
                                            <td className="px-4 py-3 text-center">{grade.external}</td>
                                            <td className="px-4 py-3 text-center font-semibold">{grade.total}</td>
                                            <td className="px-4 py-3 text-center font-bold text-lg text-primary">{grade.grade}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
                <div className="md:col-span-1">
                    <CgpaChart cgpa={student.cgpa} />
                </div>
            </div>
        </div>
    );
};

export default Gradebook;
