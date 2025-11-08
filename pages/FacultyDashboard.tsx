// FIX: Creating FacultyDashboard page component.
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { FacultyProfile } from '../types';
import Card from '../components/ui/Card';
import { MOCK_COURSES, MOCK_UPCOMING_EVENTS, MOCK_STUDENTS } from '../constants';
import UpcomingEvents from '../components/UpcomingEvents';

const StatCard: React.FC<{ title: string; value: string | number; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <Card className="p-6 flex items-center">
        <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
            {icon}
        </div>
        <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-dark">{value}</p>
        </div>
    </Card>
);

const FacultyDashboard: React.FC = () => {
    const { user } = useAuth();
    const faculty = user as FacultyProfile;

    const coursesTaught = MOCK_COURSES.filter(c => c.faculty === faculty.name);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-dark">Welcome, {faculty.name}!</h1>
                <p className="text-gray-500">Your teaching dashboard and schedule overview.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Students" value={MOCK_STUDENTS.length} icon={<UsersIcon />} />
                <StatCard title="Courses Taught" value={coursesTaught.length} icon={<BookOpenIcon />} />
                <StatCard title="Assignments Graded" value="12" icon={<CheckCircleIcon />} />
                <StatCard title="Upcoming Classes" value="3" icon={<CalendarIcon />} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card title="My Courses">
                    <ul className="space-y-3">
                        {coursesTaught.map(course => (
                            <li key={course.id} className="flex justify-between items-center p-3 bg-light rounded-lg">
                                <div>
                                    <p className="font-semibold text-dark">{course.name}</p>
                                    <p className="text-xs text-gray-500">{course.code} - {course.credits} Credits</p>
                                </div>
                                <button className="text-sm font-medium text-primary hover:underline">View</button>
                            </li>
                        ))}
                    </ul>
                </Card>
                <UpcomingEvents events={MOCK_UPCOMING_EVENTS} />
            </div>
        </div>
    );
};

// SVG Icons
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197" /></svg>;
const BookOpenIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;

export default FacultyDashboard;
