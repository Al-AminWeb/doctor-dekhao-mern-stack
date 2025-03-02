import React, { useState } from 'react';
import { assets } from '../assets/assets/assets.js';

function MyProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
        name: "XYZ",
        email: "abc@example.com",
        phone: "0177777777",
        location: "Mirpur,Dhaka",
        medicalHistory: ""
    });

    const [reports, setReports] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        setIsEditing(false);
        // Add your save logic here
        console.log('Saving:', userData);
    };

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        setReports(prev => [...prev, ...files]);
    };

    return (
        <div className='min-h-[80vh] p-8'>
            <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8'>
                <div className='flex flex-col md:flex-row gap-8 items-start'>
                    {/* Profile Picture Section */}
                    <div className='w-full md:w-1/3 flex flex-col items-center'>
                        <div className='relative'>
                            <img 
                                src={assets.profile_pic} 
                                alt="Profile" 
                                className='w-48 h-48 rounded-full object-cover border-4 border-primary'
                            />
                            <button className='absolute bottom-2 right-2 bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-all'>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </button>
                        </div>
                        <h2 className='text-2xl font-bold mt-4'>{userData.name}</h2>
                        <p className='text-gray-600'>{userData.email}</p>
                    </div>

                    {/* Profile Details Section */}
                    <div className='w-full md:w-2/3 space-y-6'>
                        <div className='flex justify-between items-center'>
                            <h3 className='text-xl font-semibold'>Personal Information</h3>
                            <button 
                                onClick={() => isEditing ? handleSubmit() : setIsEditing(true)}
                                className='text-primary hover:text-primary/80 flex items-center gap-2'
                            >
                                {isEditing ? (
                                    <span className='text-green-600'>Save Changes</span>
                                ) : (
                                    <>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                        <span>Edit Profile</span>
                                    </>
                                )}
                            </button>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <p className='text-gray-600'>Full Name</p>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={userData.name}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-50'
                                />
                            </div>
                            <div>
                                <p className='text-gray-600'>Email</p>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={userData.email}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-50'
                                />
                            </div>
                            <div>
                                <p className='text-gray-600'>Phone</p>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    value={userData.phone}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-50'
                                />
                            </div>
                            <div>
                                <p className='text-gray-600'>Location</p>
                                <input 
                                    type="text" 
                                    name="location"
                                    value={userData.location}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-50'
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className='text-xl font-semibold mb-4'>Medical History</h3>
                            <textarea 
                                name="medicalHistory"
                                value={userData.medicalHistory}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className='w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary h-32 disabled:bg-gray-50'
                                placeholder="Add your medical history..."
                            ></textarea>
                        </div>

                        {/* Add this Reports Section after Medical History */}
                        <div className='mt-8 border-t pt-8'>
                            <div className='flex justify-between items-center mb-4'>
                                <h3 className='text-xl font-semibold'>Medical Reports</h3>
                                <label 
                                    htmlFor="file-upload"
                                    className='cursor-pointer bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2'
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                    Add Report
                                </label>
                                <input 
                                    id="file-upload"
                                    type="file" 
                                    multiple
                                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                    onChange={handleFileUpload}
                                    className='hidden'
                                />
                            </div>

                            <div className='space-y-3'>
                                {reports.length === 0 ? (
                                    <p className='text-gray-500 text-center py-8'>No reports uploaded yet</p>
                                ) : (
                                    reports.map((file, index) => (
                                        <div key={index} className='flex items-center justify-between p-3 bg-gray-50 rounded-lg'>
                                            <div className='flex items-center gap-3'>
                                                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                <div>
                                                    <p className='font-medium'>{file.name}</p>
                                                    <p className='text-sm text-gray-500'>
                                                        {(file.size / 1024 / 1024).toFixed(2)} MB
                                                    </p>
                                                </div>
                                            </div>
                                            <button 
                                                onClick={() => setReports(reports.filter((_, i) => i !== index))}
                                                className='text-red-500 hover:text-red-600 p-1'
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;