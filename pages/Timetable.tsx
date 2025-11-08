import React, { useState, useMemo } from 'react';
import Card from '../components/ui/Card';
import { useAuth } from '../hooks/useAuth';
import { MOCK_TIMETABLE } from '../constants';
import { StudentProfile, FacultyProfile, UserRole, DailySchedule, TimetableEntry } from '../types';

const timeSlots = [
  "9:00-9:55", "9:55-10:50", "10:50-11:20", "11:20-12:15", "12:15-1:10", 
  "1:10-2:15", "2:15-3:10", "3:10-4:05"
];
const daysOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Timetable: React.FC = () => {
    const { user } = useAuth();
    const initialSemester = (user?.role === UserRole.STUDENT) ? (user as StudentProfile).semester : '3';
    const [selectedSemester, setSelectedSemester] = useState(initialSemester);

    const schedule: DailySchedule | null = useMemo(() => {
        if (user?.role === UserRole.FACULTY) {
            const facultySchedule: DailySchedule = {};
            const facultyName = (user as FacultyProfile).name;
            const semesterSchedule = MOCK_TIMETABLE[selectedSemester];
            if (!semesterSchedule) return null;

            for (const day of daysOrder) {
                facultySchedule[day] = [];
                for (const entry of (semesterSchedule[day] || [])) {
                    if (entry.teacher === facultyName) {
                        facultySchedule[day].push(entry);
                    }
                }
            }
            return facultySchedule;
        }
        return MOCK_TIMETABLE[selectedSemester] || null;
    }, [user, selectedSemester]);

    const findClassForSlot = (day: string, time: string): TimetableEntry[] => {
        if (!schedule || !schedule[day]) return [];
        const [startTime] = time.split('-');
        return schedule[day].filter(entry => entry.time.startsWith(startTime));
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <div>
                    <h1 className="text-3xl font-bold text-dark">My Timetable</h1>
                    <p className="text-gray-500 -mt-1">
                        {user?.role === UserRole.FACULTY ? `Showing your classes for Semester ${selectedSemester}` : `Your class schedule for the week.`}
                    </p>
                </div>
                <div>
                    <label htmlFor="semester" className="text-sm font-medium text-gray-700 mr-2">Semester:</label>
                    <select
                        id="semester"
                        value={selectedSemester}
                        onChange={(e) => setSelectedSemester(e.target.value)}
                        className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    >
                        <option value="3">3rd</option>
                        <option value="5">5th</option>
                        <option value="7">7th</option>
                    </select>
                </div>
            </div>
            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-center border-collapse">
                        <thead className="bg-light">
                            <tr>
                                <th className="p-3 font-semibold border min-w-[100px]">Day/Time</th>
                                {timeSlots.map(time => <th key={time} className="p-3 font-semibold border min-w-[120px]">{time}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {daysOrder.map(day => (
                                <tr key={day}>
                                    <td className="p-3 font-semibold border bg-light">{day}</td>
                                    {timeSlots.map(time => {
                                        const classes = findClassForSlot(day, time);
                                        const isBreak = time === "10:50-11:20" || time === "1:10-2:15";
                                        if (isBreak) {
                                            return <td key={`${day}-${time}`} className="p-3 border bg-amber-100 font-medium">Break</td>
                                        }
                                        return (
                                            <td key={`${day}-${time}`} className="p-3 border align-top text-left">
                                                {classes.length > 0 ? (
                                                    classes.map((c, i) => (
                                                        <div key={i} className="mb-1 p-2 rounded-lg bg-primary/10 text-primary-dark">
                                                            <p className="font-bold text-sm">{c.short}</p>
                                                            <p className="text-xs">{c.teacher}</p>
                                                        </div>
                                                    ))
                                                ) : '-'}
                                            </td>
                                        )
                                    })}
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
