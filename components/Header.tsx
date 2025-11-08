import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Notifications from './Notifications';

const Header: React.FC = () => {
    const { user, logout } = useAuth();
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    if (!user) return null;

    return (
        <header className="h-20 bg-white border-b flex items-center justify-end px-8">
            <div className="flex items-center space-x-6">
                {/* Notifications */}
                <div className="relative">
                    <button onClick={() => setNotificationsOpen(!notificationsOpen)} className="p-2 rounded-full hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    </button>
                    {notificationsOpen && <Notifications />}
                </div>

                {/* Profile */}
                <div className="relative">
                    <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center space-x-2">
                        <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                        <div>
                            <p className="font-semibold text-sm text-dark">{user.name}</p>
                            <p className="text-xs text-gray-500 capitalize">{user.role}</p>
                        </div>
                    </button>
                    {profileOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                            <button onClick={logout} className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;