// constants.ts: Provides all mock data for the application.
import { StudentProfile, FacultyProfile, UserRole, UpcomingEvent, Course, Assignment, Submission, Notification, TeacherFeedback } from './types';

export const MOCK_STUDENTS: StudentProfile[] = [
    {
        id: 'stud1',
        name: 'Alice Johnson',
        role: UserRole.STUDENT,
        avatar: 'https://i.pravatar.cc/150?u=alice',
        usn: '1BI19CS001',
        course: 'Computer Science',
        batch: '2019-2023',
        cgpa: 8.75,
        cgpaData: [
            { semester: 'S1', cgpa: 8.5 },
            { semester: 'S2', cgpa: 8.6 },
            { semester: 'S3', cgpa: 8.9 },
            { semester: 'S4', cgpa: 8.7 },
            { semester: 'S5', cgpa: 9.0 },
            { semester: 'S6', cgpa: 8.8 },
        ],
        attendance: 92,
        assessments: [
            { id: 'ia1_cs101', subject: 'Data Structures', type: 'Internal Test 1', score: 25, maxScore: 30 },
            { id: 'ia2_cs101', subject: 'Data Structures', type: 'Internal Test 2', score: 28, maxScore: 30 },
            { id: 'ia1_cs102', subject: 'Algorithms', type: 'Internal Test 1', score: 22, maxScore: 30 },
            { id: 'ia2_cs102', subject: 'Algorithms', type: 'Internal Test 2', score: 26, maxScore: 30 },
            { id: 'ia1_cs103', subject: 'Database Systems', type: 'Internal Test 1', score: 29, maxScore: 30 },
        ],
    },
    {
        id: 'stud2',
        name: 'Bob Brown',
        role: UserRole.STUDENT,
        avatar: 'https://i.pravatar.cc/150?u=bob',
        usn: '1BI19CS002',
        course: 'Computer Science',
        batch: '2019-2023',
        cgpa: 8.20,
        cgpaData: [
             { semester: 'S1', cgpa: 8.1 },
            { semester: 'S2', cgpa: 8.3 },
            { semester: 'S3', cgpa: 8.0 },
            { semester: 'S4', cgpa: 8.2 },
            { semester: 'S5', cgpa: 8.5 },
            { semester: 'S6', cgpa: 8.1 },
        ],
        attendance: 85,
        assessments: [
             { id: 'ia1_cs101_bob', subject: 'Data Structures', type: 'Internal Test 1', score: 22, maxScore: 30 },
            { id: 'ia2_cs101_bob', subject: 'Data Structures', type: 'Internal Test 2', score: 25, maxScore: 30 },
        ],
    },
];

export const MOCK_FACULTY: (FacultyProfile & { password?: string })[] = [
    {
        id: 'fac1',
        name: 'Dr. Robert Smith',
        role: UserRole.FACULTY,
        avatar: 'https://i.pravatar.cc/150?u=robert',
        teacherId: 'TCS01',
        department: 'Computer Science',
        password: 'password123',
    },
    {
        id: 'fac2',
        name: 'Prof. Emily White',
        role: UserRole.FACULTY,
        avatar: 'https://i.pravatar.cc/150?u=emily',
        teacherId: 'TCS02',
        department: 'Computer Science',
        password: 'password123',
    },
];

export const MOCK_UPCOMING_EVENTS: UpcomingEvent[] = [
    { id: 'evt1', title: 'Mid-Term Exams Start', date: '2023-10-25', color: 'bg-red-500' },
    { id: 'evt2', title: 'Project Submission Deadline', date: '2023-11-15', color: 'bg-blue-500' },
    { id: 'evt3', title: 'Tech Fest "Innovate 2023"', date: '2023-11-20', color: 'bg-green-500' },
];

export const MOCK_COURSES: Course[] = [
    { id: 'cs101', name: 'Data Structures', code: '18CS32', credits: 4, faculty: 'Dr. Robert Smith' },
    { id: 'cs102', name: 'Algorithms', code: '18CS33', credits: 4, faculty: 'Dr. Robert Smith' },
    { id: 'cs103', name: 'Database Systems', code: '18CS34', credits: 3, faculty: 'Prof. Emily White' },
];

export const MOCK_ASSIGNMENTS: Assignment[] = [
    { id: 'asg1', title: 'Linked List Implementation', courseId: 'cs101', courseName: 'Data Structures', instructions: 'Implement a doubly linked list with insert, delete, and search operations.', dueDate: '2023-11-10', totalPoints: 100 },
    { id: 'asg2', title: 'Binary Search Tree', courseId: 'cs102', courseName: 'Algorithms', instructions: 'Implement a BST and its traversal methods.', dueDate: '2023-11-18', totalPoints: 100 },
];

export const MOCK_SUBMISSIONS: Submission[] = [
    { id: 'sub1', assignmentId: 'asg1', studentName: 'Alice Johnson', studentUsn: '1BI19CS001', studentAvatar: 'https://i.pravatar.cc/150?u=alice', submissionDate: '2023-11-09', status: 'Submitted', grade: 90 },
    { id: 'sub2', assignmentId: 'asg1', studentName: 'Bob Brown', studentUsn: '1BI19CS002', studentAvatar: 'https://i.pravatar.cc/150?u=bob', submissionDate: '2023-11-11', status: 'Late', grade: 75 },
    { id: 'sub3', assignmentId: 'asg2', studentName: 'Alice Johnson', studentUsn: '1BI19CS001', studentAvatar: 'https://i.pravatar.cc/150?u=alice', submissionDate: '2023-11-17', status: 'Submitted', grade: null },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
    { id: 1, message: 'New assignment "Linked List Implementation" has been posted for Data Structures.', time: '2 hours ago', read: false },
    { id: 2, message: 'Your fee payment for this semester is due.', time: '1 day ago', read: false },
    { id: 3, message: 'Results for Internal Test 1 have been published.', time: '3 days ago', read: true },
];

export const feedbackQuestions = [
    'Clarity of explanation',
    'Pace of teaching',
    'Engagement with students',
    'Availability for doubts',
];

export const MOCK_TEACHER_FEEDBACK: TeacherFeedback[] = [
    {
        id: 'fb1',
        teacherName: 'Dr. Robert Smith',
        studentUsn: '1BI19CS001',
        date: '2023-09-15',
        ratings: [
            { question: 'Clarity of explanation', rating: 5 },
            { question: 'Pace of teaching', rating: 4 },
            { question: 'Engagement with students', rating: 5 },
            { question: 'Availability for doubts', rating: 4 },
        ],
        comments: 'Excellent teaching style, very clear concepts. The real-world examples are very helpful.'
    },
     {
        id: 'fb2',
        teacherName: 'Prof. Emily White',
        studentUsn: '1BI19CS002',
        date: '2023-09-16',
        ratings: [
            { question: 'Clarity of explanation', rating: 4 },
            { question: 'Pace of teaching', rating: 3 },
            { question: 'Engagement with students', rating: 4 },
            { question: 'Availability for doubts', rating: 5 },
        ],
        comments: 'The professor is very approachable and clears doubts patiently. The pace could be a little slower sometimes.'
    }
]
