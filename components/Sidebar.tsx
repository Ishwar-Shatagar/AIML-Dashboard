import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { UserRole } from '../types';

// Icons
const HomeIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>;
const UserIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>;
const ChevronDownIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>;
const ManagementIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" /></svg>;
const CogIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-1.007 1.11-1.226M10.343 3.94a2.25 2.25 0 01-2.25 2.25c-.583 0-1.141-.25-1.583-.67M13.657 3.94c-.09.542-.56 1.007-1.11 1.226m1.11-1.226a2.25 2.25 0 002.25 2.25c.583 0 1.141-.25 1.583-.67M5.83 15.242c.12.533.53 1.025.99 1.341m-1.341-1.341a2.25 2.25 0 00-2.25-2.25c-.583 0-1.141.25-1.583.67M18.17 15.242c-.12.533-.53 1.025-.99 1.341m1.341-1.341a2.25 2.25 0 012.25-2.25c.583 0 1.141.25 1.583.67M12 18.333a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75zM12 21a8.962 8.962 0 006.363-2.637m-12.727 0A8.962 8.962 0 0012 21z" /></svg>;
const LogoutIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>;

const Sidebar: React.FC = () => {
    const { user, logout } = useAuth();
    const [isManagementOpen, setManagementOpen] = useState(true);

    const managementSubLinks = [
        { to: '#', text: 'Admission' },
        { to: '#', text: 'Course' },
        { to: '#', text: 'Fees' },
        { to: '#', text: 'Attendance' },
        { to: '#', text: 'Online learning' },
        { to: '/student/timetable', text: 'Timetable' },
        { to: '#', text: 'Library' },
        { to: '#', text: 'Examination' },
        { to: '#', text: 'Assignment' },
        { to: '#', text: 'Placements' },
    ];

    const activeLinkClass = "bg-accent/10 text-accent border-r-4 border-accent";
    const inactiveLinkClass = "text-text-light hover:bg-accent/5";
    const sublinkInactiveClass = "text-text-light hover:text-accent";

    return (
        <aside className="w-72 bg-white flex-shrink-0 flex flex-col">
            <div className="px-8 py-6 text-center border-b">
                {user && (
                    <div className="flex flex-col items-center">
                        <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-full mb-3" />
                        <h2 className="text-xl font-bold text-text-main">Hi, {user.name.split(' ')[0]}</h2>
                    </div>
                )}
            </div>

            <nav className="flex-1 px-6 py-4 space-y-2">
                <NavLink
                    to={user?.role === UserRole.STUDENT ? '/student' : '/faculty'}
                    className={({ isActive }) => `flex items-center px-4 py-3 rounded-lg text-md font-semibold transition-colors ${isActive ? activeLinkClass : inactiveLinkClass}`}
                >
                    <HomeIcon className="w-6 h-6 mr-4" />
                    Dashboard
                </NavLink>

                <NavLink
                    to="/student/info" // A generic 'student' page, can be adapted
                    className={({ isActive }) => `flex items-center px-4 py-3 rounded-lg text-md font-semibold transition-colors ${isActive ? activeLinkClass : inactiveLinkClass}`}
                >
                    <UserIcon className="w-6 h-6 mr-4" />
                    Student
                </NavLink>

                <div>
                    <button onClick={() => setManagementOpen(!isManagementOpen)} className="flex items-center w-full px-4 py-3 rounded-lg text-md font-semibold text-text-light">
                        <ManagementIcon className="w-6 h-6 mr-4" />
                        Management
                        <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${isManagementOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isManagementOpen && (
                        <div className="pl-10 mt-2 space-y-1">
                            {managementSubLinks.map(link => (
                                <NavLink key={link.text} to={link.to} className={`block py-2 text-md font-medium ${sublinkInactiveClass}`}>{link.text}</NavLink>
                            ))}
                        </div>
                    )}
                </div>
                
                 <NavLink
                    to={user?.role === UserRole.STUDENT ? '/student/manage' : '/faculty/manage'}
                    className={({ isActive }) => `flex items-center px-4 py-3 rounded-lg text-md font-semibold transition-colors ${isActive ? activeLinkClass : inactiveLinkClass}`}
                >
                    <CogIcon className="w-6 h-6 mr-4" />
                    Manage Profile
                </NavLink>


            </nav>
            <div className="p-6 border-t">
                <button
                    onClick={logout}
                    className="flex items-center w-full px-4 py-3 rounded-lg text-md font-semibold text-text-light hover:bg-accent/5"
                >
                    <LogoutIcon className="w-6 h-6 mr-4" />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;