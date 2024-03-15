import React from 'react';
import Hero from "./hero/Hero";
import AboutCard from '../about/AboutCard';
import HAbout from './HAbout';
import Test from './testimonial/test/Test';
import Hblog from "./testimonial/hblog/Hblog";

const Home = () => {
    return (
        <>
            <Hero />
            <br /><br /><br />
            <AboutCard />
            <HAbout />
            <br /><br />
            <Test />
            <br /><br />
            <Hblog />
        </>
    )
}

export default Home