import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { FacultyProfile } from '../types';
import Card from '../components/ui/Card';
import { MOCK_STUDENTS, MOCK_ASSIGNMENTS } from '../constants';

const StatCard: React.FC<{ title: string; value: string | number; link: string }> = ({ title, value, link }) => (
    <Link to={link}>
        <Card className="text-center hover:shadow-xl transition-shadow">
            <p className="text-5xl font-extrabold text-primary">{value}</p>
            <p className="text-sm font-semibold text-gray-500 mt-2">{title}</p>
        </Card>
    </Link>
);


const FacultyDashboard: React.FC = () => {
    const { user } = useAuth();
    const faculty = user as FacultyProfile;

    if (!faculty || faculty.role !== 'faculty') {
        return <div>Loading faculty data...</div>;
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-dark">Welcome, {faculty.name}!</h1>
                <p className="text-gray-500">Your central hub for managing academic activities.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard title="Courses Taught" value={faculty.subjects.length} link="/faculty/courses" />
                <StatCard title="Total Students" value={MOCK_STUDENTS.length} link="/faculty/students" />
                <StatCard title="Active Assignments" value={MOCK_ASSIGNMENTS.length} link="/faculty/assignments" />
            </div>

            <Card title="My Subjects">
                <ul className="space-y-2">
                    {faculty.subjects.map((subject, index) => (
                        <li key={index} className="p-3 bg-light rounded-lg flex justify-between items-center">
                            <span className="font-semibold">{subject.name}</span>
                            <span className="text-sm text-gray-500">Sem {subject.semester}</span>
                        </li>
                    ))}
                </ul>
            </Card>

            <Card title="Quick Actions">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <Link to="/faculty/assignments" className="p-4 bg-primary/10 rounded-lg text-primary font-semibold hover:bg-primary/20 transition-colors">Manage Assignments</Link>
                    <Link to="/faculty/exams/create" className="p-4 bg-primary/10 rounded-lg text-primary font-semibold hover:bg-primary/20 transition-colors">Schedule Exam</Link>
                    <Link to="/faculty/students" className="p-4 bg-primary/10 rounded-lg text-primary font-semibold hover:bg-primary/20 transition-colors">View Students</Link>
                    <Link to="/faculty/feedback" className="p-4 bg-primary/10 rounded-lg text-primary font-semibold hover:bg-primary/20 transition-colors">Check Feedback</Link>
                </div>
            </Card>

        </div>
    );
};

export default FacultyDashboard;
