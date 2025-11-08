import { StudentProfile, FacultyProfile, UserRole, UpcomingEvent, Notification, TimetableEntry, Course, Assignment, Submission, ChatMessage, TeacherFeedback } from './types';

const mockCgpaHistory = [
    { semester: 'Sem 1', cgpa: 8.5 },
    { semester: 'Sem 2', cgpa: 8.8 },
    { semester: 'Sem 3', cgpa: 9.1 },
    { semester: 'Sem 4', cgpa: 9.0 },
    { semester: 'Sem 5', cgpa: 9.3 },
];

const mockAttendance = [
    { subject: 'Data Structures', total: 50, attended: 45 },
    { subject: 'Algorithms', total: 50, attended: 48 },
    { subject: 'Database Systems', total: 50, attended: 42 },
    { subject: 'Operating Systems', total: 50, attended: 49 },
];

const mockAssessments = [
    { id: 'ia1', subject: 'Data Structures', score: 85, maxScore: 100, type: 'Mid-Term' as const },
    { id: 'ia2', subject: 'Algorithms', score: 92, maxScore: 100, type: 'Mid-Term' as const },
    { id: 'ia3', subject: 'Database Systems', score: 78, maxScore: 100, type: 'Mid-Term' as const },
];

export const MOCK_STUDENTS: StudentProfile[] = [
    {
        role: UserRole.STUDENT,
        usn: '1BI19CS001',
        name: 'Alex Johnson',
        avatar: 'https://i.pravatar.cc/150?u=alex',
        course: 'Computer Science',
        semester: 6,
        batch: '2019-2023',
        cgpa: 9.2,
        cgpaHistory: mockCgpaHistory,
        attendance: mockAttendance,
        assessments: mockAssessments,
    },
    {
        role: UserRole.STUDENT,
        usn: '1BI19CS002',
        name: 'Maria Garcia',
        avatar: 'https://i.pravatar.cc/150?u=maria',
        course: 'Computer Science',
        semester: 6,
        batch: '2019-2023',
        cgpa: 8.9,
        cgpaHistory: mockCgpaHistory.map(item => ({ ...item, cgpa: item.cgpa - 0.3 })),
        attendance: mockAttendance.map(item => ({ ...item, attended: item.attended - 2 })),
        assessments: mockAssessments.map(item => ({...item, score: item.score - 5})),
    }
];

export const MOCK_FACULTY: FacultyProfile[] = [
    {
        role: UserRole.FACULTY,
        teacherId: 'TCS01',
        name: 'Dr. Evelyn Reed',
        avatar: 'https://i.pravatar.cc/150?u=evelyn',
        password: 'password123',
    },
     {
        role: UserRole.FACULTY,
        teacherId: 'TCS02',
        name: 'Prof. Samuel Green',
        avatar: 'https://i.pravatar.cc/150?u=samuel',
        password: 'password123',
    }
];

export const MOCK_UPCOMING_EVENTS: UpcomingEvent[] = [
    { id: '1', title: 'Mid-term Exams', date: '2024-08-15', color: 'bg-red-500' },
    { id: '2', title: 'Project Submission', date: '2024-08-20', color: 'bg-blue-500' },
    { id: '3', title: 'Tech Fest "Innovate"', date: '2024-09-05', color: 'bg-green-500' },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
    { id: '1', message: 'Your fees for the next semester are due.', time: '2 hours ago', read: false },
    { id: '2', message: 'Results for DSA mid-term are out.', time: '1 day ago', read: false },
    { id: '3', message: 'Library book "Clean Code" is due for return.', time: '3 days ago', read: true },
];

export const MOCK_TIMETABLE: TimetableEntry[] = [
    { time: '09:00 - 10:00', monday: 'DSA', tuesday: 'OS', wednesday: 'DBMS', thursday: 'Algo', friday: 'Maths' },
    { time: '10:00 - 11:00', monday: 'OS', tuesday: 'DBMS', wednesday: 'Algo', thursday: 'Maths', friday: 'DSA' },
    { time: '11:00 - 12:00', monday: 'DBMS', tuesday: 'Algo', wednesday: 'Maths', thursday: 'DSA', friday: 'OS' },
    { time: '12:00 - 01:00', monday: 'Break', tuesday: 'Break', wednesday: 'Break', thursday: 'Break', friday: 'Break' },
    { time: '01:00 - 02:00', monday: 'Lab', tuesday: 'Lab', wednesday: 'Lab', thursday: 'Lab', friday: 'Lab' },
];

export const MOCK_COURSES: Course[] = [
    { id: 'cs101', name: 'Data Structures', code: 'CS101', credits: 4, faculty: 'Dr. Evelyn Reed' },
    { id: 'cs102', name: 'Algorithms', code: 'CS102', credits: 4, faculty: 'Prof. Samuel Green' },
    { id: 'cs103', name: 'Database Systems', code: 'CS103', credits: 3, faculty: 'Dr. Evelyn Reed' },
];

