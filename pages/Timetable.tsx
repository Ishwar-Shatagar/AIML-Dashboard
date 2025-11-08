import React from 'react';
import Card from '../components/ui/Card';

const timetableData = {
    Monday: ["Data Structures", "Maths", "Lunch", "Algorithms", "Physics"],
    Tuesday: ["Physics Lab", "Physics Lab", "Lunch", "Data Structures", "English"],
    Wednesday: ["Algorithms", "Data Structures", "Lunch", "Maths", "Constitution"],
    Thursday: ["English", "Physics", "Lunch", "Algorithms Lab", "Algorithms Lab"],
    Friday: ["Maths", "Data Structures", "Lunch", "Project Work", "Project Work"],
    Saturday: ["-", "-", "-", "-", "-"],
};
const timeSlots = ["9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 1:00", "1:00 - 2:00"];

const Timetable: React.FC = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-dark">My Timetable</h1>
            <p className="text-gray-500 -mt-4">Here is your class schedule for the week.</p>
            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-center border-collapse">
                        <thead className="bg-light">
                            <tr>
                                <th className="p-3 font-semibold border">Day/Time</th>
                                {timeSlots.map(time => <th key={time} className="p-3 font-semibold border">{time}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(timetableData).map(([day, subjects]) => (
                                <tr key={day}>
                                    <td className="p-3 font-semibold border bg-light">{day}</td>
                                    {subjects.map((subject, index) => (
                                        <td key={`${day}-${index}`} className={`p-3 border ${subject === 'Lunch' ? 'bg-amber-100 font-medium' : ''}`}>
                                            {subject}
                                        </td>
                                    ))}
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
