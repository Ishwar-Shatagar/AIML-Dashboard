import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { UserRole } from '../types';
import Card from '../components/ui/Card';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [role, setRole] = useState<UserRole>(UserRole.STUDENT);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login, loading, user } = useAuth();

    if (user) {
        return <Navigate to="/" replace />;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (!email) {
            setError('Please enter your email.');
            return;
        }
        try {
            await login(email, role);
            navigate('/', { replace: true });
        } catch (err: any) {
            setError(err.message || 'Failed to login. Please check your credentials.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-light">
            <Card className="w-full max-w-md">
                <div className="p-8">
                    <h1 className="text-3xl font-bold text-center text-dark mb-2">Welcome Back!</h1>
                    <p className="text-center text-gray-500 mb-8">Sign in to your account</p>
                    {error && <p className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-sm">{error}</p>}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">I am a</label>
                            <select
                                id="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value as UserRole)}
                                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            >
                                <option value={UserRole.STUDENT}>Student</option>
                                <option value={UserRole.FACULTY}>Faculty</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="student@test.com or faculty@test.com"
                                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                required
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 px-4 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark disabled:bg-primary/50 disabled:cursor-not-allowed transition-colors"
                            >
                                {loading ? 'Logging in...' : 'Login'}
                            </button>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
    );
};

export default Login;
