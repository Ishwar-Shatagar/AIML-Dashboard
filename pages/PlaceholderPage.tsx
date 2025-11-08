import React from 'react';
import Card from '../components/ui/Card';

interface PlaceholderPageProps {
    title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-dark">{title}</h1>
            <Card>
                <div className="text-center py-12">
                     <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h2 className="mt-4 text-xl font-semibold text-gray-800">Coming Soon!</h2>
                    <p className="mt-2 text-gray-500">This feature is currently under construction. Please check back later.</p>
                </div>
            </Card>
        </div>
    );
};

export default PlaceholderPage;