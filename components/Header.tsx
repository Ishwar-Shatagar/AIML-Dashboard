import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Notifications from './Notifications';

interface HeaderProps {
    setSidebarOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen }) => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    if (!user) return null;

    const handleLogout = () => {
        logout();
        navigate('/login', { replace: true });
    };

    const profilePath = user.role === 'student' ? '/student/profile' : '/faculty/profile';

    return (
        <header className="flex items-center justify-between h-20 px-6 bg-white border-b flex-shrink-0">
            <div className="flex items-center">
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="text-gray-500 focus:outline-none lg:hidden"
                >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <div className="relative mx-4 lg:mx-0">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>

                    <input className="w-32 pl-10 pr-4 py-2 text-sm text-gray-700 bg-light rounded-md sm:w-64 focus:outline-none" type="text" placeholder="Search" />
                </div>
            </div>

            <div className="flex items-center">
                <div className="relative">
                    <button
                        onClick={() => setNotificationsOpen(!notificationsOpen)}
                        className="flex mx-4 text-gray-600 focus:outline-none"
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    {notificationsOpen && <Notifications />}
                </div>

                <div className="relative">
                    <button
                        onClick={() => setProfileOpen(!profileOpen)}
                        className="flex items-center focus:outline-none"
                    >
                        <span className="hidden md:inline text-sm font-semibold mr-3">{user.name}</span>
                        <img className="w-8 h-8 rounded-full object-cover" src={user.avatar} alt="Your avatar" />
                    </button>
                    {profileOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
                            <Link to={profilePath} onClick={() => setProfileOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white">Profile</Link>
                            <button onClick={handleLogout} className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white">Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
