export enum UserRole {
    STUDENT = 'student',
    FACULTY = 'faculty',
}

export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
    phone: string;
    role: UserRole;
}

export interface StudentProfile extends User {
    role: UserRole.STUDENT;
    usn: string;
    branch: string;
    semester: number;
    cgpa: number;
    attendance: number;
}

export interface FacultyProfile extends User {
    role: UserRole.FACULTY;
    department: string;
    title: string;
}

export interface UpcomingEvent {
    id: number;
    title: string;
    date: string;
    color: string;
}

export interface Course {
    id: string;
    name: string;
    code: string;
    credits: number;
    faculty: string;
}

export interface Notification {
    id: number;
    message: string;
    time: string;
    read: boolean;
}

export interface Period {
    subject: string;
    faculty: string;
    time: string;
}

export interface TimetableEntry {
    day: string;
    periods: Period[];
}

export interface Grade {
    subject: string;
    subjectCode: string;
    internal: number;
    external: number;
    total: number;
    grade: string;
}

export interface FeedbackRating {
    question: string;
    rating: number;
}

export interface TeacherFeedback {
    id: number;
    teacherName: string;
    studentUsn: string;
    date: string;
    ratings: FeedbackRating[];
    comments: string;
}

export interface Assignment {
    id: string;
    title: string;
    courseName: string;
    dueDate: string;
    totalPoints: number;
    description: string;
}

export interface Submission {
    id: string;
    assignmentId: string;
    studentName: string;
    studentUsn: string;
    studentAvatar: string;
    submissionDate: string;
    status: 'Submitted' | 'Late' | 'Not Submitted';
    grade: number | null;
}

export interface AttendanceRecord {
    subject: string;
    subjectCode: string;
    attended: number;
    total: number;
}
