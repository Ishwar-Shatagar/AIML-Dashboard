import React, { useState, useRef } from 'react';
import Card from '../components/ui/Card';
import { useAuth } from '../hooks/useAuth';

const ManageProfile: React.FC = () => {
    const { user, updateUserAvatar } = useAuth();
    const [preview, setPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    if (!user) {
        return <div>Loading...</div>;
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }
    };
    
    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleSave = () => {
        if (preview) {
            updateUserAvatar(preview);
            alert('Profile picture updated for this session!');
        }
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-dark">Manage Profile</h1>
            <Card>
                <div className="flex flex-col items-center space-y-6">
                    <h2 className="text-xl font-semibold">Profile Picture</h2>
                    <div className="relative">
                        <img
                            src={preview || user.avatar}
                            alt="Profile Avatar"
                            className="w-40 h-40 rounded-full object-cover border-4 border-primary/20"
                        />
                    </div>
                    
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                    />

                    <div className="flex space-x-4">
                        <button
                            onClick={handleUploadClick}
                            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                        >
                            Choose Photo
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={!preview}
                            className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            Save Changes
                        </button>
                    </div>
                     <p className="text-sm text-text-light">Note: Changes are only saved for your current session in this demo.</p>
                </div>
            </Card>
        </div>
    );
};

export default ManageProfile;