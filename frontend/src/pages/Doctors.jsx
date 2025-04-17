import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

function Doctors() {
    const { speciality } = useParams();
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [activeTab, setActiveTab] = useState('about');

    // Filter doctors based on speciality if provided
    const filteredDoctors = speciality 
        ? doctors.filter(doctor => doctor.speciality === speciality)
        : doctors;

    const handleDoctorClick = (doctor) => {
        setSelectedDoctor(doctor);
        setActiveTab('about'); // Reset to about tab when opening modal
    };

    const handleBookAppointment = (doctorId) => {
        navigate(`/appointment/${doctorId}`);
    };

    const handleCloseModal = () => {
        setSelectedDoctor(null);
        setActiveTab('about');
    };

    // Mock clinic data - In a real app, this would come from your backend
    const mockClinicInfo = {
        name: "HealthCare Clinic",
        hours: [
            { day: "Monday - Friday", time: "9:00 AM - 5:00 PM" },
            { day: "Saturday", time: "10:00 AM - 2:00 PM" },
            { day: "Sunday", time: "Closed" }
        ],
        facilities: ["Parking Available", "Wheelchair Accessible", "Lab Services", "Pharmacy"],
        emergencyContact: "+1 234 567 8900"
    };

    // Mock patient data - In a real app, this would come from your backend
    const mockPatients = [
        { id: 1, name: "John Doe", age: 35, lastVisit: "2024-02-15", condition: "Regular Checkup" },
        { id: 2, name: "Jane Smith", age: 28, lastVisit: "2024-02-14", condition: "Fever" },
        { id: 3, name: "Mike Johnson", age: 42, lastVisit: "2024-02-13", condition: "Blood Pressure" },
        { id: 4, name: "Sarah Williams", age: 31, lastVisit: "2024-02-12", condition: "Diabetes" },
    ];

    return (
        <div className='min-h-screen p-8'>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-3xl font-bold text-center mb-8'>
                    {speciality ? `${speciality} Specialists` : 'All Doctors'}
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {filteredDoctors.map((doctor) => (
                        <div 
                            key={doctor._id}
                            onClick={() => handleDoctorClick(doctor)}
                            className='cursor-pointer rounded-xl border border-gray-200 transition-all hover:shadow-lg overflow-hidden hover:border-primary/50'
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
                                <div className='flex items-center justify-center gap-2'>
                                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className='text-sm font-medium text-primary'>Fees: ${doctor.fees}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredDoctors.length === 0 && (
                    <div className='text-center text-gray-500 py-12'>
                        <p className='text-xl'>No doctors found {speciality ? `for ${speciality}` : ''}</p>
                    </div>
                )}

                {/* Doctor Details Modal */}
                {selectedDoctor && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-4">
                                        <img 
                                            src={selectedDoctor.image} 
                                            alt={selectedDoctor.name}
                                            className="w-20 h-20 rounded-full object-cover"
                                        />
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-800">{selectedDoctor.name}</h2>
                                            <p className="text-primary">{selectedDoctor.speciality}</p>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={handleCloseModal}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Tabs */}
                                <div className="flex border-b mb-6">
                                    <button
                                        className={`px-4 py-2 font-medium ${
                                            activeTab === 'about'
                                                ? 'text-primary border-b-2 border-primary'
                                                : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                        onClick={() => setActiveTab('about')}
                                    >
                                        About
                                    </button>
                                    <button
                                        className={`px-4 py-2 font-medium ${
                                            activeTab === 'clinic'
                                                ? 'text-primary border-b-2 border-primary'
                                                : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                        onClick={() => setActiveTab('clinic')}
                                    >
                                        Clinic
                                    </button>
                                    <button
                                        className={`px-4 py-2 font-medium ${
                                            activeTab === 'patients'
                                                ? 'text-primary border-b-2 border-primary'
                                                : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                        onClick={() => setActiveTab('patients')}
                                    >
                                        Patients
                                    </button>
                                </div>

                                {/* Tab Content */}
                                {activeTab === 'about' ? (
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">About</h3>
                                            <p className="text-gray-600">
                                                Dr. {selectedDoctor.name} is a highly qualified {selectedDoctor.speciality} with {selectedDoctor.experience} of experience.
                                                They hold a {selectedDoctor.degree} degree and specialize in providing comprehensive care to patients.
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <p className="text-sm text-gray-500">Experience</p>
                                                <p className="font-medium">{selectedDoctor.experience}</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <p className="text-sm text-gray-500">Consultation Fee</p>
                                                <p className="font-medium">${selectedDoctor.fees}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : activeTab === 'clinic' ? (
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">Clinic Address</h3>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <p className="font-medium text-gray-800">{mockClinicInfo.name}</p>
                                                <p className="text-gray-600 mt-1">
                                                    {selectedDoctor.address.line1}<br />
                                                    {selectedDoctor.address.line2}
                                                </p>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">Clinic Hours</h3>
                                            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                                                {mockClinicInfo.hours.map((schedule, index) => (
                                                    <div key={index} className="flex justify-between">
                                                        <span className="text-gray-600">{schedule.day}</span>
                                                        <span className="text-gray-800 font-medium">{schedule.time}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">Facilities Available</h3>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="grid grid-cols-2 gap-2">
                                                    {mockClinicInfo.facilities.map((facility, index) => (
                                                        <div key={index} className="flex items-center gap-2">
                                                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            <span className="text-gray-600">{facility}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">Emergency Contact</h3>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex items-center gap-2">
                                                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                    <span className="text-gray-800 font-medium">{mockClinicInfo.emergencyContact}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Patient Name
                                                        </th>
                                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Age
                                                        </th>
                                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Last Visit
                                                        </th>
                                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Condition
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    {mockPatients.map((patient) => (
                                                        <tr key={patient.id}>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <div className="text-sm font-medium text-gray-900">
                                                                    {patient.name}
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <div className="text-sm text-gray-500">
                                                                    {patient.age}
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <div className="text-sm text-gray-500">
                                                                    {patient.lastVisit}
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <div className="text-sm text-gray-500">
                                                                    {patient.condition}
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                <button
                                    onClick={() => handleBookAppointment(selectedDoctor._id)}
                                    className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors mt-6"
                                >
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Doctors;