// constants.ts: Provides all mock data for the application, parsed from the provided CSVs.
import { StudentProfile, FacultyProfile, UserRole, UpcomingEvent, Course, Assignment, Submission, Notification, TeacherFeedback, TimetableData } from './types';

// Parsed Student Data
export const MOCK_STUDENTS: StudentProfile[] = [
  { id: 'stud_2BL23CI054', name: 'Vidyalaxmi Hitnalli', usn: '2BL23CI054', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI054' },
  { id: 'stud_2BL24CI001', name: 'Abhishek Biradar', usn: '2BL24CI001', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI001' },
  { id: 'stud_2BL24CI002', name: 'Aishwarya Masali', usn: '2BL24CI002', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI002' },
  { id: 'stud_2BL24CI004', name: 'Akash Biradar Patil', usn: '2BL24CI004', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI004' },
  { id: 'stud_2BL24CI005', name: 'Akshata Telasang', usn: '2BL24CI005', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI005' },
  { id: 'stud_2BL24CI006', name: 'Aliya Yarnal', usn: '2BL24CI006', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI006' },
  { id: 'stud_2BL24CI008', name: 'Ayan Borgi', usn: '2BL24CI008', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI008' },
  { id: 'stud_2BL24CI009', name: 'Bhagyashree.Vittal Biradar', usn: '2BL24CI009', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI009' },
  { id: 'stud_2BL24CI010', name: 'Bharat Kirasur', usn: '2BL24CI010', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI010' },
  { id: 'stud_2BL24CI011', name: 'Bhoomika Rohite', usn: '2BL24CI011', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI011' },
  { id: 'stud_2BL24CI013', name: 'Harish G Uttur', usn: '2BL24CI013', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI013' },
  { id: 'stud_2BL24CI014', name: 'Karthik S Gadyal', usn: '2BL24CI014', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI014' },
  { id: 'stud_2BL24CI015', name: 'Khushi Waghamore', usn: '2BL24CI015', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI015' },
  { id: 'stud_2BL24CI017', name: 'Laxmi', usn: '2BL24CI017', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI017' },
  { id: 'stud_2BL24CI019', name: 'Mallanna', usn: '2BL24CI019', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI019' },
  { id: 'stud_2BL24CI020', name: 'Mallika.R.Nadagouda', usn: '2BL24CI020', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI020' },
  { id: 'stud_2BL24CI021', name: 'Mehak Jain', usn: '2BL24CI021', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI021' },
  { id: 'stud_2BL24CI024', name: 'Sami Mujawar', usn: '2BL24CI024', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI024' },
  { id: 'stud_2BL24CI025', name: 'Naveen Prakash Hadakar', usn: '2BL24CI025', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI025' },
  { id: 'stud_2BL24CI027', name: 'Omsai Shrikant Kannur', usn: '2BL24CI027', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI027' },
  { id: 'stud_2BL24CI028', name: 'Parshuram prajapati', usn: '2BL24CI028', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI028' },
  { id: 'stud_2BL24CI029', name: 'Parshwanath onakudari', usn: '2BL24CI029', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI029' },
  { id: 'stud_2BL24CI030', name: 'Pavan Akhandappa madar', usn: '2BL24CI030', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI030' },
  { id: 'stud_2BL24CI031', name: 'Pooja maruti rathod', usn: '2BL24CI031', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI031' },
  { id: 'stud_2BL24CI032', name: 'Pooja Nimadar', usn: '2BL24CI032', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI032' },
  { id: 'stud_2BL24CI033', name: 'Prachi Jamadar', usn: '2BL24CI033', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI033' },
  { id: 'stud_2BL24CI035', name: 'Prajwal Vithal Bagewadi', usn: '2BL24CI035', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI035' },
  { id: 'stud_2BL24CI036', name: 'Preksha Jain', usn: '2BL24CI036', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI036' },
  { id: 'stud_2BL24CI037', name: 'Priyanka somanath salotagi', usn: '2BL24CI037', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI037' },
  { id: 'stud_2BL24CI038', name: 'Rakshita Ramachandra Badiger', usn: '2BL24CI038', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI038' },
  { id: 'stud_2BL24CI039', name: 'Rohan Ravi Kumbar', usn: '2BL24CI039', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI039' },
  { id: 'stud_2BL24CI041', name: 'Rutesh chavan', usn: '2BL24CI041', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI041' },
  { id: 'stud_2BL24CI042', name: 'Safura Sajjade', usn: '2BL24CI042', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI042' },
  { id: 'stud_2BL24CI043', name: 'Sanjana Dashyal', usn: '2BL24CI043', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI043' },
  { id: 'stud_2BL24CI045', name: 'Shravan Shamarao Naik', usn: '2BL24CI045', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI045' },
  { id: 'stud_2BL24CI046', name: 'Shreelaxmi hirandagi', usn: '2BL24CI046', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI046' },
  { id: 'stud_2BL24CI047', name: 'Shreya', usn: '2BL24CI047', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI047' },
  { id: 'stud_2BL24CI050', name: 'Shrin S Bagali', usn: '2BL24CI050', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI050' },
  { id: 'stud_2BL24CI052', name: 'Sneha M Shapurkar', usn: '2BL24CI052', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI052' },
  { id: 'stud_2BL24CI053', name: 'Sohel Maniyar', usn: '2BL24CI053', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI053' },
  { id: 'stud_2BL24CI054', name: 'Srushti Sonwalkar', usn: '2BL24CI054', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI054' },
  { id: 'stud_2BL24CI055', name: 'Sudarshan S Sarwad', usn: '2BL24CI055', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI055' },
  { id: 'stud_2BL24CI056', name: 'Swaleha Yadgir', usn: '2BL24CI056', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI056' },
  { id: 'stud_2BL24CI057', name: 'Tanuja Sakule', usn: '2BL24CI057', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI057' },
  { id: 'stud_2BL24CI058', name: 'Tasmiyanaaz S Inamdar', usn: '2BL24CI058', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI058' },
  { id: 'stud_2BL24CI059', name: 'Tejaswini Ganapati Thakkannavar', usn: '2BL24CI059', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI059' },
  { id: 'stud_2BL24CI060', name: 'Vatsala Korabu', usn: '2BL24CI060', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI060' },
  { id: 'stud_2BL24CI061', name: 'Venkatesh patil', usn: '2BL24CI061', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI061' },
  { id: 'stud_2BL24CI062', name: 'Vikas M Ambali', usn: '2BL24CI062', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI062' },
  { id: 'stud_2BL24CI063', name: 'Zoya Fatima M Bagali', usn: '2BL24CI063', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI063' },
  { id: 'stud_2BL24CI012', name: 'Diya Runwal', usn: '2BL24CI012', semester: '3', course: 'CSE (AI & ML)', batch: '2024-28', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI012' },
  { id: 'stud_2BL23CI001', name: 'ABHILASH HOLIKATTI', usn: '2BL23CI001', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI001' },
  { id: 'stud_2BL23CI002', name: 'AFIYA BABARCHI', usn: '2BL23CI002', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI002' },
  { id: 'stud_2BL23CI003', name: 'ANKITA PUJARI', usn: '2BL23CI003', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI003' },
  { id: 'stud_2BL23CI005', name: 'APOORVA GOUNDI', usn: '2BL23CI005', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI005' },
  { id: 'stud_2BL23CI006', name: 'ASHWINI JANGAMSHETTI', usn: '2BL23CI006', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI006' },
  { id: 'stud_2BL23CI007', name: 'BABALESHWAR RITIKA', usn: '2BL23CI007', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI007' },
  { id: 'stud_2BL23CI008', name: 'CHAITRA MURGOD', usn: '2BL23CI008', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI008' },
  { id: 'stud_2BL23CI009', name: 'DARSHAN WALI', usn: '2BL23CI009', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI009' },
  { id: 'stud_2BL23CI010', name: 'DATTA KAMBAGI', usn: '2BL23CI010', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI010' },
  { id: 'stud_2BL23CI011', name: 'DEEKSHA NAYAKODI', usn: '2BL23CI011', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI011' },
  { id: 'stud_2BL23CI012', name: 'GANESH', usn: '2BL23CI012', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI012' },
  { id: 'stud_2BL23CI013', name: 'GOURAMMA HALANGALI', usn: '2BL23CI013', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI013' },
  { id: 'stud_2BL23CI014', name: 'HUSNA BAGALKOT', usn: '2BL23CI014', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI014' },
  { id: 'stud_2BL23CI015', name: 'ISHWAR SHATAGAR', usn: '2BL23CI015', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI015' },
  { id: 'stud_2BL23CI016', name: 'JANHAVI GUNAKI', usn: '2BL23CI016', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI016' },
  { id: 'stud_2BL23CI017', name: 'LAXMI HALLI', usn: '2BL23CI017', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI017' },
  { id: 'stud_2BL23CI018', name: 'LAXMI M BIRADAR', usn: '2BL23CI018', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI018' },
  { id: 'stud_2BL23CI019', name: 'LAXMI TELASANG', usn: '2BL23CI019', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI019' },
  { id: 'stud_2BL23CI020', name: 'MADHUVAN METRI', usn: '2BL23CI020', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI020' },
  { id: 'stud_2BL23CI021', name: 'MADIVAL SAJJAN', usn: '2BL23CI021', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI021' },
  { id: 'stud_2BL23CI022', name: 'MAHEROZ KAZI', usn: '2BL23CI022', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI022' },
  { id: 'stud_2BL23CI023', name: 'MALLANAGOUD PATIL', usn: '2BL23CI023', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI023' },
  { id: 'stud_2BL23CI024', name: 'MANASA HALAGALI', usn: '2BL23CI024', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI024' },
  { id: 'stud_2BL23CI025', name: 'MANOJ R AKKI', usn: '2BL23CI025', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI025' },
  { id: 'stud_2BL23CI026', name: 'NANDINI PATIL', usn: '2BL23CI026', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI026' },
  { id: 'stud_2BL23CI027', name: 'NIRMAL HOTAKAR', usn: '2BL23CI027', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI027' },
  { id: 'stud_2BL23CI028', name: 'OM VEERKAR', usn: '2BL23CI028', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI028' },
  { id: 'stud_2BL23CI029', name: 'PRAJWAL WADED', usn: '2BL23CI029', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI029' },
  { id: 'stud_2BL23CI030', name: 'PRAJWAL PATIL', usn: '2BL23CI030', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI030' },
  { id: 'stud_2BL23CI031', name: 'PRAJWAL S BASHETTI', usn: '2BL23CI031', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI031' },
  { id: 'stud_2BL23CI032', name: 'PREMKUMAR HALLI', usn: '2BL23CI032', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI032' },
  { id: 'stud_2BL23CI033', name: 'PRIYA ANIL KALBURGI', usn: '2BL23CI033', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI033' },
  { id: 'stud_2BL23CI034', name: 'RADHIKA PATIL', usn: '2BL23CI034', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI034' },
  { id: 'stud_2BL23CI038', name: 'RUTU KAMADAL', usn: '2BL23CI038', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI038' },
  { id: 'stud_2BL23CI039', name: 'SAFANA LASHKARI', usn: '2BL23CI039', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI039' },
  { id: 'stud_2BL23CI040', name: 'SAGAR NIKKAM', usn: '2BL23CI040', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI040' },
  { id: 'stud_2BL23CI041', name: 'SAMARTH DUTTARGAVI', usn: '2BL23CI041', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI041' },
  { id: 'stud_2BL23CI042', name: 'SANDESH PRADHANI', usn: '2BL23CI042', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI042' },
  { id: 'stud_2BL23CI043', name: 'SANIYA MULLA', usn: '2BL23CI043', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI043' },
  { id: 'stud_2BL23CI044', name: 'SAVITRI KULLOLLI', usn: '2BL23CI044', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI044' },
  { id: 'stud_2BL23CI045', name: 'SHAMBHAVI S BIRADAR', usn: '2BL23CI045', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI045' },
  { id: 'stud_2BL23CI046', name: 'SHRADDA LONI', usn: '2BL23CI046', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI046' },
  { id: 'stud_2BL23CI047', name: 'SHREYAS SANTI', usn: '2BL23CI047', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI047' },
  { id: 'stud_2BL23CI048', name: 'SOUMYA SOLAPUR', usn: '2BL23CI048', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI048' },
  { id: 'stud_2BL23CI049', name: 'SUHAS KANNUR', usn: '2BL23CI049', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI049' },
  { id: 'stud_2BL23CI050', name: 'SUSHMITA BIJAPUR', usn: '2BL23CI050', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI050' },
  { id: 'stud_2BL23CI051', name: 'TOUQEER JUNEDI', usn: '2BL23CI051', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI051' },
  { id: 'stud_2BL23CI052', name: 'VAIBHAV BHAJANTRI', usn: '2BL23CI052', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI052' },
  { id: 'stud_2BL23CI053', name: 'VAIBHAVI V P', usn: '2BL23CI053', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI053' },
  { id: 'stud_2BL23CI055', name: 'VIKAS M MATH', usn: '2BL23CI055', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI055' },
  { id: 'stud_2BL23CI056', name: 'VINUT PATROT', usn: '2BL23CI056', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI056' },
  { id: 'stud_2BL23CI057', name: 'KHAJESAHEB WALIKAR', usn: '2BL23CI057', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI057' },
  { id: 'stud_2BL23CI058', name: 'VINOD PATIL', usn: '2BL23CI058', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL23CI058' },
  { id: 'stud_2BL22CI053', name: 'SOUJANYA PATIL', usn: '2BL22CI053', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL22CI053' },
  { id: 'stud_2BL24CI400', name: 'ABHISHEK RATHOD', usn: '2BL24CI400', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI400' },
  { id: 'stud_2BL24CI401', name: 'MOHAMMAD ARSH KUDGI', usn: '2BL24CI401', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI401' },
  { id: 'stud_2BL24CI402', name: 'PATEL MOHAMMED MURTUZA MOHAMMED GAUS', usn: '2BL24CI402', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI402' },
  { id: 'stud_2BL24CI403', name: 'SOMASHEKHAR GADEDAGOUDAR', usn: '2BL24CI403', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI403' },
  { id: 'stud_2BL24CI404', name: 'YARIS ABBASALI NADAF', usn: '2BL24CI404', semester: '4', course: 'CSE (AI & ML)', batch: '2023-27', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=2BL24CI404' },
];

// Parsed Faculty Data
export const MOCK_FACULTY: FacultyProfile[] = [
  { id: 'fac_103201', teacherId: '103201', password: 'bldeacet', name: 'Mr. Somashekhar Dhanyal', role: UserRole.FACULTY, avatar: 'https://i.pravatar.cc/150?u=103201', subjects: [ { name: 'Deep Learning (IPCC)', code: 'BAI701', semester: '7' }, { name: 'Deep Learning Lab (IPCC)', code: 'BAI701', semester: '7' }, { name: 'Data Visualization Lab (DV) (PCCL)', code: 'BAIL504', semester: '5' }, { name: 'Image and Video Processing (IVP) (PEC)', code: 'BCI515D', semester: '5' }, { name: 'Mini Project (PRO)', code: 'BCI586', semester: '5' } ] },
  { id: 'fac_103202', teacherId: '103202', password: 'bldeacet', name: 'Mrs. Poornima Mamadapur', role: UserRole.FACULTY, avatar: 'https://i.pravatar.cc/150?u=103202', subjects: [ { name: 'Machine Learning II (IPCC)', code: 'BAI702', semester: '7' }, { name: 'Machine Learning II lab (IPCC)', code: 'BAI702', semester: '7' }, { name: 'Data Structures and Applications (PCC)', code: 'BCS304', semester: '3' }, { name: 'Data Structures Lab (PCCL)', code: 'BCSL305', semester: '3' } ] },
  { id: 'fac_103203', teacherId: '103203', password: 'bldeacet', name: 'Dr. Sumangala Biradar', role: UserRole.FACULTY, avatar: 'https://i.pravatar.cc/150?u=103203', subjects: [ { name: 'Cryptography & Network Security (PCC)', code: 'BCS703', semester: '7' } ] },
  { id: 'fac_103204', teacherId: '103204', password: 'bldeacet', name: 'Mr. Shrinivas Amate', role: UserRole.FACULTY, avatar: 'https://i.pravatar.cc/150?u=103204', subjects: [ { name: 'Big Data Analytics (PEC)', code: 'BCS714D', semester: '7' }, { name: 'PHP Programming (IPCC)', code: 'BAIL358D', semester: '3' }, { name: 'Computer Networks (CN) (IPCC)', code: 'BCS502', semester: '5' }, { name: 'Computer Networks Lab (IPCC)', code: 'BCS503', semester: '5' } ] },
  { id: 'fac_103206', teacherId: '103206', password: 'bldeacet', name: 'Dr. P. Nagathan', role: UserRole.FACULTY, avatar: 'https://i.pravatar.cc/150?u=103206', subjects: [ { name: 'Mathematics for Computer Science (PCC)', code: 'BCS301', semester: '3' } ] },
  { id: 'fac_103207', teacherId: '103207', password: 'bldeacet', name: 'Dr. Veena Patil', role: UserRole.FACULTY, avatar: 'https://i.pravatar.cc/150?u=103207', subjects: [ { name: 'Digital Design & Computer Organization (IPCC)', code: 'BCS302', semester: '3' } ] },
  { id: 'fac_103208', teacherId: '103208', password: 'bldeacet', name: 'New Staff 1', role: UserRole.FACULTY, avatar: 'https://i.pravatar.cc/150?u=103208', subjects: [ { name: 'Digital Design & Computer Organization Lab (IPCC)', code: 'BCS302', semester: '3' }, { name: 'Mini Project (PRO)', code: 'BCI586', semester: '5' } ] },
  { id: 'fac_103209', teacherId: '103209', password: 'bldeacet', name: 'Mrs. P. Bandennavar', role: UserRole.FACULTY, avatar: 'https://i.pravatar.cc/150?u=103209', subjects: [ { name: 'Operating Systems (IPCC)', code: 'BCS303', semester: '3' } ] },
  { id: 'fac_103210', teacherId: '103210', password: 'bldeacet', name: 'New Staff 2', role: UserRole.FACULTY, avatar: 'https://i.pravatar.cc/150?u=103210', subjects: [ { name: 'Operating Systems Lab (IPCC)', code: 'BCS303', semester: '3' } ] },
  { id: 'fac_103213', teacherId: '103213', password: 'bldeacet', name: 'Dr. S. Biradar', role: UserRole.FACULTY, avatar: 'https://i.pravatar.cc/150?u=103213', subjects: [ { name: 'Data Structures Lab (PCCL)', code: 'BCSL305', semester: '3' } ] },
  { id: 'fac_103214', teacherId: '103214', password: 'bldeacet', name: 'Ms. H. B. Biradar', role: UserRole.FACULTY, avatar: 'https://i.pravatar.cc/150?u=103214', subjects: [ { name: 'OOP WITH JAVA (IPCC)', code: 'BCS306A', semester: '3' }, { name: 'OOP WITH JAVA LABORATORY Lab (IPCC)', code: 'BCS306A', semester: '3' }, { name: 'Data Visualization Lab (DV) (PCCL)', code: 'BAIL504', semester: '5' } ] },
  { id: 'fac_103216', teacherId: '103216', password: 'bldeacet', name: 'Staff 1', role: UserRole.FACULTY, avatar: 'https://i.pravatar.cc/150?u=103216', subjects: [ { name: 'PHP Programming (IPCC)', code: 'BAIL358D', semester: '3' } ] },
  { id: 'fac_103217', teacherId: '103217', password: 'bldeacet', name: 'Staff 2', role: UserRole.FACULTY, avatar: 'https://i.pravatar.cc/150?u=103217', subjects: [ { name: 'Social Connect and Responsibility (UHV)', code: 'BCSK307', semester: '3' } ] },
  { id: 'fac_103218', teacherId: '103218', password: 'bldeacet', name: 'Prof. S. V. Hiremath', role: UserRole.FACULTY, avatar: 'https://i.pravatar.cc/150?u=103218', subjects: [ { name: 'National Service Scheme (NSS) (MC)', code: 'BNSK359', semester: '3' } ] },
  { id: 'fac_103219', teacherId: '103219', password: 'bldeacet', name: 'Prof. Bharati Mathapati', role: UserRole.FACULTY, avatar: 'https://i.pravatar.cc/150?u=103219', subjects: [ { name: 'Physical Education (PE) (Sports and Athletics) (MC)', code: 'BPEK359', semester: '3' } ] },
  { id: 'fac_103220', teacherId: '103220', password: 'bldeacet', name: 'Dr. S. Chavan', role: UserRole.FACULTY, avatar: 'https://i.pravatar.cc/150?u=103220', subjects: [ { name: 'Yoga (MC)', code: 'BYOK359', semester: '3' } ] },
  { id: 'fac_103221', teacherId: '103221', password: 'bldeacet', name: 'Mrs. Savitri. N.', role: UserRole.FACULTY, avatar: 'https://i.pravatar.cc/150?u=103221', subjects: [ { name: 'Software Engineering & Project Management (SEPM) (HSMS)', code: 'BCS501', semester: '5' } ] },
  { id: 'fac_103223', teacherId: '103223', password: 'bldeacet', name: 'Ms. Hemavathi Biradar', role: UserRole.FACULTY, avatar: 'https://i.pravatar.cc/150?u=103223', subjects: [ { name: 'Theory of computation (TC) (PCC)', code: 'BCS504', semester: '5' } ] },
  { id: 'fac_103228', teacherId: '103228', password: 'bldeacet', name: 'Dr. N. S. Mathapathi', role: UserRole.FACULTY, avatar: 'https://i.pravatar.cc/150?u=103228', subjects: [ { name: 'Research Methodology and IPR (RM) (AEC)', code: 'BRMK557', semester: '5' } ] },
  { id: 'fac_103229', teacherId: '103229', password: 'bldeacet', name: 'Mr. Raju Lagali', role: UserRole.FACULTY, avatar: 'https://i.pravatar.cc/150?u=103229', subjects: [ { name: 'Environmental Studies and E-waste Management (EVS) (MC)', code: 'BCS508', semester: '5' } ] },
  { id: 'fac_103230', teacherId: '103230', password: 'bldeacet', name: 'Mr. S.V. Hiremath', role: UserRole.FACULTY, avatar: 'https://i.pravatar.cc/150?u=103230', subjects: [ { name: 'National Service Scheme (NSS) (MC)', code: 'BNSK359', semester: '5' } ] },
  { id: 'fac_103231', teacherId: '103231', password: 'bldeacet', name: 'Mrs. Bharati Mathapati', role: UserRole.FACULTY, avatar: 'https://i.pravatar.cc/150?u=103231', subjects: [ { name: 'Physical Education (PE) (Sports and Athletics) (MC)', code: 'BPEK359', semester: '5' } ] },
  { id: 'fac_103232', teacherId: '103232', password: 'bldeacet', name: 'Dr. Shreekant Chavan', role: UserRole.FACULTY, avatar: 'https://i.pravatar.cc/150?u=103232', subjects: [ { name: 'Yoga (MC)', code: 'BYOK359', semester: '5' } ] },
];


// Parsed Timetable Data
export const MOCK_TIMETABLE: TimetableData = {
  '3': {
    Monday: [
      { time: '9:00-9:55', subject: 'Maths', short: 'Maths', teacher: 'Dr. P. Nagathan' },
      { time: '9:55-10:50', subject: 'OS', short: 'OS', teacher: 'Mrs. P. Bandennavar' },
      { time: '11:20-12:15', subject: 'PHP B2 [L-1]', short: 'PHP', teacher: 'Mr. Shrinivas Amate' },
      { time: '11:20-12:15', subject: 'DS B1 [L-3]', short: 'DS', teacher: 'TBD' },
      { time: '12:15-1:10', subject: 'PHP B2 [L-1]', short: 'PHP', teacher: 'Mr. Shrinivas Amate' },
      { time: '12:15-1:10', subject: 'DS B1 [L-3]', short: 'DS', teacher: 'TBD' },
      { time: '2:15-3:10', subject: 'Maths', short: 'Maths', teacher: 'Dr. P. Nagathan' },
      { time: '3:10-4:05', subject: 'JAVA', short: 'JAVA', teacher: 'Mr. H. B. Biradar' }
    ],
    Tuesday: [
      { time: '9:00-9:55', subject: 'Maths', short: 'Maths', teacher: 'Dr. P. Nagathan' },
      { time: '9:55-10:50', subject: 'OS', short: 'OS', teacher: 'Mrs. P. Bandennavar' },
      { time: '11:20-12:15', subject: 'DDCO', short: 'DDCO', teacher: 'Dr. Veena Patil' },
      { time: '12:15-1:10', subject: 'DDCO', short: 'DDCO', teacher: 'Dr. Veena Patil' },
      { time: '2:15-3:10', subject: 'DDCO B1 [L-1]', short: 'DDCO', teacher: 'Dr. Veena Patil' },
      { time: '2:15-3:10', subject: 'JAVA B2 [L-3]', short: 'JAVA', teacher: 'Mr. H. B. Biradar' },
      { time: '3:10-4:05', subject: 'DDCO B1 [L-1]', short: 'DDCO', teacher: 'Dr. Veena Patil' },
      { time: '3:10-4:05', subject: 'JAVA B2 [L-3]', short: 'JAVA', teacher: 'Mr. H. B. Biradar' }
    ],
    Wednesday: [
      { time: '9:00-9:55', subject: 'OS B2 [L-1]', short: 'OS', teacher: 'Mrs. P. Bandennavar' },
      { time: '9:00-9:55', subject: 'JAVA B1 [L-3]', short: 'JAVA', teacher: 'Mr. H. B. Biradar' },
      { time: '9:55-10:50', subject: 'DDCO B2 [L-1]', short: 'DDCO', teacher: 'Dr. Veena Patil' },
      { time: '11:20-12:15', subject: 'SCR', short: 'SCR', teacher: 'Staff 2' },
      { time: '12:15-1:10', subject: 'NSS', short: 'NSS', teacher: 'Prof. S. V. Hiremath' },
      { time: '12:15-1:10', subject: 'NOGA', short: 'NOGA', teacher: 'Prof. S. V. Hiremath' },
      { time: '2:15-3:10', subject: 'DSA', short: 'DSA', teacher: 'Mrs. P. Mamadapur' },
      { time: '3:10-4:05', subject: 'Maths', short: 'Maths', teacher: 'Dr. P. Nagathan' }
    ],
    Thursday: [
      { time: '9:00-9:55', subject: 'JAVA', short: 'JAVA', teacher: 'Mr. H. B. Biradar' },
      { time: '9:55-10:50', subject: 'OS', short: 'OS', teacher: 'Mrs. P. Bandennavar' },
      { time: '11:20-12:15', subject: 'PHP B1 [L-3]', short: 'PHP', teacher: 'Mr. Shrinivas Amate' },
      { time: '12:15-1:10', subject: 'PHP B1 [L-3]', short: 'PHP', teacher: 'Mr. Shrinivas Amate' },
      { time: '2:15-3:10', subject: 'DDCO', short: 'DDCO', teacher: 'Dr. Veena Patil' },
      { time: '3:10-4:05', subject: 'Maths', short: 'Maths', teacher: 'Dr. P. Nagathan' }
    ],
    Friday: [
      { time: '9:00-9:55', subject: 'JAVA', short: 'JAVA', teacher: 'Mr. H. B. Biradar' },
      { time: '9:55-10:50', subject: 'Maths', short: 'Maths', teacher: 'Dr. P. Nagathan' },
      { time: '11:20-12:15', subject: 'DSA', short: 'DSA', teacher: 'Mrs. P. Mamadapur' },
      { time: '12:15-1:10', subject: 'DSA', short: 'DSA', teacher: 'Mrs. P. Mamadapur' },
      { time: '2:15-3:10', subject: 'Maths', short: 'Maths', teacher: 'Dr. P. Nagathan' },
      { time: '3:10-4:05', subject: 'OS B1 [L-1]', short: 'OS', teacher: 'Mrs. P. Bandennavar' },
      { time: '3:10-4:05', subject: 'DS B2 [L-3]', short: 'DS', teacher: 'TBD' }
    ],
    Saturday: [
      { time: '9:00-9:55', subject: 'OS', short: 'OS', teacher: 'Mrs. P. Bandennavar' },
      { time: '9:55-10:50', subject: 'Maths', short: 'Maths', teacher: 'Dr. P. Nagathan' },
      { time: '11:20-12:15', subject: 'DDCO', short: 'DDCO', teacher: 'Dr. Veena Patil' },
      { time: '12:15-1:10', subject: 'DSA', short: 'DSA', teacher: 'Mrs. P. Mamadapur' }
    ]
  },
  '5': {
    Monday: [
      { time: '9:00-9:55', subject: 'RM', short: 'RM', teacher: 'Dr. N. S. Mathapathi' },
      { time: '9:55-10:50', subject: 'TOC', short: 'TOC', teacher: 'Ms. Meenavathi Biradar' },
      { time: '11:20-12:15', subject: 'SEPM', short: 'SEPM', teacher: 'Mrs. Savitri N.' },
      { time: '12:15-1:10', subject: 'SEPM', short: 'SEPM', teacher: 'Mrs. Savitri N.' }
    ],
    Tuesday: [
      { time: '9:00-9:55', subject: 'CN', short: 'CN', teacher: 'Mr. Shrinivas Amate' },
      { time: '9:55-10:50', subject: 'RM', short: 'RM', teacher: 'Dr. N. S. Mathapathi' },
      { time: '11:20-12:15', subject: 'CN LAB B2 [L-1]', short: 'CN', teacher: 'Mr. Shrinivas Amate' },
      { time: '11:20-12:15', subject: 'DV LAB B1 [L-2]', short: 'DV', teacher: 'Mr. Somashekar Dhanyal' },
      { time: '12:15-1:10', subject: 'CN LAB B2 [L-1]', short: 'CN', teacher: 'Mr. Shrinivas Amate' },
      { time: '12:15-1:10', subject: 'DV LAB B1 [L-2]', short: 'DV', teacher: 'Mr. Somashekar Dhanyal' },
      { time: '2:15-3:10', subject: 'IVP', short: 'IVP', teacher: 'Mr. Somashekar Dhanyal' },
      { time: '3:10-4:05', subject: 'IVP', short: 'IVP', teacher: 'Mr. Somashekar Dhanyal' }
    ],
    Wednesday: [
      { time: '9:00-9:55', subject: 'CN', short: 'CN', teacher: 'Mr. Shrinivas Amate' },
      { time: '9:55-10:50', subject: 'RM', short: 'RM', teacher: 'Dr. N. S. Mathapathi' },
      { time: '11:20-12:15', subject: 'IVP', short: 'IVP', teacher: 'Mr. Somashekar Dhanyal' },
      { time: '12:15-1:10', subject: 'IVP', short: 'IVP', teacher: 'Mr. Somashekar Dhanyal' },
      { time: '2:15-3:10', subject: 'TOC', short: 'TOC', teacher: 'Ms. Meenavathi Biradar' },
      { time: '3:10-4:05', subject: 'TOC', short: 'TOC', teacher: 'Ms. Meenavathi Biradar' }
    ],
    Thursday: [
      { time: '9:00-9:55', subject: 'EVS', short: 'EVS', teacher: 'Mr. Raju Lagali' },
      { time: '9:55-10:50', subject: 'RM', short: 'RM', teacher: 'Dr. N. S. Mathapathi' },
      { time: '11:20-12:15', subject: 'TOC', short: 'TOC', teacher: 'Ms. Meenavathi Biradar' },
      { time: '12:15-1:10', subject: 'TOC', short: 'TOC', teacher: 'Ms. Meenavathi Biradar' },
      { time: '2:15-3:10', subject: 'PE', short: 'PE', teacher: 'Prof. Bharati Mathapati' },
      { time: '2:15-3:10', subject: 'NSS', short: 'NSS', teacher: 'Mr. S.V. Hiremath' },
      { time: '2:15-3:10', subject: 'YOGA', short: 'YOGA', teacher: 'Dr. Shreekant Chavan' },
      { time: '3:10-4:05', subject: 'PE', short: 'PE', teacher: 'Prof. Bharati Mathapati' },
      { time: '3:10-4:05', subject: 'NSS', short: 'NSS', teacher: 'Mr. S.V. Hiremath' },
      { time: '3:10-4:05', subject: 'YOGA', short: 'YOGA', teacher: 'Dr. Shreekant Chavan' }
    ],
    Friday: [
      { time: '9:00-9:55', subject: 'SEPM', short: 'SEPM', teacher: 'Mrs. Savitri N.' },
      { time: '9:55-10:50', subject: 'IVP', short: 'IVP', teacher: 'Mr. Somashekar Dhanyal' },
      { time: '11:20-12:15', subject: 'SEPM', short: 'SEPM', teacher: 'Mrs. Savitri N.' },
      { time: '12:15-1:10', subject: 'Placement Activity', short: 'Placement', teacher: 'TBD' },
      { time: '2:15-3:10', subject: 'CN LAB B1 [L-1]', short: 'CN', teacher: 'Mr. Shrinivas Amate' },
      { time: '2:15-3:10', subject: 'DV LAB B2 [L-2]', short: 'DV', teacher: 'Mr. Somashekar Dhanyal' },
      { time: '3:10-4:05', subject: 'CN LAB B1 [L-1]', short: 'CN', teacher: 'Mr. Shrinivas Amate' },
      { time: '3:10-4:05', subject: 'DV LAB B2 [L-2]', short: 'DV', teacher: 'Mr. Somashekar Dhanyal' }
    ],
    Saturday: [
      { time: '9:00-9:55', subject: 'IVP', short: 'IVP', teacher: 'Mr. Somashekar Dhanyal' },
      { time: '9:55-10:50', subject: 'SEPM', short: 'SEPM', teacher: 'Mrs. Savitri N.' },
      { time: '11:20-12:15', subject: 'Mini Project', short: 'Mini', teacher: 'Project Supervisor' },
      { time: '12:15-1:10', subject: 'Mini Project', short: 'Mini', teacher: 'Project Supervisor' }
    ]
  },
  '7': {
    // Add 7th sem data if available, otherwise it's empty
  }
};


// Old Mock Data - kept for components that haven't been migrated to the new data structure yet.
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
    { id: 'sub1', assignmentId: 'asg1', studentName: 'Vidyalaxmi Hitnalli', studentUsn: '2BL23CI054', studentAvatar: 'https://i.pravatar.cc/150?u=2BL23CI054', submissionDate: '2023-11-09', status: 'Submitted', grade: 90 },
    { id: 'sub2', assignmentId: 'asg1', studentName: 'Abhishek Biradar', studentUsn: '2BL24CI001', studentAvatar: 'https://i.pravatar.cc/150?u=2BL24CI001', submissionDate: '2023-11-11', status: 'Late', grade: 75 },
    { id: 'sub3', assignmentId: 'asg2', studentName: 'Vidyalaxmi Hitnalli', studentUsn: '2BL23CI054', studentAvatar: 'https://i.pravatar.cc/150?u=2BL23CI054', submissionDate: '2023-11-17', status: 'Submitted', grade: null },
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
        teacherName: 'Dr. P. Nagathan',
        studentUsn: '2BL23CI054',
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
        teacherName: 'Mrs. P. Bandennavar',
        studentUsn: '2BL24CI001',
        date: '2023-09-16',
        ratings: [
            { question: 'Clarity of explanation', rating: 4 },
            { question: 'Pace of teaching', rating: 3 },
            { question: 'Engagement with students', rating: 4 },
            { question: 'Availability for doubts', rating: 5 },
        ],
        comments: 'The professor is very approachable and clears doubts patiently. The pace could be a little slower sometimes.'
    }
];
