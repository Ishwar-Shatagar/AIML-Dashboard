import React from 'react';
import { UpcomingEvent } from '../types';

interface UpcomingEventsProps {
    events: UpcomingEvent[];
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-dark mb-4">Upcoming Events</h3>
            <ul className="space-y-4">
                {events.map(event => (
                    <li key={event.id} className="flex items-start">
                        <div className="mt-1.5">
                            <span className={`h-2.5 w-2.5 rounded-full ${event.color} block`}></span>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-semibold text-gray-800">{event.title}</p>
                            <p className="text-xs text-gray-500">{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UpcomingEvents;