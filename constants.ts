// constants.ts: Provides all mock data for the application.
import { StudentProfile, FacultyProfile, UserRole, UpcomingEvent, Course, Assignment, Submission, Notification, TeacherFeedback, TimetableData, InternalAssessment, Activity } from './types';

const defaultAvatar = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIiBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9ImgiNSB3LTUiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIuMjUgMTIuMTI1YzAtNC40MTggMy41ODItOCA4LTguNDE4QTQuMDQ4IDQuMDQ4IDAgMDAxNC41NDYgN2MwIDEuODY2LTEuMjYgMy40MzUtMy4wMTYgMy45MjZhNC4wNDUgNC4wNDUgMCAwMTIuNTEyIDIuNTQ4YzEuNTIzLjQ5NCAyLjYgMS45NTcgMi42IDMuNjYyIDAgMS44NjYtMS4yNiAzLjQzNS0zLjAxNiAzLjkyNnEuMjM1LS4wMjIuNDcxLS4wMjJjNS4yMiAwIDkuNDcyIDQuMjUyIDkuNDcyIDkuNDcycy00LjI1MiA5LjQ3Mi05LjQ3MiA5LjQ3MlM0LjAxOCA1My4zMDYgNC4wMTggNDguMDgzYzAtNS4yMiA0LjI1Mi05LjQ3MiA5LjQ3Mi05LjQ3MnEtLjIzNS4wMjItLjQ3LjAyMmMtMi41MjIgMC00LjU2Ny0yLjA0NS00LjU2Ny00LjU2N3MtMi4wNDUtNC41NjctNC41NjctNC41NjdjLTIuNTIyIDAtNC41NjYgMi4wNDUtNC41NjYgNC41Njd6TTQuMDI4IDIxLjYyNWMwLTMuNTMzIDIuODY1LTYuNDA4IDYuNDA4LTYuNDA4czYuNDA4IDIuODY1IDYuNDA4IDYuNDA4YzAgMy41MzMtMi44NjUgNi40MDgtNi40MDggNi40MDhTNC4wMjggMjUuMTU4IDQuMDI4IDIxLjYyNXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=';


// A single, complete student profile for consistent demos
export const MOCK_STUDENT_USER: StudentProfile = {
    id: 'stud_1',
    name: 'Riya Sharma',
    usn: '1BL19CS001',
    role: UserRole.STUDENT,
    avatar: defaultAvatar,
    course: 'Computer Science & Engineering',
    batch: '2020-2024',
    semester: '7',
    cgpa: 8.9,
    attendance: 92,
    cgpaData: [
        { semester: 'Sem 1', cgpa: 8.2 },
        { semester: 'Sem 2', cgpa: 8.5 },
        { semester: 'Sem 3', cgpa: 8.1 },
        { semester: 'Sem 4', cgpa: 8.6 },
        { semester: 'Sem 5', cgpa: 8.9 },
        { semester: 'Sem 6', cgpa: 9.1 },
    ],
    assessments: [
      { id: 'ia1-ds', subject: 'Data Structures', type: 'Internal Assessment 1', score: 25, maxScore: 30 },
      { id: 'ia1-algo', subject: 'Algorithms', type: 'Internal Assessment 1', score: 28, maxScore: 30 },
      { id: 'ia1-db', subject: 'Database Systems', type: 'Internal Assessment 1', score: 22, maxScore: 30 },
    ],
    activities: [
        { name: 'Attentiveness', score: 91, grade: 'A' },
        { name: 'Punctuality', score: 85, grade: 'B' },
        { name: 'Neat and Orderly', score: 97, grade: 'A+' },
        { name: 'Extracurriculars', score: 87, grade: 'B+' },
    ]
};

// A single, complete faculty profile
export const MOCK_FACULTY_USER: FacultyProfile = {
    id: 'fac_1',
    name: 'Dr. Anjali Verma',
    teacherId: 'T001',
    password: 'password123',
    role: UserRole.FACULTY,
    avatar: defaultAvatar,
    subjects: [
        { name: 'Data Structures', code: '18CS32', semester: '3' },
        { name: 'Algorithms', code: '18CS33', semester: '4' },
    ],
};

