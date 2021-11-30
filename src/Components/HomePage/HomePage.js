import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import ProjectSection from '../ProjectSection/ProjectSection';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <ProjectSection></ProjectSection>
            <Contact></Contact>
        </div>
    );
};

export default HomePage;