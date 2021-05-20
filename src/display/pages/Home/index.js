import { configureAnchors } from 'react-scrollable-anchor';
import { ParallaxProvider } from 'react-scroll-parallax';
import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';

import Header from './Header';
import Benefits from './Benefits';
import Clients from './Clients';
import Technologies from './Technologies';
import Fields from './Fields';
import Team from './Team';
import {ContactUs} from "../../components";

const Home = () => {
    useEffect(() => {
        configureAnchors({ offset: -60, scrollDuration: 200 });
    });

    return (
        <ParallaxProvider>
            <Container>
                <Header />
                <Benefits />
                <Clients />
                <Technologies />
                <Fields />
                <Team />
                <ContactUs />
            </Container>
        </ParallaxProvider>
    );
};

Home.propTypes = {};

export { Home };
