import React from 'react';
import { assets } from '../assets/assets/assets.js';

const Header = () => {
    console.log('Assets:', assets);
    console.log('Header image:', assets.header_img);
    console.log('Group profiles:', assets.group_profiles);
    console.log('Arrow icon:', assets.arrow_icon);

    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg-px-20 mt-10'>
            {/* Left Side */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[30px]'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    Book Appointment<br/>With Trusted Doctors
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-whte text-sm font-light '>
                    <img 
                        src={assets.group_profiles} 
                        alt="Group Profiles" 
                        className='w-28 '
                    />
                    <p className=''>
                        Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block'/>
                        Schedule your appointment
                    </p>
                </div>
                <a 
                    href="#" 
                    className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'
                >
                    Book appointment 
                    <img 
                        src={assets.arrow_icon} 
                        alt="Arrow" 
                        className='w-3'
                    />
                </a>
            </div>

            {/* Right Side */}
            <div className='md:w-1/2 relative'>
                <img 
                    src={assets.header_img} 
                    alt="Header" 
                    className='w-full md:absolute bottom-0 h-auto rounded-lg '
                />
            </div>
        </div>
    );
}

export default Header;