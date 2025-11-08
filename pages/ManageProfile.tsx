import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Card from '../components/ui/Card';
import ProfileCard from '../components/ProfileCard';

const ManageProfile: React.FC = () => {
    const { user } = useAuth();
    const [phone, setPhone] = useState(user?.phone || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would call an API to update the user profile.
        // For this demo, we'll just show an alert.
        alert(`Profile updated! New phone: ${phone}`);
    };

    if (!user) {
        return <div>Loading profile...</div>;
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-dark">My Profile</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                    <ProfileCard />
                </div>
                <div className="md:col-span-2">
                    <Card title="Edit Information">
                        <form onSubmit={handleSubmit} className="space-y-6">
                             <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <p className="mt-1 text-gray-800 font-semibold">{user.name}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <p className="mt-1 text-gray-500">{user.email} (cannot be changed)</p>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="mt-1 block w-full max-w-sm px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                />
                            </div>
                            <div className="flex justify-end pt-4">
                                <button type="submit" className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ManageProfile;
