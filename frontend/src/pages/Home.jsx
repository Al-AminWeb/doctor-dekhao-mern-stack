import React from 'react';
import Header from '../components/Header';
import SpecialityMenu from '../components/SpecialityMenu';
import TopDoctors from '../components/TopDoctors';

function Home(props) {
    return (
        <div className='min-h-screen bg-white'>
            <Header/>
            <SpecialityMenu/>
            <TopDoctors/>
        </div>
    );
}

export default Home;