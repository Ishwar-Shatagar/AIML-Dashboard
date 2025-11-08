import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { UserRole } from '../types';

const studentLinks = [
    { path: '/student/dashboard', name: 'Dashboard' },
    { path: '/student/timetable', name: 'Timetable' },
    { path: '/student/attendance', name: 'Attendance' },
    { path: '/student/gradebook', name: 'Gradebook' },
    { path: '/student/feedback', name: 'Feedback' },
    { path: '/student/chat', name: 'AI Chat' },
];

const facultyLinks = [
    { path: '/faculty/dashboard', name: 'Dashboard' },
    { path: '/faculty/students', name: 'Students' },
    { path: '/faculty/courses', name: 'Courses' },
    { path: '/faculty/assignments', name: 'Assignments' },
    { path: '/faculty/exams/create', name: 'Create Exam' },
    { path: '/faculty/feedback', name: 'View Feedback' },
    { path: '/faculty/timetable', name: 'Timetable' },
];

interface SidebarProps {
    isSidebarOpen: boolean;
    setSidebarOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, setSidebarOpen }) => {
    const { user } = useAuth();
    const links = user?.role === UserRole.STUDENT ? studentLinks : facultyLinks;

    const handleClose = () => {
        if(window.innerWidth < 1024) { // Only close on mobile
            setSidebarOpen(false);
        }
    };

    return (
        <>
            <div
                className={`fixed inset-0 z-20 bg-black opacity-50 transition-opacity lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}
                onClick={() => setSidebarOpen(false)}
            ></div>

            <aside
                className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-dark text-white transition-transform duration-300 ease-in-out lg:static lg:inset-0 lg:translate-x-0 lg:flex-shrink-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="p-4 flex justify-between items-center h-20 border-b border-gray-700">
                    <h1 className="text-2xl font-bold">UniPortal</h1>
                    <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white text-2xl">&times;</button>
                </div>
                <nav className="mt-4">
                    {links.map(link => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={handleClose}
                            className={({ isActive }) =>
                                `flex items-center px-6 py-3 text-base font-semibold transition-colors duration-200 ${isActive ? 'bg-primary text-white' : 'hover:bg-gray-700'}`
                            }
                        >
                            <span>{link.name}</span>
                        </NavLink>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
