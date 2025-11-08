import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { useAuth } from '../hooks/useAuth';
import ProfileCard from './ProfileCard';
import CalendarCard from './CalendarCard';
import UpcomingEvents from './UpcomingEvents';
import { MOCK_UPCOMING_EVENTS } from '../constants';

const DashboardLayout: React.FC = () => {
    const { user } = useAuth();
    if (!user) return null;

    return (
        <div className="flex h-screen bg-light">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-light p-8">
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
                       <div className="lg:col-span-8 xl:col-span-9">
                           <Outlet />
                       </div>
                       <div className="lg:col-span-4 xl:col-span-3 space-y-8">
                            <ProfileCard user={user} />
                            <CalendarCard />
                            <UpcomingEvents events={MOCK_UPCOMING_EVENTS} />
                       </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;