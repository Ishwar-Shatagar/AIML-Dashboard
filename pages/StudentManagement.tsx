import React, { useState } from 'react';
import Card from '../components/ui/Card';
import { MOCK_STUDENTS } from '../constants';
import { StudentProfile } from '../types';

const StudentManagement: React.FC = () => {
    const [students, setStudents] = useState<StudentProfile[]>(MOCK_STUDENTS);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.usn.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
             <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-dark">Student Management</h1>
                <div className="w-full max-w-sm">
                    <input
                        type="text"
                        placeholder="Search by name or USN..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary"
                    />
                </div>
            </div>
            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase border-b">
                            <tr>
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">USN</th>
                                <th className="px-4 py-3">Course</th>
                                <th className="px-4 py-3">Batch</th>
                                <th className="px-4 py-3 text-right">CGPA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStudents.map((student) => (
                                <tr key={student.usn} className="border-b last:border-0 hover:bg-light">
                                    <td className="px-4 py-3 font-semibold flex items-center">
                                        <img src={student.avatar} alt={student.name} className="w-8 h-8 rounded-full mr-3" />
                                        {student.name}
                                    </td>
                                    <td className="px-4 py-3">{student.usn}</td>
                                    <td className="px-4 py-3">{student.course}</td>
                                    <td className="px-4 py-3">{student.batch}</td>
                                    <td className="px-4 py-3 text-right font-medium">{student.cgpa?.toFixed(2) || 'N/A'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default StudentManagement;