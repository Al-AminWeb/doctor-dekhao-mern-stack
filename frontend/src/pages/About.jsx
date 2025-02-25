import React from 'react'
import { assets } from '../assets/assets/assets.js';

const About = () => {
    return (
        <div>
            {/* About Us Title */}
            <div className='flex justify-center items-center text-2xl pt-10 text-gray-500'>
                <h1 className='flex items-center gap-2'>
                    <span>ABOUT</span>
                    <span className='text-gray-700 font-medium'>US</span>
                </h1>
            </div>

            {/* About Section */}
            <div className='my-10 flex flex-col md:flex-row gap-12 px-8 items-center'>
                <figure className='w-full md:w-1/2 text-center'>
                    <img 
                        src={assets.about_image} 
                        alt="About" 
                        className='w-full rounded-lg shadow-lg mb-3'
                    />
                    <figcaption className='text-sm text-gray-600 mt-2'>
                        Your Healthcare Journey Starts Here
                    </figcaption>
                </figure>
                <div className='space-y-4'>
                    <p>Welcome to Doctor Dekhao, your trusted partner in managing your healthcare needs conveniently and efficiently. At Doctor Dekhao, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
                    <p>Doctor Dekhao is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Doctor Dekhao is here to support you every step of the way.</p>
                    <b className='block text-xl font-semibold mt-6 mb-2'>Our Vision</b>
                    <p>Our vision at Doctor Dekhao is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
                </div>
            </div>
            <div className='text-2xl my-5 flex justify-center items-center gap-2 text-center w-full'>
                <p className='text-center'>WHY<span className='text-gray-700 font-semibold'> CHOOSE US</span></p>
            </div>
            <div className='flex flex-col md:flex-row mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl text-gray-600 cursor-pointer'>
                    <b className='text-lg'>EFFICIENCY:</b>
                    <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl text-gray-600 cursor-pointer'>
                    <b className='text-lg'>CONVENIENCE:</b>
                    <p>Access to a network of trusted healthcare professionals in your area</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl text-gray-600 cursor-pointer'>
                    <b className='text-lg'>PERSONALIZATION:</b>
                    <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
                </div>
            </div>
        </div>
    );
};

export default About;