export const MOCK_ASSIGNMENTS: Assignment[] = [
    { id: 'asg1', title: 'Binary Search Tree Implementation', courseId: 'cs101', courseName: 'Data Structures', instructions: 'Implement a fully functional BST with insert, delete, and search operations.', dueDate: '2024-09-15', totalPoints: 100 },
    { id: 'asg2', title: 'Sorting Algorithms Comparison', courseId: 'cs102', courseName: 'Algorithms', instructions: 'Analyze and compare the performance of 5 different sorting algorithms.', dueDate: '2024-09-20', totalPoints: 100 },
];

export const MOCK_SUBMISSIONS: Submission[] = [
    { id: 'sub1', assignmentId: 'asg1', studentUsn: '1BI19CS001', studentName: 'Alex Johnson', studentAvatar: 'https://i.pravatar.cc/150?u=alex', submissionDate: '2024-09-14', status: 'Submitted', grade: 92 },
    { id: 'sub2', assignmentId: 'asg1', studentUsn: '1BI19CS002', studentName: 'Maria Garcia', studentAvatar: 'https://i.pravatar.cc/150?u=maria', submissionDate: '2024-09-16', status: 'Late', grade: 85 },
    { id: 'sub3', assignmentId: 'asg2', studentUsn: '1BI19CS001', studentName: 'Alex Johnson', studentAvatar: 'https://i.pravatar.cc/150?u=alex', submissionDate: '2024-09-19', status: 'Submitted', grade: null },
];


export const MOCK_CHAT_MESSAGES: ChatMessage[] = [
    { id: 1, senderId: '1BI19CS001', receiverId: 'TCS01', text: 'Hello Dr. Reed, I had a question about the last lecture.', timestamp: '10:30 AM', senderName: 'Alex Johnson', senderAvatar: 'https://i.pravatar.cc/150?u=alex' },
    { id: 2, senderId: 'TCS01', receiverId: '1BI19CS001', text: 'Hi Alex, of course. What would you like to know?', timestamp: '10:31 AM', senderName: 'Dr. Evelyn Reed', senderAvatar: 'https://i.pravatar.cc/150?u=evelyn' },
    { id: 3, senderId: '1BI19CS001', receiverId: 'TCS01', text: 'Regarding the complexity of binary search trees, can you clarify the worst-case scenario?', timestamp: '10:32 AM', senderName: 'Alex Johnson', senderAvatar: 'https://i.pravatar.cc/150?u=alex' },
    { id: 4, senderId: '1BI19CS002', receiverId: 'TCS02', text: 'Good morning, Professor Green.', timestamp: '11:00 AM', senderName: 'Maria Garcia', senderAvatar: 'https://i.pravatar.cc/150?u=maria' },
];

export const feedbackQuestions = [
    "The teacher explains concepts clearly.",
    "The teacher is well-prepared for classes.",
    "The teacher is engaging and encourages participation.",
    "The teacher is approachable and helpful.",
    "The course materials provided are useful.",
    "The assessments are fair and relevant to the course content.",
    "The teacher provides timely and constructive feedback.",
    "The teacher manages class time effectively.",
    "The teacher shows enthusiasm for the subject.",
    "Overall, I am satisfied with the quality of teaching."
];

export const MOCK_TEACHER_FEEDBACK: TeacherFeedback[] = [
    {
        id: 'fb1',
        teacherName: 'Dr. Evelyn Reed',
        studentUsn: '1BI19CS001',
        ratings: [
            { question: feedbackQuestions[0], rating: 5 },
            { question: feedbackQuestions[1], rating: 5 },
            { question: feedbackQuestions[2], rating: 4 },
        ],
        comments: 'Dr. Reed is fantastic! Her examples are very clear and she is always willing to help after class. The data structures course is challenging but she makes it manageable.',
        date: '2024-07-20'
    },
    {
        id: 'fb2',
        teacherName: 'Dr. Evelyn Reed',
        studentUsn: '1BI19CS002',
        ratings: [
             { question: feedbackQuestions[0], rating: 4 },
             { question: feedbackQuestions[1], rating: 5 },
        ],
        comments: 'Very knowledgeable, but sometimes moves a bit too fast through the material.',
        date: '2024-07-21'
    },
    {
        id: 'fb3',
        teacherName: 'Prof. Samuel Green',
        studentUsn: '1BI19CS001',
        ratings: [
             { question: feedbackQuestions[0], rating: 4 },
        ],
        comments: 'Good professor, very passionate about algorithms.',
        date: '2024-07-22'
    }
];