import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { UserRole } from '../types';

const bldeaLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAfASURBVHhe7Z1/aFRlGMe/s5tQpCF2JUSwCxVBwbQUS62I4B/bELU/YlsxxRIrU21xK1gKWzFBIVZpkyIpsVRsCFZp1dYqK7VgFbLRIrYQUVZBwd2f3Hve3b33vLvvvZv3+8DAu+fevffNfN/7Pffcew+RkZGRkZGRkZGRkZGRkZGRkZFhL1V62+z/wL0L9d4d5FvWd/yF/yK9/1h7P+H9D6f6WwY5NfT5/8n7b/S3D/Jr13sX6i0Hyr2P5FvXv/D/j4/y713s/8T7n8e0ZxmR0ttr5/pP7X0P5v+a/r/t/83rO/X+0/b+q/k9tff88/yedv8kPz/s37vY/5P13g/8v2r1b9f7t+b7d8b7N/m9S/m+pftb+T3C999e97e2+2fH+zfk+/fM97/3/L+D1V7n/r9V/N7f9P9g/z+y/tP9fe19v7G+9/V7x8a7f+Z9/9Ivb/w/u/o91+v96+U73+Q718b7d9V75+V7/+A/y+1/2T9/1F/32L//0N+P+z/R/r+e/r+t/n+g/x+S//+r/n+7+z9jfr+5/a+R//+S//+y3x/1qBHPX0EwJgR3z0g33/p71ft/8X7v93rL/X3D/L7a+v9j/r7p/z+mv7+Y34/of//zN9P7b/X3v+43l+V75+y9z/k+yfs/cft/Yz+vmX//zF/P7f/L/X+7e19qN4/Ue8/p+9v2vtQvf+sfn+t3n+C/j+s37/J73+c7/+Yv/+h3r+u3r9V7/8p938a9b5FvZ+g37+r37+G/n8N/P4M/PwU/f/g3t+E8B8JYKQI3yMg+p4BfF8H+F4B8b0B8b0D8L0E8L0C4vscxPftgO93AN9vAr5vI3zfTvh+K/D9JuD7DsD3W4DvdwG/b/d8f0A4vgMwfAfh+DbC8e2C43sCx3cEjh8LHJ8bOH4scXwe4Ph8wPF5g+PzFsfnDY7PZxifzzI+n2N8Psf4fI7x+Zzk+ZzG+ZzM+ZxM+ZzC+ZxS+Zwy+Zwi+ZyC+ZyK+ZyS+ZyM+ZyO+Zyc+Zyc+Zx8+Zx0+Zx6+ZzK+ZxC+ZzG+ZzC+ZzK+ZxS+ZzS+Zzi+Zzi+Zzy+Zzy+Zzy+ZzM+ZzO+ZzM+ZzM+ZzM+ZzM+ZzM+ZzK+Zyi+ZxS+Zy8+Zx8+Zx8+Zxy+Zxy+Zx8+Zx8+Zz0+ZzC+ZzC+ZzK+ZxM+ZzM+ZzC+ZxS+Zxi+ZyS+ZyS+Zzy+ZxC+ZzG+ZzG+ZzM+ZzO+ZzK+ZxS+ZzK+ZyS+ZxS+Zx8+Zx8+ZyS+ZzG+ZzM+ZzM+ZzK+ZzK+ZzM+ZzG+ZzG+ZzG+ZzM+ZzK+ZzK+ZzK+ZzM+ZzM+ZzK+ZzM+ZzM+ZzK+ZzK+ZzM+ZzG+ZzG+ZzK+ZzM+ZzO+ZzK+ZzG+ZzC+ZzK+ZzM+ZzM+ZzK+ZzS+Zy8+Zx8+Zz8+Zzy+Zxy+ZzG+ZzK+ZzS+ZzG+ZzK+ZzM+ZzM+ZzO+ZzO+ZzG+ZzM+ZzK+ZzK+ZzK+ZzS+ZzC+ZzG+ZzK+ZzK+ZzK+ZzK+ZzM+ZzG+ZzK+ZzK+ZzS+ZzM+ZzM+ZzS+ZzK+ZzC+ZzG+ZzS+ZzK+ZzK+ZzS+ZzS+ZzK+ZzK+ZzK+ZzG+ZzK+ZzS+ZzK+ZzM+ZzM+ZzM+ZzM+ZzM+ZzK+ZzM+ZzS+ZzC+ZzS+ZzS+ZzK+ZzK+ZzM+ZzM+ZzS+ZzK+ZzK+ZzM+ZzM+ZzK+ZzK+ZzS+ZzC+ZzS+ZzS+ZzK+ZzK+ZzS+ZzK+ZzM+ZzM+ZzK+ZzC+ZzM+ZzS+ZzK+ZzC+ZzM+ZzS+ZzM+ZzS+ZzM+ZzM+ZzS+ZzM+ZzM+ZzS+ZzC+ZzS+ZzK+ZzK+ZzM+ZzM+ZzM+ZzS+ZzM+ZzM+ZzC+ZzS+ZzK+ZzC+ZzM+ZzM+ZzM+ZzK+ZzS+ZzM+ZzM+ZzM+ZzS+ZzK+ZzM+ZzM+ZzM+ZzC+ZzS+ZzK+ZzM+ZzM+ZzM+ZzS+ZzS+ZzS+ZzC+ZzS+ZzM+ZzM+ZzM+ZzK+ZzM+ZzK+ZzS+ZzM+ZzM+ZzM+ZzS+ZzC+ZzS+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzM+ZzS+ZzS+ZzS+ZzK+ZzC+ZzM+ZzM+ZzM+ZzS+ZzM+ZzM+ZzC+ZzS+ZzS+ZzK+ZzC+ZzM+ZzM+ZzM+ZzM+ZzS+ZzS+ZzS+ZzK+ZzK+ZzS+ZzM+ZzM+ZzC+ZzM+ZzS+ZzM+ZzM+ZzK+ZzS+ZzM+ZzM+ZzM+ZzS+ZzS+ZzS+ZzK+ZzS+ZzS+ZzK+ZzC+ZzK+ZzK+ZzS+ZzK+ZzS+ZzC+ZzS+ZzS+ZzM+ZzM+ZzS+ZzK+ZzM+ZzM+ZzS+ZzK+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzS+ZzC+ZzS+ZzM+ZzM+ZzS+ZzC+ZzK+ZzS+ZzS+ZzM+ZzS+ZzK+ZzC+ZzS+ZzS+ZzM+ZzM+ZzS+ZzC+ZzS+ZzM+ZzM+ZzS+ZzS+ZzS+ZzC+ZzS+ZzS+ZzM+ZzM+ZzS+ZzS+ZzC+ZzS+ZzS+ZzM+ZzM+ZzS+ZzS+ZzS+ZzC+ZzS+ZzS+ZzM+ZzM+ZzM+ZzS+ZzS+ZzC+ZzS+ZzM+ZzM+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzM+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzM+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzM+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzM+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzM+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzM+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzS+ZzS+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+Z-8";

