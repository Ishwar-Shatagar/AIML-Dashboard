import React from 'react';
import Card from '../components/ui/Card';

const FacultyExamCreate: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Exam creation functionality not implemented in this demo.');
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-dark">Create New Examination</h1>
            <Card>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="examName" className="block text-sm font-medium text-gray-700 mb-1">Exam Name</label>
                        <input type="text" id="examName" className="mt-1 block w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" placeholder="e.g., Mid-Term Examination" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Course</label>
                            <select id="course" className="mt-1 block w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm">
                                <option>Computer Science</option>
                                <option>Mechanical Engineering</option>
                                <option>Electronics & Communication</option>
                            </select>
                        </div>
                         <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <select id="subject" className="mt-1 block w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm">
                                <option>Data Structures</option>
                                <option>Algorithms</option>
                                <option>Database Systems</option>
                            </select>
                        </div>
                    </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="examDate" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                            <input type="date" id="examDate" className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="examDuration" className="block text-sm font-medium text-gray-700 mb-1">Duration (in minutes)</label>
                            <input type="number" id="examDuration" placeholder="180" className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-1">Instructions</label>
                        <textarea id="instructions" rows={4} className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter any special instructions for students..."></textarea>
                    </div>

                    <div className="flex justify-end pt-4">
                        <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                            Cancel
                        </button>
                        <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-accent hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
                            Create Exam
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default FacultyExamCreate;