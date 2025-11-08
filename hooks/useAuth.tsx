import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppUser, UserRole, StudentProfile, FacultyProfile } from '../types';
import { MOCK_STUDENTS, MOCK_FACULTY } from '../constants';

interface AuthContextType {
    user: AppUser | null;
    loading: boolean;
    login: (role: UserRole, id: string, password?: string) => boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<AppUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.error('Failed to parse user from localStorage', error);
            localStorage.removeItem('user');
        } finally {
            setLoading(false);
        }
    }, []);

    const login = (role: UserRole, id: string, password?: string): boolean => {
        setLoading(true);
        let foundUser: AppUser | null = null;

        if (role === UserRole.STUDENT) {
            foundUser = MOCK_STUDENTS.find(student => student.usn.toLowerCase() === id.toLowerCase()) || null;
        } else if (role === UserRole.FACULTY) {
            foundUser = MOCK_FACULTY.find(faculty => faculty.teacherId === id && faculty.password === password) || null;
        }

        if (foundUser) {
            localStorage.setItem('user', JSON.stringify(foundUser));
            setUser(foundUser);
            setLoading(false);
            return true;
        }

        setLoading(false);
        return false;
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
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