const Login: React.FC = () => {
    const [activeTab, setActiveTab] = useState<UserRole>(UserRole.STUDENT);
    const [usn, setUsn] = useState('');
    const [teacherId, setTeacherId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login, user, loading } = useAuth();

    useEffect(() => {
        if (!loading && user) {
            const path = user.role === UserRole.STUDENT ? '/student' : '/faculty';
            navigate(path, { replace: true });
        }
    }, [user, loading, navigate]);


    const handleTabClick = (role: UserRole) => {
        setActiveTab(role);
        setError('');
        setUsn('');
        setTeacherId('');
        setPassword('');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        const id = activeTab === UserRole.STUDENT ? usn : teacherId;
        
        const success = login(activeTab, id, password);
        
        if (success) {
            const path = activeTab === UserRole.STUDENT ? '/student' : '/faculty';
            navigate(path, { replace: true });
        } else {
            setError('Invalid credentials. Please check your ID and password.');
        }
    };

    if (loading) {
        return <div className="flex h-screen items-center justify-center">Loading...</div>;
    }
    
    return (
        <div className="min-h-screen bg-light flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-8">
                <div className="text-center">
                    <img src={bldeaLogo} alt="BLDEA Logo" className="mx-auto h-20 w-auto" />
                    <h1 className="mt-4 text-3xl font-extrabold text-primary">Ed-Portal</h1>
                    <p className="mt-2 text-sm text-gray-600">Your one-stop solution for campus life.</p>
                </div>

                <div>
                    <div className="flex border-b border-gray-200">
                        <button
                            onClick={() => handleTabClick(UserRole.STUDENT)}
                            className={`w-1/2 py-3 text-sm font-semibold transition-colors focus:outline-none ${activeTab === UserRole.STUDENT ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            Student
                        </button>
                        <button
                            onClick={() => handleTabClick(UserRole.FACULTY)}
                            className={`w-1/2 py-3 text-sm font-semibold transition-colors focus:outline-none ${activeTab === UserRole.FACULTY ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            Faculty
                        </button>
                    </div>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {activeTab === UserRole.STUDENT ? (
                        <div>
                            <label htmlFor="usn" className="sr-only">USN</label>
                            <input
                                id="usn"
                                name="usn"
                                type="text"
                                required
                                value={usn}
                                onChange={(e) => setUsn(e.target.value)}
                                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                placeholder="Enter your USN (e.g., 1BL19CS001)"
                            />
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="teacherId" className="sr-only">Teacher ID</label>
                                <input
                                    id="teacherId"
                                    name="teacherId"
                                    type="text"
                                    required
                                    value={teacherId}
                                    onChange={(e) => setTeacherId(e.target.value)}
                                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                    placeholder="Enter your Teacher ID (e.g., T001)"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                    )}

                    {error && <p className="text-sm text-red-600 text-center">{error}</p>}

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
