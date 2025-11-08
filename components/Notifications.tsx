import React from 'react';
import { MOCK_NOTIFICATIONS } from '../constants';
import { Notification } from '../types';

const Notifications: React.FC = () => {
    return (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg overflow-hidden z-20">
            <div className="py-2 px-4 font-bold border-b">Notifications</div>
            <ul className="divide-y">
                {MOCK_NOTIFICATIONS.map((notif: Notification) => (
                    <li key={notif.id} className={`p-3 text-sm ${!notif.read ? 'bg-blue-50' : ''}`}>
                        <p>{notif.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                    </li>
                ))}
            </ul>
            <a href="#" className="block bg-gray-50 text-center text-primary py-2 text-sm font-semibold">View all</a>
        </div>
    );
};

export default Notifications;