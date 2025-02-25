import React from 'react';
import { assets } from '../assets/assets/assets.js';

function Contact() {
    return (
        <div>
            <div className='text-center text-2xl pt-10 text-gray-500'>
                <p>CONTACT<span className='text-gray-700 font-semibold'>US</span></p>
            </div>
            
            <div className='my-10 flex flex-col md:flex-row gap-12 px-8 items-center'>
                <figure className='w-full md:w-1/2 text-center overflow-hidden'>
                    <img 
                        src={assets.contact_image}
                        onError={(e) => {
                            console.error('Contact image failed to load');
                            e.target.src = assets.appointment_img; // Fallback to a working image
                        }}
                        alt="Contact" 
                        className='w-full max-h-[350px] md:max-h-[400px] object-contain rounded-[20px] shadow-lg hover:scale-102 transition-all duration-500 ease-in-out'
                    />
                </figure>

                <div className='w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md'>
                    <h2 className='text-2xl font-bold text-gray-700 mb-8'>OUR OFFICE</h2>
                    
                    <div className='space-y-6'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-gray-600 font-medium text-lg'>
                                Greenroad, Dhaka
                            </p>
                            <div className='space-y-3 mt-2'>
                                <p className='text-gray-600 flex items-center gap-2'>
                                    <span className='font-medium min-w-[80px]'>Tel:</span>
                                    <span>(000) 000-0000</span>
                                </p>
                                <p className='text-gray-600 flex items-center gap-2'>
                                    <span className='font-medium min-w-[80px]'>Email:</span>
                                    <span>doctordekhao@gmail.com</span>
                                </p>
                            </div>
                        </div>
                        
                        <div className='pt-5 border-t mt-5'>
                            <h3 className='text-xl font-semibold text-gray-700 mb-2'>CAREERS AT Doctor Dekhao</h3>
                            <p className='text-gray-600 mb-4'>
                                Learn more about our teams and job openings.
                            </p>
                            <button className='bg-primary text-white px-6 py-2.5 rounded-lg font-medium 
                                hover:bg-primary/90 transform hover:-translate-y-1 hover:shadow-lg 
                                transition-all duration-300 ease-in-out 
                                active:translate-y-0 active:shadow-md
                                flex items-center gap-2 group'>
                                Explore Jobs
                                <svg 
                                    className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;