import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { UserRole } from '../types';

const Login: React.FC = () => {
    const [role, setRole] = useState<UserRole>(UserRole.STUDENT);
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        const success = login(role, id, password);
        if (success) {
            const path = role === UserRole.STUDENT ? '/student' : '/faculty';
            navigate(path);
        } else {
            setError('Invalid credentials. Please check your ID and password.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
            <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-primary">LMS Portal Login</h1>
                    <p className="text-gray-500">Welcome! Please sign in.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <span className="text-gray-700 font-medium">Select your role:</span>
                        <div className="mt-2 flex justify-around">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio h-5 w-5 text-primary"
                                    name="role"
                                    value={UserRole.STUDENT}
                                    checked={role === UserRole.STUDENT}
                                    onChange={() => setRole(UserRole.STUDENT)}
                                />
                                <span className="ml-2 text-gray-700">Student</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio h-5 w-5 text-primary"
                                    name="role"
                                    value={UserRole.FACULTY}
                                    checked={role === UserRole.FACULTY}
                                    onChange={() => setRole(UserRole.FACULTY)}
                                />
                                <span className="ml-2 text-gray-700">Faculty</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="id" className="text-sm font-bold text-gray-700 tracking-wide">
                            {role === UserRole.STUDENT ? 'Student USN' : 'Faculty ID'}
                        </label>
                        <input
                            id="id"
                            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
                            type="text"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            placeholder={role === UserRole.STUDENT ? 'e.g., 1BI19CS001' : 'e.g., TCS01'}
                            required
                        />
                    </div>

                    {role === UserRole.FACULTY && (
                        <div>
                            <label
                                htmlFor="password"
                                className="text-sm font-bold text-gray-700 tracking-wide"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                    )}
                     {error && (
                        <p className="text-red-500 text-center text-sm">{error}</p>
                    )}
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center bg-primary text-gray-100 p-3 rounded-full tracking-wide font-semibold cursor-pointer transition ease-in duration-300"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;