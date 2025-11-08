import React from 'react';
import Card from '../components/ui/Card';
import { useAuth } from '../hooks/useAuth';
import { StudentProfile } from '../types';
import CgpaChart from '../components/charts/CgpaChart';
import ScoreDonutChart from '../components/charts/ScoreDonutChart';

const StudentDashboard: React.FC = () => {
    const { user } = useAuth();
    const student = user as StudentProfile;

    if (!student) return null;

    const overallAttendance = student.attendance.reduce((acc, curr) => {
        acc.total += curr.total;
        acc.attended += curr.attended;
        return acc;
    }, { total: 0, attended: 0 });
    
    const attendancePercentage = overallAttendance.total > 0
        ? Math.round((overallAttendance.attended / overallAttendance.total) * 100)
        : 0;

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-dark">Welcome back, {student.name.split(' ')[0]}!</h1>
                <p className="text-gray-500 mt-1">Here's a summary of your academic progress.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card title="Overall CGPA">
                    <p className="text-5xl font-extrabold text-primary text-center my-6">{student.cgpa.toFixed(2)}</p>
                </Card>
                <Card title="Attendance">
                    <p className="text-5xl font-extrabold text-primary text-center my-6">{attendancePercentage}%</p>
                </Card>
                 <Card title="Latest Assessment">
                    <ScoreDonutChart score={student.assessments[0].score} />
                </Card>
            </div>
            
            <Card title="CGPA Trend">
                <CgpaChart data={student.cgpaHistory} />
            </Card>

            <Card title="Attendance by Subject">
                <div className="space-y-4">
                    {student.attendance.map(att => (
                        <div key={att.subject}>
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">{att.subject}</span>
                                <span className="text-sm font-medium text-gray-700">{Math.round((att.attended / att.total) * 100)}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-primary h-2.5 rounded-full" style={{ width: `${Math.round((att.attended / att.total) * 100)}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default StudentDashboard;