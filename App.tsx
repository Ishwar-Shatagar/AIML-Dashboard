import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth';
import DashboardLayout from './components/DashboardLayout';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import NotFound from './pages/NotFound';
import { UserRole } from './types';
import Timetable from './pages/Timetable';
import Gradebook from './pages/Gradebook';
import Feedback from './pages/Feedback';
import ManageProfile from './pages/ManageProfile';
import Attendance from './pages/Attendance';
import PlaceholderPage from './pages/PlaceholderPage';
import CourseManagement from './pages/CourseManagement';
import StudentManagement from './pages/StudentManagement';
import FacultyExamCreate from './pages/FacultyExamCreate';
import FacultyFeedbackView from './pages/FacultyFeedbackView';
import AssignmentManagement from './pages/AssignmentManagement';
import SubmissionView from './pages/SubmissionView';
import Chat from './pages/Chat';
import StudentInfo from './pages/StudentInfo';

const ProtectedRoute: React.FC<{ allowedRoles: UserRole[], children?: ReactNode }> = ({ allowedRoles, children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div className="flex h-screen items-center justify-center">Loading...</div>; // Or a spinner component
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (!allowedRoles.includes(user.role)) {
        // Redirect to a 'not authorized' page or home
        return <Navigate to="/" replace />;
    }
    
    return children ? <>{children}</> : <Outlet />;
};

const AppRoutes: React.FC = () => {
    const { user, loading } = useAuth();
    
    if (loading) {
        return <div className="flex h-screen items-center justify-center">Loading...</div>; // Or a spinner component
    }

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route path="/" element={
                !user ? <Navigate to="/login" /> : (user.role === UserRole.STUDENT ? <Navigate to="/student/dashboard" /> : <Navigate to="/faculty/dashboard" />)
            } />
            
            {/* Student Routes */}
            <Route element={<ProtectedRoute allowedRoles={[UserRole.STUDENT]} />}>
                <Route path="/student" element={<DashboardLayout />}>
                    <Route path="dashboard" element={<StudentDashboard />} />
                    <Route path="timetable" element={<Timetable />} />
                    <Route path="attendance" element={<Attendance />} />
                    <Route path="gradebook" element={<Gradebook />} />
                    <Route path="feedback" element={<Feedback />} />
                    <Route path="profile" element={<ManageProfile />} />
                    <Route path="chat" element={<Chat />} />
                    <Route path="info" element={<StudentInfo />} />
                </Route>
            </Route>

            {/* Faculty Routes */}
            <Route element={<ProtectedRoute allowedRoles={[UserRole.FACULTY]} />}>
                <Route path="/faculty" element={<DashboardLayout />}>
                    <Route path="dashboard" element={<FacultyDashboard />} />
                    <Route path="students" element={<StudentManagement />} />
                    <Route path="courses" element={<CourseManagement />} />
                    <Route path="assignments" element={<AssignmentManagement />} />
                    <Route path="assignments/:assignmentId/submissions" element={<SubmissionView />} />
                    <Route path="exams/create" element={<FacultyExamCreate />} />
                    <Route path="feedback" element={<FacultyFeedbackView />} />
                    <Route path="profile" element={<ManageProfile />} />
                    <Route path="timetable" element={<Timetable />} />
                </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <AppRoutes />
            </Router>
        </AuthProvider>
    );
};

export default App;
