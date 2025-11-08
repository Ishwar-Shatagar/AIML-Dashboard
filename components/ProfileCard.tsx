import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { StudentProfile, FacultyProfile, UserRole } from '../types';
import Card from './ui/Card';

const ProfileCard: React.FC = () => {
    const { user } = useAuth();
    if (!user) return null;

    const isStudent = user.role === UserRole.STUDENT;
    const profile = user as StudentProfile | FacultyProfile;

    return (
        <Card>
            <div className="flex flex-col items-center text-center p-6">
                <img className="w-24 h-24 rounded-full mb-4 object-cover" src={profile.avatar} alt={profile.name} />
                <h2 className="text-xl font-bold text-dark">{profile.name}</h2>
                <p className="text-sm text-gray-500">{isStudent ? (profile as StudentProfile).usn : (profile as FacultyProfile).department}</p>
                <div className="mt-4 border-t w-full pt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span className="font-semibold text-gray-600">Email:</span>
                        <span className="text-gray-800">{profile.email}</span>
                    </div>
                     <div className="flex justify-between">
                        <span className="font-semibold text-gray-600">Phone:</span>
                        <span className="text-gray-800">{profile.phone}</span>
                    </div>
                    {isStudent && (
                        <>
                            <div className="flex justify-between">
                                <span className="font-semibold text-gray-600">Branch:</span>
                                <span className="text-gray-800">{(profile as StudentProfile).branch}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold text-gray-600">Semester:</span>
                                <span className="text-gray-800">{(profile as StudentProfile).semester}</span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default ProfileCard;
