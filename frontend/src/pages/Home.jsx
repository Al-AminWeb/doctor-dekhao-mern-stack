import React from 'react';
import Header from '../components/Header';
import SpecialityMenu from '../components/SpecialityMenu';
import TopDoctors from '../components/TopDoctors';
import Banner from '../components/Banner';
import Footer from "../components/Footer.jsx";

function Home(props) {
    return (
        <div className='min-h-screen bg-white'>
            <Header/>
            <SpecialityMenu/>
            <TopDoctors/>
            <Banner/>
            <Footer/>
        </div>
    );
}

export default Home;