import React from 'react';
import Card from '../components/ui/Card';
import { MOCK_TIMETABLE } from '../constants';
import { TimetableEntry } from '../types';

const Timetable: React.FC = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-dark">Weekly Timetable</h1>
            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-center">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                            <tr>
                                <th className="px-4 py-3">Time</th>
                                <th className="px-4 py-3">Monday</th>
                                <th className="px-4 py-3">Tuesday</th>
                                <th className="px-4 py-3">Wednesday</th>
                                <th className="px-4 py-3">Thursday</th>
                                <th className="px-4 py-3">Friday</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {MOCK_TIMETABLE.map((row: TimetableEntry) => (
                                <tr key={row.time} className="hover:bg-light">
                                    <td className="px-4 py-4 font-semibold text-gray-600">{row.time}</td>
                                    <td className="px-4 py-4">{row.monday}</td>
                                    <td className="px-4 py-4">{row.tuesday}</td>
                                    <td className="px-4 py-4">{row.wednesday}</td>
                                    <td className="px-4 py-4">{row.thursday}</td>
                                    <td className="px-4 py-4">{row.friday}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default Timetable;