import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { StudentProfile } from '../types';
import Card from '../components/ui/Card';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { MOCK_CLASSMATES } from '../constants';

const StatsChart = () => {
    const data = [
      { name: 'Jan', progress: 60, average: 50 },
      { name: 'Feb', progress: 65, average: 55 },
      { name: 'Mar', progress: 70, average: 60 },
      { name: 'Apr', progress: 68, average: 62 },
      { name: 'May', progress: 75, average: 65 },
      { name: 'Jun', progress: 80, average: 70 },
      { name: 'Jul', progress: 82, average: 75 },
      { name: 'Aug', progress: 85, average: 78 },
      { name: 'Sep', progress: 88, average: 80 },
    ];
    return (
        <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={data} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorAverage" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <Tooltip />
                <XAxis dataKey="name" tick={{fontSize: 12}} />
                <YAxis tick={{fontSize: 12}} />
                <Area type="monotone" dataKey="progress" stroke="#8B5CF6" strokeWidth={2} fill="url(#colorProgress)" />
                <Area type="monotone" dataKey="average" stroke="#10B981" strokeWidth={2} fill="url(#colorAverage)" />
            </AreaChart>
        </ResponsiveContainer>
    );
}

const ActivityChart = () => {
    const data = [
        { name: 'Class', value: 400 },
        { name: 'Exam', value: 300 },
        { name: 'Assignment', value: 300 },
        { name: 'Judgement', value: 200 },
    ];
    const COLORS = ['#F59E0B', '#10B981', '#8B5CF6', '#EF4444'];
    return (
        <div className="w-full h-48 relative">
            <ResponsiveContainer>
                <PieChart>
                    <Pie data={data} cx="50%" cy="50%" innerRadius="60%" outerRadius="80%" fill="#8884d8" paddingAngle={5} dataKey="value">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                 <span className="text-5xl font-extrabold text-dark">80%</span>
            </div>
        </div>
    )
}


const StudentDashboard: React.FC = () => {
    const { user } = useAuth();
    const student = user as StudentProfile;

    if (!student || student.role !== 'student') {
        return <div>Loading student data...</div>;
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-text-main">Student Dashboard</h1>
                <input type="text" placeholder="Search..." className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            
            <Card className="!p-0 overflow-hidden">
                 <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-text-light uppercase bg-light">
                            <tr>
                                {['Name', 'Ad.no', 'Date', 'Parent Name', 'City', 'Contact', 'Course', 'Action'].map(h => <th key={h} className="px-6 py-3">{h}</th>)}
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {MOCK_CLASSMATES.map((s, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4 font-semibold flex items-center"><img src={s.avatar} alt={s.name} className="w-8 h-8 rounded-full mr-3" />{s.name}</td>
                                    <td className="px-6 py-4">{s.adNo}</td>
                                    <td className="px-6 py-4">{s.date}</td>
                                    <td className="px-6 py-4">{s.parent}</td>
                                    <td className="px-6 py-4">{s.city}</td>
                                    <td className="px-6 py-4">{s.contact}</td>
                                    <td className="px-6 py-4">{s.course}</td>
                                    <td className="px-6 py-4">...</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <Card title="Statistics" className="lg:col-span-3">
                    <StatsChart />
                </Card>
                 <Card title="Activities" className="lg:col-span-2">
                    <ActivityChart />
                </Card>
            </div>
        </div>
    );
};

export default StudentDashboard;