import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { StudentProfile } from '../types';
import Card from '../components/ui/Card';
import CgpaChart from '../components/charts/CgpaChart';
import ScoreDonutChart from '../components/charts/ScoreDonutChart';

const StudentDashboard: React.FC = () => {
    const { user } = useAuth();
    const student = user as StudentProfile;

    if (!student || student.role !== 'student') {
        return <div>Loading student data...</div>;
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-dark">Welcome, {student.name.split(' ')[0]}!</h1>
                <p className="text-gray-500">Here's a summary of your academic progress.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card title="Overall CGPA">
                    <div className="text-center">
                        <p className="text-5xl font-extrabold text-primary">{student.cgpa?.toFixed(2)}</p>
                        <p className="text-sm text-gray-500">Out of 10.0</p>
                    </div>
                </Card>
                <Card title="Attendance">
                     <ScoreDonutChart score={student.attendance} />
                </Card>
                <Card title="Courses Enrolled">
                    <div className="text-center">
                        <p className="text-5xl font-extrabold text-primary">5</p>
                        <p className="text-sm text-gray-500">This Semester</p>
                    </div>
                </Card>
            </div>
            
            <Card title="CGPA Trend">
                <CgpaChart data={student.cgpaData} />
            </Card>

            <Card title="Recent Announcements">
                <ul className="space-y-3">
                    <li className="p-3 bg-light rounded-lg">
                        <p className="font-semibold">Internal Assessment 2 schedule is out.</p>
                        <p className="text-xs text-gray-500">Posted 2 days ago</p>
                    </li>
                     <li className="p-3 bg-light rounded-lg">
                        <p className="font-semibold">Tech Fest "Innovate 2023" registrations are open.</p>
                        <p className="text-xs text-gray-500">Posted 5 days ago</p>
                    </li>
                </ul>
            </Card>
        </div>
    );
};

export default StudentDashboard;
