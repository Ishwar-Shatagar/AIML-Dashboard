import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';
import { MOCK_ASSIGNMENTS, MOCK_COURSES, MOCK_SUBMISSIONS, MOCK_STUDENTS } from '../constants';
import { Assignment, Course } from '../types';

const AssignmentManagement: React.FC = () => {
    const [assignments, setAssignments] = useState<Assignment[]>(MOCK_ASSIGNMENTS);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
    const navigate = useNavigate();

    const openModal = (assignment: Assignment | null = null) => {
        setSelectedAssignment(assignment);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedAssignment(null);
    };

    const handleSave = (assignmentData: Assignment) => {
        const course = MOCK_COURSES.find(c => c.id === assignmentData.courseId);
        const dataWithCourseName = { ...assignmentData, courseName: course?.name || 'Unknown' };

        if (selectedAssignment) {
            setAssignments(assignments.map(a => a.id === dataWithCourseName.id ? dataWithCourseName : a));
        } else {
            setAssignments([...assignments, { ...dataWithCourseName, id: `asg${Date.now()}` }]);
        }
        closeModal();
    };
    
    const handleDelete = (assignmentId: string) => {
        if (window.confirm('Are you sure you want to delete this assignment?')) {
            setAssignments(assignments.filter(a => a.id !== assignmentId));
        }
    }

    const countSubmissions = (assignmentId: string) => {
        return MOCK_SUBMISSIONS.filter(s => s.assignmentId === assignmentId).length;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-dark">Assignment Management</h1>
                <button onClick={() => openModal()} className="px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                    Create New Assignment
                </button>
            </div>
            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase border-b">
                            <tr>
                                <th className="px-4 py-3">Title</th>
                                <th className="px-4 py-3">Course</th>
                                <th className="px-4 py-3">Due Date</th>
                                <th className="px-4 py-3">Submissions</th>
                                <th className="px-4 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assignments.map((assignment) => (
                                <tr key={assignment.id} className="border-b last:border-0 hover:bg-light">
                                    <td className="px-4 py-3 font-semibold">{assignment.title}</td>
                                    <td className="px-4 py-3">{assignment.courseName}</td>
                                    <td className="px-4 py-3">{assignment.dueDate}</td>
                                    <td className="px-4 py-3">{countSubmissions(assignment.id)} / {MOCK_STUDENTS.length}</td>
                                    <td className="px-4 py-3 text-right space-x-4">
                                        <button onClick={() => navigate(`/faculty/assignments/${assignment.id}/submissions`)} className="font-medium text-secondary hover:underline">View Submissions</button>
                                        <button onClick={() => openModal(assignment)} className="font-medium text-primary hover:underline">Edit</button>
                                        <button onClick={() => handleDelete(assignment.id)} className="font-medium text-red-500 hover:underline">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            <AssignmentFormModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onSave={handleSave}
                assignment={selectedAssignment}
                courses={MOCK_COURSES}
            />
        </div>
    );
};

interface AssignmentFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (assignment: Assignment) => void;
    assignment: Assignment | null;
    courses: Course[];
}

const AssignmentFormModal: React.FC<AssignmentFormModalProps> = ({ isOpen, onClose, onSave, assignment, courses }) => {
    const [formData, setFormData] = useState<Omit<Assignment, 'id' | 'courseName'>>({
        title: '', courseId: '', instructions: '', dueDate: '', totalPoints: 100
    });

    React.useEffect(() => {
        if (assignment) {
            setFormData({ title: assignment.title, courseId: assignment.courseId, instructions: assignment.instructions, dueDate: assignment.dueDate, totalPoints: assignment.totalPoints });
        } else {
            setFormData({ title: '', courseId: courses[0]?.id || '', instructions: '', dueDate: '', totalPoints: 100 });
        }
    }, [assignment, isOpen, courses]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: name === 'totalPoints' ? parseInt(value) || 0 : value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ ...formData, id: assignment?.id || '', courseName: '' }); // courseName will be added in parent
    };
    
    return (
        <Modal isOpen={isOpen} onClose={onClose} title={assignment ? 'Edit Assignment' : 'Create New Assignment'}>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Assignment Title</label>
                    <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                </div>
                 <div>
                    <label htmlFor="courseId" className="block text-sm font-medium text-gray-700 mb-1">Course</label>
                    <select name="courseId" id="courseId" value={formData.courseId} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm">
                        {courses.map(course => <option key={course.id} value={course.id}>{course.name}</option>)}
                    </select>
                </div>
                 <div>
                    <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-1">Instructions</label>
                    <textarea name="instructions" id="instructions" rows={4} value={formData.instructions} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                        <input type="date" name="dueDate" id="dueDate" value={formData.dueDate} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="totalPoints" className="block text-sm font-medium text-gray-700 mb-1">Total Points</label>
                        <input type="number" name="totalPoints" id="totalPoints" value={formData.totalPoints} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                    </div>
                </div>
                <div className="flex justify-end pt-4 space-x-2">
                    <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">Cancel</button>
                    <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">Save Assignment</button>
                </div>
            </form>
        </Modal>
    );
};

export default AssignmentManagement;