import React from 'react';
import { AppUser, UserRole, StudentProfile, FacultyProfile } from '../types';

interface ProfileCardProps {
    user: AppUser;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <img 
                src={user.avatar} 
                alt={user.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary/20"
            />
            <h2 className="text-xl font-bold text-dark">{user.name}</h2>
            <p className="text-sm text-gray-500 capitalize">{user.role}</p>

            <div className="mt-6 text-left space-y-3">
                 <div className="flex items-center text-sm">
                    <MailIcon />
                    <span className="ml-2 text-gray-600">
                      {(user as StudentProfile).usn || (user as FacultyProfile).teacherId}@bldeacet.ac.in
                    </span>
                </div>
                {user.role === UserRole.STUDENT && (
                     <div className="flex items-center text-sm">
                        <AcademicCapIcon />
                        <span className="ml-2 text-gray-600">{(user as StudentProfile).course}</span>
                    </div>
                )}
                 {user.role === UserRole.FACULTY && (
                     <div className="flex items-center text-sm">
                        <OfficeBuildingIcon />
                        <span className="ml-2 text-gray-600">Faculty</span>
                    </div>
                )}
            </div>
        </div>
    );
};

// SVG Icons for ProfileCard
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const AcademicCapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zM12 14v6m-4-3h8" /></svg>;
const OfficeBuildingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;


export default ProfileCard;