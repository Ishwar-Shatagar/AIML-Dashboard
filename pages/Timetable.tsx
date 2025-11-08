// FIX: Creating Timetable page component.
import React from 'react';
import Card from '../components/ui/Card';
import { MOCK_TIMETABLE } from '../constants';

const Timetable: React.FC = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-dark">My Timetable</h1>
            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase border-b">
                            <tr>
                                <th className="px-4 py-3">Day</th>
                                <th className="px-4 py-3">9:00 - 10:00</th>
                                <th className="px-4 py-3">10:00 - 11:00</th>
                                <th className="px-4 py-3">11:00 - 12:00</th>
                                <th className="px-4 py-3">12:00 - 1:00</th>
                                {/* Add more time slots if needed */}
                            </tr>
                        </thead>
                        <tbody>
                            {MOCK_TIMETABLE.map(entry => (
                                <tr key={entry.day} className="border-b last:border-0 hover:bg-light">
                                    <td className="px-4 py-4 font-semibold w-32">{entry.day}</td>
                                    {/* This is a simplified mapping. A more robust solution would map periods to specific time slots. */}
                                    <td className="px-4 py-4">
                                        {entry.periods.find(p => p.time.startsWith('9')) && (
                                            <div>
                                                <p className="font-semibold">{entry.periods.find(p => p.time.startsWith('9'))?.subject}</p>
                                                <p className="text-xs text-gray-500">{entry.periods.find(p => p.time.startsWith('9'))?.faculty}</p>
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-4 py-4">
                                         {entry.periods.find(p => p.time.startsWith('10')) && (
                                            <div>
                                                <p className="font-semibold">{entry.periods.find(p => p.time.startsWith('10'))?.subject}</p>
                                                <p className="text-xs text-gray-500">{entry.periods.find(p => p.time.startsWith('10'))?.faculty}</p>
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-4 py-4">
                                         {entry.periods.find(p => p.time.startsWith('11')) && (
                                            <div>
                                                <p className="font-semibold">{entry.periods.find(p => p.time.startsWith('11'))?.subject}</p>
                                                <p className="text-xs text-gray-500">{entry.periods.find(p => p.time.startsWith('11'))?.faculty}</p>
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-4 py-4 text-center text-gray-400">Lunch</td>
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
