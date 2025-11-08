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
            <h1 className="text-3xl font-bold text-dark">Student Management</h1>
            <Card>
                <div className="p-4 border-b">
                    <input
                        type="text"
                        placeholder="Search by name or USN..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full max-w-sm px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase border-b">
                            <tr>
                                <th className="px-4 py-3">Student Name</th>
                                <th className="px-4 py-3">USN</th>
                                <th className="px-4 py-3">Branch</th>
                                <th className="px-4 py-3">Semester</th>
                                <th className="px-4 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStudents.map((student) => (
                                <tr key={student.id} className="border-b last:border-0 hover:bg-light">
                                    <td className="px-4 py-3 font-semibold flex items-center">
                                        <img src={student.avatar} alt={student.name} className="w-8 h-8 rounded-full mr-3" />
                                        {student.name}
                                    </td>
                                    <td className="px-4 py-3">{student.usn}</td>
                                    <td className="px-4 py-3">{student.branch}</td>
                                    <td className="px-4 py-3">{student.semester}</td>
                                    <td className="px-4 py-3 text-right">
                                        <button className="font-medium text-primary hover:underline">View Details</button>
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

export default StudentManagement;
