export enum UserRole {
    STUDENT = 'student',
    FACULTY = 'faculty',
}

export interface CgpaData {
    semester: string;
    cgpa: number;
}

export interface Attendance {
    subject: string;
    total: number;
    attended: number;
}

export interface InternalAssessment {
    id: string;
    subject: string;
    score: number;
    maxScore: number;
    type: 'Quiz' | 'Mid-Term' | 'Assignment';
}

export interface StudentProfile {
    role: UserRole.STUDENT;
    usn: string;
    name: string;
    avatar: string;
    course: string;
    semester: number;
    batch: string;
    cgpa: number;
    email?: string;
    phone?: string;
    address?: string;
    cgpaHistory: CgpaData[];
    attendance: Attendance[];
    assessments: InternalAssessment[];
}

export interface FacultyProfile {
    role: UserRole.FACULTY;
    teacherId: string;
    name:string;
    avatar: string;
    password?: string;
    email?: string;
}

export type AppUser = StudentProfile | FacultyProfile;

export interface UpcomingEvent {
    id: string;
    title: string;
    date: string;
    color: string;
}

export interface Notification {
    id: string;
    message: string;
    time: string;
    read: boolean;
}

export interface TimetableEntry {
    time: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
}

export interface Course {
    id: string;
    name: string;
    code: string;
    credits: number;
    faculty: string;
}

export interface Assignment {
    id: string;
    title: string;
    courseId: string;
    courseName: string;
    instructions: string;
    dueDate: string;
    totalPoints: number;
}

export interface Submission {
    id: string;
    assignmentId: string;
    studentUsn: string;
    studentName: string;
    studentAvatar: string;
    submissionDate: string;
    status: 'Submitted' | 'Late' | 'Not Submitted';
    grade: number | null;
}

export interface ChatMessage {
    id: number;
    senderId: string; // usn or teacherId
    receiverId: string;
    text: string;
    timestamp: string;
    senderName: string;
    senderAvatar: string;
}

export interface TeacherFeedback {
    id: string;
    teacherName: string;
    studentUsn: string;
    ratings: { question: string; rating: number }[];
    comments: string;
    date: string;
}