export const MOCK_STUDENTS: StudentProfile[] = [MOCK_STUDENT_USER];
export const MOCK_FACULTY: FacultyProfile[] = [MOCK_FACULTY_USER];

export const MOCK_CLASSMATES = [
    { name: 'Taniya Mary', adNo: '4256', date: '02-05-2022', parent: 'Mary Shalin', city: 'Berlin', contact: '7893456780', course: 'Bachelors', avatar: defaultAvatar },
    { name: 'Stella Martin', adNo: '4257', date: '02-05-2022', parent: 'Martin Jose', city: 'Munich', contact: '8793456780', course: 'Masters', avatar: defaultAvatar },
    { name: 'Adeno Alex', adNo: '4258', date: '03-05-2022', parent: 'Alex Aju', city: 'Berlin', contact: '8893456780', course: 'Bachelors', avatar: defaultAvatar },
    { name: 'Mario Tresso', adNo: '4259', date: '03-05-2022', parent: 'Jacob Stalin', city: 'Chemnitz', contact: '9493456780', course: 'Masters', avatar: defaultAvatar },
    { name: 'Jonnet Ben', adNo: '4260', date: '03-05-2022', parent: 'Ben Alex', city: 'Munich', contact: '9393456780', course: 'Bachelors', avatar: defaultAvatar },
];


// Other Mock Data
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
    { id: 'sub1', assignmentId: 'asg1', studentName: 'Riya Sharma', studentUsn: '1BL19CS001', studentAvatar: defaultAvatar, submissionDate: '2023-11-09', status: 'Submitted', grade: 90 },
    { id: 'sub2', assignmentId: 'asg1', studentName: 'Arjun Kumar', studentUsn: '1BL19CS002', studentAvatar: defaultAvatar, submissionDate: '2023-11-11', status: 'Late', grade: 75 },
    { id: 'sub3', assignmentId: 'asg2', studentName: 'Riya Sharma', studentUsn: '1BL19CS001', studentAvatar: defaultAvatar, submissionDate: '2023-11-17', status: 'Submitted', grade: null },
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
        teacherName: 'Dr. Anjali Verma',
        studentUsn: '1BL19CS001',
        date: '2023-09-15',
        ratings: [
            { question: 'Clarity of explanation', rating: 5 },
            { question: 'Pace of teaching', rating: 4 },
            { question: 'Engagement with students', rating: 5 },
            { question: 'Availability for doubts', rating: 4 },
        ],
        comments: 'Excellent teaching style, very clear concepts. The real-world examples are very helpful.'
    }
];

export const MOCK_TIMETABLE: TimetableData = {
  '7': {
    Monday: [
      { time: '9:00-9:55', subject: 'Machine Learning', short: 'ML', teacher: 'Dr. Anjali Verma' },
      { time: '9:55-10:50', subject: 'Cryptography', short: 'CNS', teacher: 'Prof. S. Kumar' },
      { time: '11:20-1:10', subject: 'ML Lab', short: 'ML Lab', teacher: 'Dr. Anjali Verma' },
      { time: '2:15-3:10', subject: 'Web Technologies', short: 'WEB', teacher: 'Prof. R. Singh' },
      { time: '3:10-4:05', subject: 'Soft Skills', short: 'SS', teacher: 'Mrs. P. Sharma' },
    ],
    Tuesday: [
      { time: '9:00-9:55', subject: 'Web Technologies', short: 'WEB', teacher: 'Prof. R. Singh' },
      { time: '9:55-10:50', subject: 'Machine Learning', short: 'ML', teacher: 'Dr. Anjali Verma' },
      { time: '11:20-1:10', subject: 'Web Lab', short: 'WEB Lab', teacher: 'Prof. R. Singh' },
      { time: '2:15-3:10', subject: 'Cryptography', short: 'CNS', teacher: 'Prof. S. Kumar' },
    ],
     Wednesday: [
      { time: '9:55-10:50', subject: 'Cryptography', short: 'CNS', teacher: 'Prof. S. Kumar' },
      { time: '11:20-12:15', subject: 'Machine Learning', short: 'ML', teacher: 'Dr. Anjali Verma' },
    ],
    // ... other days
  },
};