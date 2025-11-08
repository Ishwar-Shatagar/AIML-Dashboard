import React from 'react';
import Card from '../components/ui/Card';
import { useAuth } from '../hooks/useAuth';
import { StudentProfile } from '../types';
import CgpaChart from '../components/charts/CgpaChart';
import ScoreDonutChart from '../components/charts/ScoreDonutChart';

const StudentInfo: React.FC = () => {
    const { user } = useAuth();
    const student = user as StudentProfile;

    if (!student || student.role !== 'student') return null;

    const finalScore = 82;
    const finalGrade = 'B';

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-dark">Student Details</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Student Details Card */}
                <Card className="lg:col-span-2">
                    <div className="flex items-center">
                        <img src={student.avatar} alt={student.name} className="w-24 h-24 rounded-full" />
                        <div className="ml-6 grid grid-cols-2 gap-x-8 gap-y-4 flex-1">
                            <div><span className="font-semibold text-text-light block">Student Name:</span> <span className="font-bold">{student.name}</span></div>
                            <div><span className="font-semibold text-text-light block">Class Number:</span> <span className="font-bold">191</span></div>
                            <div><span className="font-semibold text-text-light block">Batch-Year:</span> <span className="font-bold">{student.batch}</span></div>
                            <div><span className="font-semibold text-text-light block">Class Teacher:</span> <span className="font-bold">Jennifer</span></div>
                            <div><span className="font-semibold text-text-light block">Examination:</span> <span className="font-bold">Final Year</span></div>
                            <div><span className="font-semibold text-text-light block">Final Grade:</span> <span className="font-bold">{finalGrade}</span></div>
                        </div>
                    </div>
                </Card>
                {/* Final Score Card */}
                 <Card className="flex flex-col items-center justify-center">
                    <h3 className="text-xl font-bold text-dark mb-2">Final Score:</h3>
                    <ScoreDonutChart score={finalScore} grade={finalGrade} />
                    <p className="text-xs text-text-light mt-2 text-center">Final grade based on both examinations as well as activities and conducts</p>
                </Card>
            </div>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Marks and Historical Performance */}
                <div className="space-y-6">
                    {/* FIX: Added placeholder content to satisfy required 'children' prop. */}
                    <Card title="Marks">
                        <div className="text-center py-8 text-gray-500">
                            {/* Table implementation */}
                            Marks details are not available yet.
                        </div>
                    </Card>
                    <Card title="Historical Performance">
                        <CgpaChart data={student.cgpaData} />
                    </Card>
                </div>
                {/* Activities and Conduct */}
                <div className="space-y-6">
                    <Card title="Activities & Conduct">
                        <div className="space-y-4">
                            {student.activities.map(activity => (
                                <div key={activity.name}>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-text-main">{activity.grade}</span>
                                        <span className="text-sm font-semibold text-text-light">{activity.name}</span>
                                        <span className="font-semibold text-primary-dark">{activity.score}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-primary h-2 rounded-full" style={{ width: `${activity.score}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                    {/* FIX: Added placeholder content to satisfy required 'children' prop. */}
                    <Card title="Total Grade Details">
                       <div className="text-center py-8 text-gray-500">
                            {/* Table implementation */}
                            Total grade details are not available yet.
                        </div>
                    </Card>
                </div>
            </div>
             <Card title="Grading Scale" className="!bg-gradient-to-r from-primary to-purple-600 !text-white">
                <div className="flex justify-around text-center">
                    <div><h4 className="font-bold">A+</h4><p>100-96</p></div>
                    <div><h4 className="font-bold">A</h4><p>95-91</p></div>
                    <div><h4 className="font-bold">B+</h4><p>90-86</p></div>
                    <div><h4 className="font-bold">B</h4><p>85-81</p></div>
                    <div><h4 className="font-bold">C</h4><p>80-76</p></div>
                    <div><h4 className="font-bold">D</h4><p>75 Below</p></div>
                </div>
            </Card>
        </div>
    );
};

export default StudentInfo;