// FIX: Implementing useAuth hook and AuthProvider.
import React, 'react';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserRole, StudentProfile, FacultyProfile } from '../types';
import { MOCK_STUDENTS, MOCK_FACULTY } from '../constants';

type AuthContextType = {
    user: User | null;
    loading: boolean;
    login: (email: string, role: UserRole) => Promise<void>;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.error("Failed to parse user from localStorage", error);
        } finally {
            setLoading(false);
        }
    }, []);

    const login = async (email: string, role: UserRole) => {
        setLoading(true);
        // Simulate API call
        await new Promise(res => setTimeout(res, 500));
        
        let foundUser: StudentProfile | FacultyProfile | undefined;

        if (role === UserRole.STUDENT) {
            foundUser = MOCK_STUDENTS.find(u => u.email.toLowerCase() === email.toLowerCase());
        } else {
            foundUser = MOCK_FACULTY.find(u => u.email.toLowerCase() === email.toLowerCase());
        }
        
        if (foundUser) {
            setUser(foundUser);
            localStorage.setItem('user', JSON.stringify(foundUser));
        } else {
            throw new Error('User not found');
        }
        setLoading(false);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
