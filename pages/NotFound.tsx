import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-indigo-600">404</h1>
                <p className="text-2xl font-semibold text-gray-800 mt-4">Page Not Found</p>
                <p className="text-gray-500 mt-2">Sorry, the page you are looking for does not exist.</p>
                <Link to="/" className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors">
                    Go to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;