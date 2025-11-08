import React from 'react';
import Card from '../components/ui/Card';
import { useAuth } from '../hooks/useAuth';
import { StudentProfile } from '../types';

const InfoRow: React.FC<{ label: string; value: string | number | undefined }> = ({ label, value }) => (
    <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
        <dt className="text-sm font-medium text-gray-500">{label}</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{value || 'N/A'}</dd>
    </div>
);

const StudentInfo: React.FC = () => {
    const { user } = useAuth();
    const student = user as StudentProfile;

    if (!student) return null;

    return (
        <div className="space-y-6">
            <div className="flex items-center space-x-4">
                <img className="w-20 h-20 rounded-full" src={student.avatar} alt={student.name} />
                <div>
                    <h1 className="text-3xl font-bold text-dark">{student.name}</h1>
                    <p className="text-gray-500">{student.usn}</p>
                </div>
            </div>
            
            <Card title="Personal Information">
                <dl className="divide-y divide-gray-200">
                    <InfoRow label="Full Name" value={student.name} />
                    <InfoRow label="Email" value={student.email || `${student.usn.toLowerCase()}@bldeacet.ac.in`} />
                    <InfoRow label="Contact No." value={student.phone || 'Not Provided'} />
                    <InfoRow label="Address" value={student.address || 'Not Provided'} />
                </dl>
            </Card>

            <Card title="Academic Information">
                 <dl className="divide-y divide-gray-200">
                    <InfoRow label="Course" value={student.course} />
                    <InfoRow label="Current Semester" value={student.semester} />
                    <InfoRow label="Batch" value={student.batch} />
                    <InfoRow label="Overall CGPA" value={student.cgpa ? student.cgpa.toFixed(2) : 'N/A'} />
                </dl>
            </Card>
        </div>
    );
};

export default StudentInfo;