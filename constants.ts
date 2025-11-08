import { StudentProfile, FacultyProfile, UserRole, UpcomingEvent, Course, Notification, TimetableEntry, Grade, TeacherFeedback, Assignment, Submission, AttendanceRecord } from './types';

export const MOCK_STUDENTS: StudentProfile[] = [
    {
        id: 's1',
        name: 'Alice Johnson',
        email: 'student@test.com',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
        phone: '123-456-7890',
        role: UserRole.STUDENT,
        usn: '1AB19CS001',
        branch: 'Computer Science',
        semester: 5,
        cgpa: 8.75,
        attendance: 92,
    },
];

export const MOCK_FACULTY: FacultyProfile[] = [
    {
        id: 'f1',
        name: 'Dr. Robert Smith',
        email: 'faculty@test.com',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
        phone: '987-654-3210',
        role: UserRole.FACULTY,
        department: 'Computer Science',
        title: 'Professor',
    },
    {
        id: 'f2',
        name: 'Dr. Emily White',
        email: 'emily.white@test.com',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
        phone: '987-654-3211',
        role: UserRole.FACULTY,
        department: 'Computer Science',
        title: 'Associate Professor',
    },
];

export const MOCK_UPCOMING_EVENTS: UpcomingEvent[] = [
    { id: 1, title: 'Mid-term Exams', date: '2023-10-15', color: 'bg-red-500' },
    { id: 2, title: 'Project Submission Deadline', date: '2023-10-20', color: 'bg-yellow-500' },
    { id: 3, title: 'Tech Fest "Innovate"', date: '2023-10-25', color: 'bg-blue-500' },
];

export const MOCK_COURSES: Course[] = [
    { id: 'cs101', name: 'Data Structures', code: 'CS101', credits: 4, faculty: 'Dr. Robert Smith' },
    { id: 'cs102', name: 'Algorithms', code: 'CS102', credits: 4, faculty: 'Dr. Emily White' },
    { id: 'cs103', name: 'Database Systems', code: 'CS103', credits: 3, faculty: 'Dr. Robert Smith' },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
    { id: 1, message: 'Your fee payment is due tomorrow.', time: '1 day ago', read: false },
    { id: 2, message: 'Results for semester 4 are out.', time: '3 days ago', read: true },
    { id: 3, message: 'New assignment added for Data Structures.', time: '5 days ago', read: true },
];

export const MOCK_TIMETABLE: TimetableEntry[] = [
    {
        day: 'Monday',
        periods: [
            { time: '9:00 - 10:00', subject: 'Data Structures', faculty: 'Dr. Robert Smith' },
            { time: '10:00 - 11:00', subject: 'Algorithms', faculty: 'Dr. Emily White' },
            { time: '11:00 - 12:00', subject: 'Database Systems', faculty: 'Dr. Robert Smith' },
        ]
    },
    {
        day: 'Tuesday',
        periods: [
            { time: '10:00 - 11:00', subject: 'Data Structures', faculty: 'Dr. Robert Smith' },
            { time: '11:00 - 12:00', subject: 'Algorithms', faculty: 'Dr. Emily White' },
        ]
    },
    {
        day: 'Wednesday',
        periods: [
            { time: '9:00 - 10:00', subject: 'Database Systems', faculty: 'Dr. Robert Smith' },
        ]
    },
    {
        day: 'Thursday',
        periods: [
             { time: '9:00 - 10:00', subject: 'Data Structures', faculty: 'Dr. Robert Smith' },
            { time: '10:00 - 11:00', subject: 'Algorithms', faculty: 'Dr. Emily White' },
        ]
    },
     {
        day: 'Friday',
        periods: [
            { time: '11:00 - 12:00', subject: 'Database Systems', faculty: 'Dr. Robert Smith' },
        ]
    },
];

export const MOCK_GRADES: Grade[] = [
    { subject: 'Data Structures', subjectCode: 'CS101', internal: 25, external: 65, total: 90, grade: 'S' },
    { subject: 'Algorithms', subjectCode: 'CS102', internal: 22, external: 60, total: 82, grade: 'A' },
    { subject: 'Database Systems', subjectCode: 'CS103', internal: 28, external: 68, total: 96, grade: 'S' },
    { subject: 'Operating Systems', subjectCode: 'CS104', internal: 20, external: 55, total: 75, grade: 'B' },
];

export const feedbackQuestions = [
    'Clarity and understandability of the concepts',
    'Pace of the lectures',
    'Engagement and interaction with students',
    'Quality of course materials and resources',
    'Fairness of assessments and grading',
];

export const MOCK_TEACHER_FEEDBACK: TeacherFeedback[] = [
    {
        id: 1,
        teacherName: 'Dr. Robert Smith',
        studentUsn: '1AB19CS001',
        date: '2023-09-28',
        ratings: [
            { question: feedbackQuestions[0], rating: 5 },
            { question: feedbackQuestions[1], rating: 4 },
            { question: feedbackQuestions[2], rating: 5 },
            { question: feedbackQuestions[3], rating: 4 },
            { question: feedbackQuestions[4], rating: 5 },
        ],
        comments: 'Excellent teaching style, very clear explanations.'
    }
];

export const MOCK_ASSIGNMENTS: Assignment[] = [
    { id: 'as1', title: 'Implement Binary Search Tree', courseName: 'Data Structures', dueDate: '2023-10-20', totalPoints: 100, description: '...' },
    { id: 'as2', title: 'Complexity Analysis', courseName: 'Algorithms', dueDate: '2023-10-22', totalPoints: 50, description: '...' },
];

export const MOCK_SUBMISSIONS: Submission[] = [
    { id: 'sub1', assignmentId: 'as1', studentName: 'Alice Johnson', studentUsn: '1AB19CS001', studentAvatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', submissionDate: '2023-10-19', status: 'Submitted', grade: 95 },
    { id: 'sub2', assignmentId: 'as1', studentName: 'Bob Williams', studentUsn: '1AB19CS002', studentAvatar: 'https://i.pravatar.cc/150?u=a042581f4e29026702d', submissionDate: '2023-10-21', status: 'Late', grade: 80 },
    { id: 'sub3', assignmentId: 'as1', studentName: 'Charlie Brown', studentUsn: '1AB19CS003', studentAvatar: 'https://i.pravatar.cc/150?u=a042581f4e29026703d', submissionDate: '', status: 'Not Submitted', grade: null },
];

export const MOCK_ATTENDANCE: AttendanceRecord[] = [
    { subject: 'Data Structures', subjectCode: 'CS101', attended: 28, total: 30 },
    { subject: 'Algorithms', subjectCode: 'CS102', attended: 25, total: 30 },
    { subject: 'Database Systems', subjectCode: 'CS103', attended: 29, total: 30 },
];
