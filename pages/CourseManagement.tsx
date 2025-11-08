import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';
import { MOCK_COURSES } from '../constants';
import { Course } from '../types';

const CourseManagement: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>(MOCK_COURSES);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

    const openModal = (course: Course | null = null) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCourse(null);
    };

    const handleSave = (courseData: Course) => {
        if (selectedCourse) {
            setCourses(courses.map(c => c.id === courseData.id ? courseData : c));
        } else {
            setCourses([...courses, { ...courseData, id: `cs${Math.floor(Math.random() * 900) + 100}` }]);
        }
        closeModal();
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-dark">Course Management</h1>
                <button onClick={() => openModal()} className="px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                    Add New Course
                </button>
            </div>
            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase border-b">
                            <tr>
                                <th className="px-4 py-3">Course Name</th>
                                <th className="px-4 py-3">Course Code</th>
                                <th className="px-4 py-3">Credits</th>
                                <th className="px-4 py-3">Faculty</th>
                                <th className="px-4 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <tr key={course.id} className="border-b last:border-0 hover:bg-light">
                                    <td className="px-4 py-3 font-semibold">{course.name}</td>
                                    <td className="px-4 py-3">{course.code}</td>
                                    <td className="px-4 py-3">{course.credits}</td>
                                    <td className="px-4 py-3">{course.faculty}</td>
                                    <td className="px-4 py-3 text-right">
                                        <button onClick={() => openModal(course)} className="font-medium text-primary hover:underline">Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            <CourseFormModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onSave={handleSave}
                course={selectedCourse}
            />
        </div>
    );
};

interface CourseFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (course: Course) => void;
    course: Course | null;
}

const CourseFormModal: React.FC<CourseFormModalProps> = ({ isOpen, onClose, onSave, course }) => {
    const [formData, setFormData] = useState<Omit<Course, 'id'>>({
        name: '', code: '', credits: 0, faculty: ''
    });

    React.useEffect(() => {
        if (course) {
            setFormData({ name: course.name, code: course.code, credits: course.credits, faculty: course.faculty });
        } else {
            setFormData({ name: '', code: '', credits: 0, faculty: '' });
        }
    }, [course, isOpen]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: name === 'credits' ? parseInt(value) || 0 : value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ ...formData, id: course?.id || '' });
    };
    
    return (
        <Modal isOpen={isOpen} onClose={onClose} title={course ? 'Edit Course' : 'Add New Course'}>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Course Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-1">Course Code</label>
                    <input type="text" name="code" id="code" value={formData.code} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                </div>
                 <div>
                    <label htmlFor="credits" className="block text-sm font-medium text-gray-700 mb-1">Credits</label>
                    <input type="number" name="credits" id="credits" value={formData.credits} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                </div>
                 <div>
                    <label htmlFor="faculty" className="block text-sm font-medium text-gray-700 mb-1">Faculty</label>
                    <input type="text" name="faculty" id="faculty" value={formData.faculty} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                </div>
                <div className="flex justify-end pt-4 space-x-2">
                    <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">Cancel</button>
                    <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">Save</button>
                </div>
            </form>
        </Modal>
    );
};

export default CourseManagement;