import React from 'react';
import Card from '../components/ui/Card';
import { MOCK_STUDENTS, MOCK_COURSES } from '../constants';

const StatCard: React.FC<{ title: string; value: string | number; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <Card className="flex items-center p-4">
        <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">{icon}</div>
        <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-2xl font-semibold text-dark">{value}</p>
        </div>
    </Card>
);

const FacultyDashboard: React.FC = () => {
    const totalStudents = MOCK_STUDENTS.length;
    const totalCourses = MOCK_COURSES.length;
    const avgCgpa = (MOCK_STUDENTS.reduce((acc, s) => acc + s.cgpa, 0) / totalStudents).toFixed(2);

    return (
        <div className="space-y-8">
             <div>
                <h1 className="text-3xl font-bold text-dark">Faculty Dashboard</h1>
                <p className="text-gray-500 mt-1">Overview of academic activities.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard 
                    title="Total Students" 
                    value={totalStudents} 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm6-11a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
                />
                 <StatCard 
                    title="Courses Offered" 
                    value={totalCourses} 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>}
                />
                 <StatCard 
                    title="Average CGPA" 
                    value={avgCgpa} 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                />
            </div>
            <Card title="Quick Actions">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <a href="/faculty/students" className="p-4 bg-light rounded-lg hover:bg-gray-200">
                        <p className="font-semibold">Manage Students</p>
                    </a>
                    <a href="/faculty/courses" className="p-4 bg-light rounded-lg hover:bg-gray-200">
                        <p className="font-semibold">Manage Courses</p>
                    </a>
                    <a href="/faculty/exams/create" className="p-4 bg-light rounded-lg hover:bg-gray-200">
                        <p className="font-semibold">Create Exam</p>
                    </a>
                     <a href="#" className="p-4 bg-light rounded-lg hover:bg-gray-200">
                        <p className="font-semibold">View Timetable</p>
                    </a>
                </div>
            </Card>
        </div>
    );
};

export default FacultyDashboard;