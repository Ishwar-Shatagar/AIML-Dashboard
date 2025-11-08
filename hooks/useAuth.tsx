import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppUser, FacultyProfile, StudentProfile, UserRole } from '../types';
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
            const storedUser = localStorage.getItem('lms-user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.error("Failed to parse user from localStorage", error);
            localStorage.removeItem('lms-user');
        } finally {
            setLoading(false);
        }
    }, []);

    const login = (role: UserRole, id: string, password?: string): boolean => {
        let foundUser: StudentProfile | FacultyProfile | undefined;

        if (role === UserRole.STUDENT) {
            foundUser = MOCK_STUDENTS.find(student => student.usn.toLowerCase() === id.toLowerCase());
        } else if (role === UserRole.FACULTY) {
            foundUser = MOCK_FACULTY.find(faculty => faculty.teacherId.toLowerCase() === id.toLowerCase() && faculty.password === password);
        }

        if (foundUser) {
            // Ensure we create a fresh object without the password for security/consistency
            const userToStore = { ...foundUser };
            if ('password' in userToStore) {
                delete userToStore.password;
            }

            setUser(userToStore);
            localStorage.setItem('lms-user', JSON.stringify(userToStore));
            return true;
        }

        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('lms-user');
        // Optionally navigate to login page
        window.location.href = '/login';
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
