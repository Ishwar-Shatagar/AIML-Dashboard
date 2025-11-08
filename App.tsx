import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth';
import Login from './pages/Login';
import DashboardLayout from './components/DashboardLayout';
import StudentDashboard from './pages/StudentDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import StudentInfo from './pages/StudentInfo';
import Gradebook from './pages/Gradebook';
import Timetable from './pages/Timetable';
import Chat from './pages/Chat';
import Feedback from './pages/Feedback';
import StudentManagement from './pages/StudentManagement';
import CourseManagement from './pages/CourseManagement';
import AssignmentManagement from './pages/AssignmentManagement';
import SubmissionView from './pages/SubmissionView';
import FacultyExamCreate from './pages/FacultyExamCreate';
import PlaceholderPage from './pages/PlaceholderPage';
import NotFound from './pages/NotFound';
import { UserRole } from './types';
import FacultyFeedbackView from './pages/FacultyFeedbackView';
import ManageProfile from './pages/ManageProfile';

const ProtectedRoute: React.FC<{ allowedRoles: UserRole[] }> = ({ allowedRoles }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div className="flex h-screen items-center justify-center">Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (!allowedRoles.includes(user.role)) {
        const dashboardPath = user.role === UserRole.STUDENT ? '/student' : '/faculty';
        return <Navigate to={dashboardPath} replace />;
    }

    return <DashboardLayout />;
};

const AppRoutes: React.FC = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div className="flex h-screen items-center justify-center">Loading...</div>;
    }

    const defaultRoute = user ? (user.role === UserRole.STUDENT ? '/student' : '/faculty') : '/login';

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            
            {/* Student Routes */}
            <Route element={<ProtectedRoute allowedRoles={[UserRole.STUDENT]} />}>
                <Route path="student" element={<StudentDashboard />} />
                <Route path="student/info" element={<StudentInfo />} />
                <Route path="student/gradebook" element={<Gradebook />} />
                <Route path="student/timetable" element={<Timetable />} />
                <Route path="student/chat" element={<Chat />} />
                <Route path="student/feedback" element={<Feedback />} />
                <Route path="student/manage" element={<ManageProfile />} />
            </Route>

            {/* Faculty Routes */}
            <Route element={<ProtectedRoute allowedRoles={[UserRole.FACULTY]} />}>
                <Route path="faculty" element={<FacultyDashboard />} />
                <Route path="faculty/students" element={<StudentManagement />} />
                <Route path="faculty/courses" element={<CourseManagement />} />
                <Route path="faculty/assignments" element={<AssignmentManagement />} />
                <Route path="faculty/assignments/:assignmentId/submissions" element={<SubmissionView />} />
                <Route path="faculty/exams/create" element={<FacultyExamCreate />} />
                <Route path="faculty/reports" element={<PlaceholderPage title="Reports" />} />
                <Route path="faculty/chat" element={<Chat />} />
                <Route path="faculty/feedback" element={<FacultyFeedbackView />} />
                <Route path="faculty/manage" element={<ManageProfile />} />
            </Route>
            
            <Route path="/" element={<Navigate to={defaultRoute} replace />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

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