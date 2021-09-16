import React from 'react';
import Contact from '../../Components/Contact/Contact';
import Gallery from '../../Components/Gallery/Gallery';
import Hero from '../../Components/Hero/Hero';
import HomeSlider from '../../Components/HomeSlider/HomeSlider';
import Impressum from '../../Components/Impressum/Impressum';
import Rent from '../../Components/Rent/Rent';
import Services from '../../Components/Services/Services';

const Home = () => {
    return (
        <>
            <main className="main">
                <Hero/>
                <HomeSlider/>
                <Services/>
                <Gallery/>
                <Contact/>
                <Rent/>
                <Impressum/>
            </main>
        </>
    );
};

export default Home;