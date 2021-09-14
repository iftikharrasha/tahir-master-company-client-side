import React from 'react';
import Hero from '../../Components/Hero/Hero';
import HeroSlider from '../../Components/HeroSlider/HeroSlider';
import Services from '../../Components/Services/Services';

const Home = () => {
    return (
        <>
            <main>
                <Hero/>
                <HeroSlider/>
                <Services/>
            </main>
        </>
    );
};

export default Home;