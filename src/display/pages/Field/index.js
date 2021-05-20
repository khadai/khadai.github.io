import React, { useEffect } from 'react';
import { configureAnchors } from 'react-scrollable-anchor';
import { ParallaxProvider } from 'react-scroll-parallax';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Technologies from './Technologies';
import Steps from './Steps';
import ProjectsList from './ProjectsList';
import { ContactUs } from '../../components';

const Field = ({ projects, headerInfo, technologies, steps }) => {
    useEffect(() => {
        configureAnchors({ offset: -60, scrollDuration: 200 });
    });

    return (
        <ParallaxProvider>
            <Container>
                <Header headerInfo={headerInfo} />
                <Technologies technologies={technologies} />
                <Steps steps={steps} />
                <ProjectsList projects={projects} />
                <ContactUs />
            </Container>
        </ParallaxProvider>
    );
};

export { Field };
