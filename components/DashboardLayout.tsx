import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAuth } from '../hooks/useAuth';
import ProfileCard from './ProfileCard';
import CalendarCard from './CalendarCard';
import UpcomingEvents from './UpcomingEvents';
import { MOCK_UPCOMING_EVENTS } from '../constants';

const DashboardLayout: React.FC = () => {
    const { user } = useAuth();
    if (!user) return null;

    return (
        <div className="flex h-screen bg-light font-sans">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-light p-6 lg:p-8">
                    <div className="container mx-auto grid grid-cols-1 xl:grid-cols-12 gap-8 h-full">
                       <div className="xl:col-span-8">
                           <Outlet />
                       </div>
                       <div className="hidden xl:block xl:col-span-4">
                           <div className="space-y-8 sticky top-8">
                                <ProfileCard user={user} />
                                <UpcomingEvents events={MOCK_UPCOMING_EVENTS} />
                           </div>
                       </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;