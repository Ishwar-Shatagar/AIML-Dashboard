import React from 'react';
import Card from '../components/ui/Card';
import ScoreDonutChart from '../components/charts/ScoreDonutChart';
import { MOCK_ATTENDANCE } from '../constants';

const Attendance: React.FC = () => {
    const overallAttended = MOCK_ATTENDANCE.reduce((acc, curr) => acc + curr.attended, 0);
    const overallTotal = MOCK_ATTENDANCE.reduce((acc, curr) => acc + curr.total, 0);
    const overallPercentage = overallTotal > 0 ? Math.round((overallAttended / overallTotal) * 100) : 0;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-dark">Attendance</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                     <Card className="flex flex-col items-center justify-center text-center p-6">
                        <div className="text-5xl font-bold text-primary">{overallPercentage}%</div>
                        <p className="mt-2 text-gray-500">Overall Attendance</p>
                     </Card>
                </div>
                <div className="md:col-span-2">
                    <Card>
                        <ul className="divide-y">
                        {MOCK_ATTENDANCE.map(record => (
                             <li key={record.subjectCode} className="p-4 flex justify-between items-center">
                                <div>
                                    <p className="font-semibold">{record.subject}</p>
                                    <p className="text-xs text-gray-500">{record.subjectCode}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-dark">{Math.round((record.attended / record.total) * 100)}%</p>
                                    <p className="text-xs text-gray-500">{record.attended} / {record.total} classes</p>
                                </div>
                            </li>
                        ))}
                        </ul>
                    </Card>
                </div>
            </div>

            <Card title="Subject-wise Attendance">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MOCK_ATTENDANCE.map(record => (
                        <ScoreDonutChart 
                            key={record.subjectCode}
                            score={record.attended}
                            maxScore={record.total}
                            title={record.subject}
                        />
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default Attendance;
