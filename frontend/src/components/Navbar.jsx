import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets/assets.js';

function Navbar(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCreateAccount = () => {
        navigate('/login');
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-white shadow-md p-4 sticky top-0 z-50 mb-10">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl md:text-2xl font-bold">
                    Doctor <span className="text-primary">Dekhao</span>
                </h1>

                {/* Toggle for Mobile */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-600 hover:text-primary transition-colors"
                    >
                        {isMenuOpen ? (
                            // X icon for close
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger icon for menu
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex space-x-8">
                    <NavLink to="/" className={({ isActive }) =>
                        `transition-colors ${isActive ? "text-primary" : "text-gray-600 hover:text-primary"}`
                    }>
                        <li>Home</li>
                    </NavLink>

                    <NavLink to="/doctors" className={({ isActive }) =>
                        `transition-colors ${isActive ? "text-primary" : "text-gray-600 hover:text-primary"}`
                    }>
                        <li>All Doctors</li>
                    </NavLink>

                    <NavLink to="/about" className={({ isActive }) =>
                        `transition-colors ${isActive ? "text-primary" : "text-gray-600 hover:text-primary"}`
                    }>
                        <li>About</li>
                    </NavLink>

                    <NavLink to="/contact" className={({ isActive }) =>
                        `transition-colors ${isActive ? "text-primary" : "text-gray-600 hover:text-primary"}`
                    }>
                        <li>Contact</li>
                    </NavLink>
                </ul>

                {/* Desktop Button/Profile */}
                <div className="hidden lg:block">
                    {
                        token
                            ? <div className="flex items-center gap-2 cursor-pointer group relative">
                                <img
                                    src={assets.profile_pic}
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full object-cover"
                                />
                                <img
                                    src={assets.dropdown_icon}
                                    alt="Menu"
                                    className="w-2.5"
                                />
                                <div className="absolute top-full right-0 mt-2 bg-stone-100 shadow-lg rounded-md overflow-hidden invisible group-hover:visible transition-all duration-300">
                                    <div className="py-2 w-48">
                                        <p onClick={() => navigate('/my-profile')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Profile</p>
                                        <p onClick={() => navigate('/my-appointments')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Appointments</p>
                                        <p onClick={() => setToken(false)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600">Logout</p>
                                    </div>
                                </div>
                            </div>
                            : <button
                                onClick={handleCreateAccount}
                                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
                            >
                                Create Account
                            </button>
                    }
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <ul className="flex flex-col space-y-4 pt-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `transition-colors ${isActive ? "text-primary" : "text-gray-600 hover:text-primary"}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <li>Home</li>
                    </NavLink>

                    <NavLink
                        to="/doctors"
                        className={({ isActive }) =>
                            `transition-colors ${isActive ? "text-primary" : "text-gray-600 hover:text-primary"}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <li>All Doctors</li>
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `transition-colors ${isActive ? "text-primary" : "text-gray-600 hover:text-primary"}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <li>About</li>
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `transition-colors ${isActive ? "text-primary" : "text-gray-600 hover:text-primary"}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <li>Contact</li>
                    </NavLink>
                </ul>

                {/* Mobile Button */}
                <div className="mt-4 pb-4">
                    {
                        token
                            ? <div className="flex items-center gap-2 cursor-pointer group relative">
                                <img
                                    src={assets.profile_pic}
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full object-cover"
                                />
                                <img
                                    src={assets.dropdown_icon}
                                    alt="Menu"
                                    className="w-2.5"
                                />
                                <div className="absolute top-full right-0 mt-2 bg-stone-100 shadow-lg rounded-md overflow-hidden invisible group-hover:visible transition-all duration-300">
                                    <div className="py-2 w-48">
                                        <p onClick={() => navigate('/my-profile')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Profile</p>
                                        <p onClick={() => navigate('/my-appointments')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Appointments</p>
                                        <p onClick={() => setToken(false)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600">Logout</p>
                                    </div>
                                </div>
                            </div>
                            : <button
                                onClick={handleCreateAccount}
                                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors w-full"
                            >
                                Create Account
                            </button>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
