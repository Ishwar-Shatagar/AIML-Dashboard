import React, { useState } from 'react';
import { UpcomingEvent } from '../types';
import Card from './ui/Card';

interface CalendarCardProps {
    events: UpcomingEvent[];
}

const CalendarCard: React.FC<CalendarCardProps> = ({ events }) => {
    const [currentDate, setCurrentDate] = useState(new Date('2023-10-01')); // Mocking a specific month to match event data

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const startDate = new Date(startOfMonth);
    startDate.setDate(startDate.getDate() - startOfMonth.getDay());

    const endDate = new Date(endOfMonth);
    endDate.setDate(endDate.getDate() + (6 - endOfMonth.getDay()));
    
    const calendarDays = [];
    let day = new Date(startDate);
    
    while (day <= endDate) {
        calendarDays.push(new Date(day));
        day.setDate(day.getDate() + 1);
    }
    
    const eventDates = events.map(e => new Date(e.date).toDateString());

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    return (
        <Card title="Calendar">
            <div className="flex justify-between items-center mb-4">
                <button onClick={prevMonth} className="p-1 rounded-full hover:bg-gray-100">&lt;</button>
                <h4 className="font-semibold">{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h4>
                <button onClick={nextMonth} className="p-1 rounded-full hover:bg-gray-100">&gt;</button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {daysOfWeek.map(d => <div key={d} className="font-medium text-gray-500">{d}</div>)}
                {calendarDays.map((date, index) => {
                    const isCurrentMonth = date.getMonth() === currentDate.getMonth();
                    const isToday = new Date().toDateString() === date.toDateString();
                    const hasEvent = eventDates.includes(date.toDateString());

                    return (
                        <div key={index} className={`p-1.5 rounded-full ${!isCurrentMonth ? 'text-gray-300' : ''}`}>
                            <span className={`flex items-center justify-center w-7 h-7 rounded-full
                                ${isToday ? 'bg-primary text-white' : ''}
                                ${hasEvent ? 'bg-accent text-white font-bold' : ''}
                            `}>
                                {date.getDate()}
                            </span>
                        </div>
                    )
                })}
            </div>
        </Card>
    );
};

export default CalendarCard;
