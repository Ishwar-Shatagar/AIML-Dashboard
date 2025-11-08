import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';
import { MOCK_COURSES } from '../constants';
import { Course } from '../types';

const CourseManagement: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>(MOCK_COURSES);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Dummy state for new course form
    const [newCourse, setNewCourse] = useState({ name: '', code: '', credits: 3, faculty: 'Dr. Robert Smith' });

    const handleAddCourse = (e: React.FormEvent) => {
        e.preventDefault();
        const courseToAdd: Course = {
            id: `cs${Math.floor(Math.random() * 1000)}`,
            ...newCourse,
        };
        setCourses(prev => [...prev, courseToAdd]);
        setIsModalOpen(false);
        // Reset form
        setNewCourse({ name: '', code: '', credits: 3, faculty: 'Dr. Robert Smith' });
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-dark">Course Management</h1>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
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
                                        <button className="font-medium text-primary hover:underline">Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Course">
                <form onSubmit={handleAddCourse} className="space-y-4">
                     <div>
                        <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">Course Name</label>
                        <input type="text" id="courseName" value={newCourse.name} onChange={e => setNewCourse({...newCourse, name: e.target.value})} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="courseCode" className="block text-sm font-medium text-gray-700">Course Code</label>
                        <input type="text" id="courseCode" value={newCourse.code} onChange={e => setNewCourse({...newCourse, code: e.target.value})} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                    </div>
                     <div>
                        <label htmlFor="credits" className="block text-sm font-medium text-gray-700">Credits</label>
                        <input type="number" id="credits" value={newCourse.credits} onChange={e => setNewCourse({...newCourse, credits: parseInt(e.target.value, 10)})} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                    </div>
                    <div className="flex justify-end pt-4">
                        <button type="button" onClick={() => setIsModalOpen(false)} className="bg-white py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
                            Cancel
                        </button>
                        <button type="submit" className="ml-3 px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                            Add Course
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default CourseManagement;
