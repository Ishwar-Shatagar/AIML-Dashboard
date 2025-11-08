import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { StudentProfile } from '../types';
import Card from '../components/ui/Card';
import CgpaChart from '../components/charts/CgpaChart';
import ScoreDonutChart from '../components/charts/ScoreDonutChart';
import UpcomingEvents from '../components/UpcomingEvents';
import CalendarCard from '../components/CalendarCard';
import { MOCK_UPCOMING_EVENTS, MOCK_GRADES } from '../constants';

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

const StudentDashboard: React.FC = () => {
    const { user } = useAuth();
    const student = user as StudentProfile;

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-dark">Welcome, {student.name.split(' ')[0]}!</h1>
                <p className="text-gray-500">Here's your academic and activity overview.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Overall Attendance" value={`${student.attendance}%`} icon={<CheckCircleIcon />} />
                <StatCard title="Courses Enrolled" value={MOCK_GRADES.length} icon={<BookOpenIcon />} />
                <StatCard title="Pending Assignments" value="2" icon={<ClipboardListIcon />} />
                <StatCard title="Exams Scheduled" value="3" icon={<CalendarIcon />} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <Card title="Recent Grades">
                         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {MOCK_GRADES.slice(0, 3).map(grade => (
                                <ScoreDonutChart key={grade.subjectCode} score={grade.total} maxScore={100} title={grade.subject} />
                            ))}
                        </div>
                    </Card>
                </div>
                <div className="space-y-6">
                    <CgpaChart cgpa={student.cgpa} />
                    <UpcomingEvents events={MOCK_UPCOMING_EVENTS} />
                </div>
            </div>
            
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <CalendarCard events={MOCK_UPCOMING_EVENTS} />
                </div>
            </div>
        </div>
    );
};

// Icons
const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const BookOpenIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
const ClipboardListIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>;
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;

export default StudentDashboard;
