import React, { useState } from 'react';
import { assets, doctors, specialityData } from '../assets/assets/assets.js';

// Add this to check if doctors are loaded
console.log('Doctors:', doctors);

function Appointment() {
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [appointmentData, setAppointmentData] = useState({
        date: '',
        time: '',
        reason: '',
    });
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSpeciality, setSelectedSpeciality] = useState('');
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [bookingStatus, setBookingStatus] = useState(''); // 'success' or 'error'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAppointmentData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowConfirmModal(true);
    };

    const confirmBooking = () => {
        // Here you would typically make an API call to save the appointment
        console.log('Booking appointment:', { doctor: selectedDoctor, ...appointmentData });
        setBookingStatus('success');
        setTimeout(() => {
            setShowConfirmModal(false);
            setBookingStatus('');
            // Reset form
            setSelectedDoctor('');
            setAppointmentData({
                date: '',
                time: '',
                reason: '',
            });
        }, 2000);
    };

    const filteredDoctors = doctors.filter(doctor => {
        const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            doctor.speciality.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSpeciality = !selectedSpeciality || doctor.speciality === selectedSpeciality;
        return matchesSearch && matchesSpeciality;
    });

    return (
        <div className='min-h-[80vh] p-8'>
            <div className='max-w-6xl mx-auto'>
                <h1 className='text-2xl font-bold text-center mb-8'>Book an Appointment</h1>

                <div className='bg-white rounded-lg shadow-md p-8'>
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        {/* Search and Filter */}
                        <div className='mb-6 space-y-4'>
                            <div className='flex gap-4'>
                                <input
                                    type="text"
                                    placeholder="Search doctors by name or speciality..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className='flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary'
                                />
                                <select
                                    value={selectedSpeciality}
                                    onChange={(e) => setSelectedSpeciality(e.target.value)}
                                    className='p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary'
                                >
                                    <option value="">All Specialities</option>
                                    {Array.from(new Set(doctors.map(d => d.speciality))).map(speciality => (
                                        <option key={speciality} value={speciality}>{speciality}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Doctor Selection */}
                        <div>
                            <h3 className='text-xl font-semibold mb-6'>Select Doctor</h3>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {filteredDoctors.length > 0 ? (
                                    filteredDoctors.map((doctor) => (
                                        <div 
                                            key={doctor._id}
                                            onClick={() => setSelectedDoctor(doctor._id)}
                                            className={`cursor-pointer rounded-xl border transition-all hover:shadow-lg overflow-hidden
                                                ${selectedDoctor === doctor._id 
                                                    ? 'border-primary bg-primary/5' 
                                                    : 'border-gray-200 hover:border-primary/50'}`}
                                        >
                                            {/* Image Container */}
                                            <div className='relative w-full h-40'>
                                                <div className='absolute inset-0 flex items-center justify-center'>
                                                    <img 
                                                        src={doctor.image} 
                                                        alt={doctor.name}
                                                        className='w-40 h-40 object-cover object-center rounded-full border-4 border-white shadow-lg' 
                                                    />
                                                </div>
                                                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 pb-3 pt-10 text-center'>
                                                    <p className='text-white font-medium'>{doctor.speciality}</p>
                                                    <p className='text-white/90 text-sm'>{doctor.degree}</p>
                                                </div>
                                            </div>

                                            {/* Content Container */}
                                            <div className='p-4 bg-white text-center'>
                                                <h4 className='font-semibold text-lg text-gray-800 mb-3'>{doctor.name}</h4>
                                                <div className='flex flex-col gap-2'>
                                                    <div className='flex items-center justify-center gap-2'>
                                                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <p className='text-sm text-gray-600'>Experience: {doctor.experience}</p>
                                                    </div>
                                                    <div className='flex items-center justify-center gap-2'>
                                                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <p className='text-sm font-medium text-primary'>Fees: ${doctor.fees}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className='col-span-3 text-center text-gray-500 py-8'>
                                        No doctors found matching your criteria
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Appointment Details */}
                        {selectedDoctor && (
                            <>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                                    <div>
                                        <label className='block text-gray-700 mb-2'>Date</label>
                                        <input 
                                            type="date" 
                                            name="date"
                                            value={appointmentData.date}
                                            onChange={handleChange}
                                            className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary'
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className='block text-gray-700 mb-2'>Time</label>
                                        <select 
                                            name="time"
                                            value={appointmentData.time}
                                            onChange={handleChange}
                                            className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary'
                                            required
                                        >
                                            <option value="">Select Time</option>
                                            <option value="09:00">09:00 AM</option>
                                            <option value="10:00">10:00 AM</option>
                                            <option value="11:00">11:00 AM</option>
                                            <option value="12:00">12:00 PM</option>
                                            <option value="14:00">02:00 PM</option>
                                            <option value="15:00">03:00 PM</option>
                                            <option value="16:00">04:00 PM</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className='block text-gray-700 mb-2'>Reason for Visit</label>
                                    <textarea 
                                        name="reason"
                                        value={appointmentData.reason}
                                        onChange={handleChange}
                                        className='w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary h-32'
                                        placeholder="Please describe your symptoms or reason for visit..."
                                        required
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit"
                                    className='w-full bg-primary text-white py-3 rounded-lg font-medium
                                        hover:bg-primary/90 transform hover:-translate-y-0.5 
                                        transition-all duration-150
                                        shadow-md hover:shadow-lg mt-6'
                                >
                                    Book Appointment
                                </button>
                            </>
                        )}
                    </form>
                </div>
            </div>

            {/* Confirmation Modal */}
            {showConfirmModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
                        {bookingStatus === 'success' ? (
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Appointment Booked!</h3>
                                <p className="text-gray-600">Your appointment has been successfully scheduled.</p>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Confirm Appointment</h3>
                                <div className="space-y-3 mb-6">
                                    <p className="text-gray-600">
                                        <span className="font-medium">Doctor:</span> {doctors.find(d => d._id === selectedDoctor)?.name}
                                    </p>
                                    <p className="text-gray-600">
                                        <span className="font-medium">Date:</span> {appointmentData.date}
                                    </p>
                                    <p className="text-gray-600">
                                        <span className="font-medium">Time:</span> {appointmentData.time}
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        onClick={confirmBooking}
                                        className="flex-1 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors"
                                    >
                                        Confirm
                                    </button>
                                    <button
                                        onClick={() => setShowConfirmModal(false)}
                                        className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Appointment;