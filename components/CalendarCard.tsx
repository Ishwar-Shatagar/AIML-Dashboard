import React, { useState } from 'react';

const CalendarCard: React.FC = () => {
    const [date, setDate] = useState(new Date());

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    
    const blanks = Array(firstDay).fill(null);
    const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const prevMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
                <button onClick={prevMonth} className="p-1 rounded-full hover:bg-gray-100">&lt;</button>
                <h3 className="text-lg font-bold text-dark">{monthNames[date.getMonth()]} {date.getFullYear()}</h3>
                <button onClick={nextMonth} className="p-1 rounded-full hover:bg-gray-100">&gt;</button>
            </div>
            <div className="grid grid-cols-7 gap-y-2 text-center text-sm">
                {days.map(day => <div key={day} className="font-semibold text-gray-500">{day}</div>)}
                {blanks.map((_, i) => <div key={`blank-${i}`}></div>)}
                {monthDays.map(day => (
                    <div
                        key={day}
                        className={`p-1 rounded-full cursor-pointer ${
                            day === new Date().getDate() && date.getMonth() === new Date().getMonth()
                                ? 'bg-primary text-white'
                                : 'hover:bg-gray-100'
                        }`}
                    >
                        {day}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CalendarCard;