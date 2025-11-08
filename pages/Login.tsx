import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { UserRole } from '../types';

const bldeaLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAfASURBVHhe7Z1/aFRlGMe/s5tQpCF2JUSwCxVBwbQUS62I4B/bELU/YlsxxRIrU21xK1gKWzFBIVZpkyIpsVRsCFZp1dYqK7VgFbLRIrYQUVZBwd2f3Hve3b33vLvvvZv3+8DAu+fevffNfN/7Pffcew+RkZGRkZGRkZGRkZGRkZGRkZFhL1V62+z/wL0L9d4d5FvWd/yF/yK9/1h7P+H9D6f6WwY5NfT5/8n7b/S3D/Jr13sX6i0Hyr2P5FvXv/D/j4/y713s/8T7n8e0ZxmR0ttr5/pP7X0P5v+a/r/t/83rO/X+0/b+q/k9tff88/yedv8kPz/s37vY/5P13g/8v2r1b9f7t+b7d8b7N/m9S/m+pftb+T3C999e97e2+2fH+zfk+/fM97/3/L+D1V7n/r9V/N7f9P9g/z+y/tP9fe19v7G+9/V7x8a7f+Z9/9Ivb/w/u/o91+v96+U73+Q718b7d9V75+V7/+A/y+1/2T9/1F/32L//0N+P+z/R/r+e/r+t/n+g/x+S//+r/n+7+z9jfr+5/a+R//+S//+y3x/1qBHPX0EwJgR3z0g33/p71ft/8X7v93rL/X3D/L7a+v9j/r7p/z+mv7+Y34/of//zN9P7b/X3v+43l+V75+y9z/k+yfs/cft/Yz+vmX//zF/P7f/L/X+7e19qN4/Ue8/p+9v2vtQvf+sfn+t3n+C/j+s37/J73+c7/+Yv/+h3r+u3r9V7/8p938a9b5FvZ+g37+r37+G/n8N/P4M/PwU/f/g3t+E8B8JYKQI3yMg+p4BfF8H+F4B8b0B8b0D8L0E8L0C4vscxPftgO93AN9vAr5vI3zfTvh+K/D9JuD7DsD3W4DvdwG/b/d8f0A4vgMwfAfh+DbC8e2C43sCx3cEjh8LHJ8bOH4scXwe4Ph8wPF5g+PzFsfnDY7PZxifzzI+n2N8Psf4fI7x+Zzk+ZzG+ZzM+ZxM+ZzC+ZxS+Zwy+Zwi+ZyC+ZyK+ZyS+ZyM+ZyO+Zyc+Zyc+Zx8+Zx0+Zx6+ZzK+ZxC+ZzG+ZzC+ZzK+ZxS+ZxS+Zzi+Zzi+Zzy+Zzy+ZzM+ZzO+ZzM+ZzM+ZzM+ZzM+ZzM+ZzK+Zyi+ZxS+Zy8+Zx8+Zx8+Zxy+Zxy+Zx8+Zx8+Zz0+ZzC+ZzC+ZzK+ZxM+ZzM+ZzC+ZxS+Zxi+ZyS+ZyS+Zzy+ZxC+ZzG+ZzG+ZzM+ZzO+ZzK+ZxS+ZzK+ZyS+ZxS+Zx8+Zx8+ZyS+ZzG+ZzM+ZzM+ZzK+ZzK+ZzM+ZzG+ZzG+ZzG+ZzK+ZzK+ZzK+ZzK+ZzK+ZzK+ZzG+ZzK+ZzK+ZzK+ZzK+ZzG+ZzG+ZzG+ZzK+ZzM+ZzM+ZzM+ZzO+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+ZzM+AIA/4e4f+gAAAABJRU5ErkJggg==";

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
        <div className="min-h-screen bg-light flex flex-col justify-center items-center p-4">
            <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8">
                <div className="text-center mb-8">
                    <img src={bldeaLogo} alt="BLDEACET Logo" className="w-24 h-24 mx-auto mb-6" />
                    <h1 className="text-xl font-bold text-dark leading-tight">
                        BLDEA’s V.P. Dr. P.G. Halakatti College of Engineering & Technology, Vijayapura
                    </h1>
                    <p className="text-gray-500 mt-2">Welcome to the Ed-Portal</p>
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

                <div className="mt-6 p-4 bg-light rounded-lg border border-gray-200 text-sm">
                    <h3 className="font-bold text-center mb-2 text-dark">Demo Credentials</h3>
                    <div className="text-gray-600">
                        <p className="font-semibold">Student:</p>
                        <p className="ml-2"><strong>USN:</strong> 1BI19CS001</p>
                        <p className="font-semibold mt-2">Faculty:</p>
                        <p className="ml-2"><strong>ID:</strong> TCS01</p>
                        <p className="ml-2"><strong>Password:</strong> password123</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;