// types.ts: Defines all shared data structures for the application.

export enum UserRole {
    STUDENT = 'student',
    FACULTY = 'faculty',
}

export interface AppUser {
    id: string;
    name: string;
    role: UserRole;
    avatar: string;
}

export interface StudentProfile extends AppUser {
    role: UserRole.STUDENT;
    usn: string;
    course: string;
    batch: string;
    cgpaData: CgpaData[];
    attendance: number;
    assessments: InternalAssessment[];
    cgpa?: number;
}

export interface FacultyProfile extends AppUser {
    role: UserRole.FACULTY;
    teacherId: string;
    department: string;
}

export interface UpcomingEvent {
    id: string;
    title: string;
    date: string;
    color: string;
}

export interface CgpaData {
    semester: string;
    cgpa: number;
}

export interface Notification {
    id: number;
    message: string;
    time: string;
    read: boolean;
}

export interface InternalAssessment {
    id: string;
    subject: string;
    type: string;
    score: number;
    maxScore: number;
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
    studentName: string;
    studentUsn: string;
    studentAvatar: string;
    submissionDate: string;
    status: 'Submitted' | 'Late' | 'Not Submitted';
    grade: number | null;
}

export interface TeacherFeedback {
  id: string;
  teacherName: string;
  studentUsn: string;
  date: string;
  ratings: { question: string; rating: number }[];
  comments: string;
}
