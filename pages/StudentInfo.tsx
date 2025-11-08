import React from 'react';
import Card from '../components/ui/Card';
import { useAuth } from '../hooks/useAuth';
import { StudentProfile } from '../types';

const InfoRow: React.FC<{ label: string; value: string | number | undefined }> = ({ label, value }) => (
    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-gray-200 last:border-0">
        <span className="font-medium text-gray-500">{label}</span>
        <span className="font-semibold text-dark text-left sm:text-right">{value || 'N/A'}</span>
    </div>
);

const StudentInfo: React.FC = () => {
    const { user } = useAuth();
    const student = user as StudentProfile;

    if (!student || student.role !== 'student') return null;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-dark">My Profile</h1>
            <Card>
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
                    <img src={student.avatar} alt={student.name} className="w-32 h-32 rounded-full border-4 border-primary/20" />
                    <div className="flex-1 w-full">
                        <h2 className="text-2xl font-bold text-dark text-center md:text-left">{student.name}</h2>
                        <p className="text-gray-500 text-center md:text-left">{student.usn}</p>
                        <div className="mt-6">
                            <InfoRow label="Course" value={student.course} />
                            <InfoRow label="Batch" value={student.batch} />
                            <InfoRow label="Current Semester" value={student.semester} />
                            <InfoRow label="Email" value={`${student.usn.toLowerCase()}@bldeacet.ac.in`} />
                            <InfoRow label="Current CGPA" value={student.cgpa?.toFixed(2)} />
                        </div>
                    </div>
                </div>
            </Card>
             <Card title="Personal Information">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
                     <InfoRow label="Date of Birth" value="Not Available" />
                     <InfoRow label="Contact Number" value="Not Available" />
                     <InfoRow label="Father's Name" value="Not Available" />
                     <InfoRow label="Mother's Name" value="Not Available" />
                     <InfoRow label="Address" value="Not Available" />
                </div>
            </Card>
        </div>
    );
};

export default StudentInfo;
