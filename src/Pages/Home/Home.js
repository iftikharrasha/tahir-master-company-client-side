import React from 'react';
import Contact from '../../Components/Contact/Contact';
import Gallery from '../../Components/Gallery/Gallery';
import Hero from '../../Components/Hero/Hero';
import HomeSlider from '../../Components/HomeSlider/HomeSlider';
import Rent from '../../Components/Rent/Rent';
import Services from '../../Components/Services/Services';

const Home = () => {
    return (
        <>
            <main>
                <Hero/>
                <HomeSlider/>
                <Services/>
                <Gallery/>
                <Contact/>
                <Rent/>
            </main>
        </>
    );
};

export default Home;