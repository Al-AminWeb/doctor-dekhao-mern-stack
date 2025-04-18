import React from 'react';
import {assets} from '../assets/assets/assets.js';

function Footer(props) {
    return (
        <div className="md:mx-10">
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
                {/*left section*/}
                <div>
                    <h1 className="text-xl md:text-2xl font-bold">
                        Doctor <span className="text-primary">Dekhao</span>
                    </h1>
                    <p className="w-full md:w-2/3 text-gray-600 leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.</p>
                </div>
            {/*    Center section */}
                <div>
                    <p className="text-xl font-medium mb-5">Company</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>Get In Touch</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>
                            +8801889376328
                        </li>
                        <li>
                            doctordekhao@gmail.com
                        </li>
                    </ul>
                </div>
             </div>



        </div>
    );
}

export default Footer;