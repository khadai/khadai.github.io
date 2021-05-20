import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ErrorComponent, Field, Home } from '../pages';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { Footer, Nav } from '../components';
import aok from '../../data/projects/aok-artboard.png';
import microbitcoin from '../../data/projects/microbitcoin-artboard.jpg';
import harry from '../../data/projects/harry-artboard.jpg';
import skymoon from '../../data/projects/skymoon-artboard.png';
import rapid from '../../data/projects/rpd-artboard.png';
import sugarchain from '../../data/projects/sugarchain-artboard.jpg';

import react from '../../data/technologies/react.png';
import redux from '../../data/technologies/redux.svg';
import java from '../../data/technologies/java.png';
import swift from '../../data/technologies/swift.png';
import kotlin from '../../data/technologies/kotlin.png';
import laravel from '../../data/technologies/laravel.svg';
import nlp from '../../data/technologies/nlp.png';
import cv from '../../data/technologies/cv.png';
import flask from '../../data/technologies/flask.svg';

import mobile from '../../data/fieldIcons/mobile.png';
import ai from '../../data/fieldIcons/ai.png';
import blockchain from '../../data/fieldIcons/blockchain.png';
import web from '../../data/fieldIcons/web.png';

const projects = [
    [
        {
            poster: aok,
            title: 'AOK - Blockchain-based Platform',
            description:
                'Secure Proof-of-Stake Blockchain technology that reorganizes the world distribution industry.',
        },
        {
            poster: rapid,
            title: 'Rapid - Network Cryptocurrency',
            description:
                'Contemporary solution for social payments. Payments across social media through a secure network driven by cryptography and community.',
        },
        {
            poster: sugarchain,
            title: 'Sugarchain - PoW Blockchain',
            description:
                'Decentralized, peer-to-peer (P2P) digital currency and payment network supported by an open-source blockchain protocol',
        },
        {
            poster: skymoon,
            title: 'SkyMoonSoft - Modular ICO',
            description: 'Modular ICO business and marketing solutions with packaged purchase options.',
        },
    ],
    [
        {
            poster: aok,
            title: 'AOK Wallet',
            description:
                'Secure Proof-of-Stake Blockchain technology that reorganizes the world distribution industry.',
        },
        {
            poster: rapid,
            title: 'Rapid Network Wallet',
            description:
                'Contemporary solution for social payments. Payments across social media through a secure network driven by cryptography and community.',
        },
        {
            poster: microbitcoin,
            title: 'MicroBitcoin Wallet',
            description:
                'Payments protocol built on blockchain technology, with decentralization and peer-to-peer payments.',
        },
        {
            poster: sugarchain,
            title: 'Sugarchain Wallet',
            description:
                'Decentralized, peer-to-peer (P2P) digital currency and payment network supported by an open-source blockchain protocol',
        },
    ],
    [
        {
            poster: aok,
            title: 'AOK Network',
            description:
                'Secure Proof-of-Stake Blockchain technology that reorganizes the world distribution industry.',
        },
        {
            poster: microbitcoin,
            title: 'MicroBitcoin Network',
            description:
                'Payments protocol built on blockchain technology, with decentralization and peer-to-peer payments.',
        },
        {
            poster: rapid,
            title: 'Rapid Network',
            description:
                'Contemporary solution for social payments. Payments across social media through a secure network driven by cryptography and community.',
        },
    ],
    [
        {
            poster: harry,
            title: 'Harry Bot - Speech-to-Text Bot',
            description:
                'Bot translates the voice messages into text in popular messengers. Participator of Y Combinator Startup School Batch.',
        },
    ],
];
const headersInfo = [
    {
        icon: web,
        title: 'Web app',
        description:
            'The Web development process consists of design, development, debugging, and integrations. All of those business needs could be covered by our team of experts.',
    },
    {
        icon: mobile,
        title: 'Mobile app',
        description:
            'The Mobile development process consists of design, development, debugging, and integrations. All of those business needs could be covered by our team of experts.',
    },
    {
        icon: blockchain,
        title: 'Blockchain',
        description:
            'The main challenges in blockchain are: security, software infrastructure scalability, API connectivity. Our production team will provide efficient decentralized solution for you.',
    },
    {
        icon: ai,
        title: 'Artificial Intelligence',
        description:
            'Initially, we are researchers in the AI field, and our mission is to create something new to solve business problems. In this field, we work with a limited amount of case studies and tools.',
    },
];
const technologies = [
    {
        title: 'The technologies that we use',
        desc: 'Initially, we are engineers, and our mission is to find the most elegant and economical solutions to business problems. In our work, we use various tools, technologies, and programming languages.',
        techWeUse: [
            {
                title: 'Frontend',
                desc: 'Using React/Redux technologies we can create great web app UI',
                icons: [
                    {
                        title: 'React',
                        icon: react,
                        url: 'https://reactnative.dev/',
                    },
                    {
                        title: 'Redux',
                        icon: redux,
                        url: 'https://redux.js.org/',
                    },
                ],
            },
            {
                title: 'Backend',
                desc: 'With such powerful frameworks as Flask and Laravel we can easily meet all your needs',
                icons: [
                    {
                        title: 'Flask',
                        icon: flask,
                        url: 'https://palletsprojects.com/p/flask/',
                    },
                    {
                        title: 'Laravel',
                        icon: laravel,
                        url: 'https://laravel.com/',
                    },
                ],
            },
        ],
    },
    {
        title: 'The technologies that we use',
        desc: 'Initially, we are engineers, and our mission is to find the most elegant and economical solutions to business problems. In our work, we use various tools, technologies, and programming languages.',
        techWeUse: [
            {
                title: 'Cross-platform solution',
                desc: 'Using React Native technology we can create app for everything from smartphones to smart TV.',
                icons: [
                    {
                        title: 'React',
                        icon: react,
                        url: 'https://reactnative.dev/',
                    },
                    {
                        title: 'Redux',
                        icon: redux,
                        url: 'https://redux.js.org/',
                    },
                ],
            },
            {
                title: 'Native app',
                desc: 'Using native mobile app development tools, we can provide optimized solutions for each mobile platform like iOS and Android.',
                icons: [
                    {
                        title: 'Java',
                        icon: java,
                        url: 'https://www.java.com/',
                    },
                    {
                        title: 'Swift',
                        icon: swift,
                        url: 'https://developer.apple.com/swift/',
                    },
                    {
                        title: 'Kotlin',
                        icon: kotlin,
                        url: 'https://kotlinlang.org//',
                    },
                ],
            },
        ],
    },
    {
        title: 'The technologies that we use',
        desc: 'Initially, we are engineers, and our mission is to find the most elegant and economical solutions to business problems. In our work, we use various tools, technologies, and programming languages.',
        techWeUse: [
            {
                title: 'Blockchain fork',
                desc: 'Split any well-known blockchain network and optimize it for your business needs.',
                icons: [],
            },
            {
                title: 'Custom blockchain',
                desc: 'Create a custom private Blockchain solution for your business purposes.',
                icons: [],
            },
        ],
    },
    {
        title: 'The case studies we work with',
        desc: 'Initially, we are researchers in the AI field, and our mission is to create something new to solve business problems. In this field, we work with a limited amount of case studies and tools.',
        techWeUse: [
            {
                title: 'NLP (Natural language processing)',
                desc: 'Products to automatically understand human languages, and also to automatically write/speak in human languages.',
                icons: [
                    {
                        title: 'Natural language processing',
                        icon: nlp,
                        url: 'https://en.wikipedia.org/wiki/Natural_language_processing',
                    },
                ],
            },
            {
                title: 'Computer vision',
                desc: 'Process visual information to interpret it using AI',
                icons: [
                    {
                        title: 'Computer vision',
                        icon: cv,
                        url: 'https://en.wikipedia.org/wiki/Computer_vision',
                    },
                ],
            },
        ],
    },
];
const steps = [
    [
        {
            id: '#01',
            title: 'Understand',
            desc: 'The key step of all projects, our product team establish with your meeting and try to understand your needs and plans, simultaneously try to provide our ideas on how to overcome your pains with software solutions.',
        },
        {
            id: '#02',
            title: 'Design',
            desc: 'The design team goes through all customer business requirements and recreates everything into beautiful app mockups, and keeps working until all needs would be covered fully.',
        },
        {
            id: '#03',
            title: 'Prototype',
            desc: 'The development team goes through app mockups and meetings backlog to create initial prototype of the future app.',
        },
        {
            id: '#04',
            title: 'Test',
            desc: 'Validation phase of the project, at this phase dev team continue development process fix bugs and make updates.',
        },
        {
            id: '#05',
            title: 'Release',
            desc: 'After finalizing the test phase, the web product is ready to be release for users, our team provides all required deployment services to make your web app run smoothly.',
        },
    ],
    [
        {
            id: '#01',
            title: 'Understand',
            desc: 'The key step of all projects, our product team establish with your meeting and try to understand your needs and plans, simultaneously try to provide our ideas on how to overcome your pains with software solutions.',
        },
        {
            id: '#02',
            title: 'Design',
            desc: 'The design team goes through all customer business requirements and recreates everything into beautiful app mockups, and keeps working until all needs would be covered fully.',
        },
        {
            id: '#03',
            title: 'Prototype',
            desc: 'The development team goes through app mockups and meetings backlog to create initial prototype of the future app.',
        },
        {
            id: '#04',
            title: 'Test',
            desc: 'Validation phase of the project, at this phase dev team continue development process fix bugs and make updates.',
        },
        {
            id: '#05',
            title: 'Release',
            desc: 'After finalizing the test phase, the mobile app is ready to be released for users, our team provides consultation and helps with listing in the mobile stores, such as the App Store and Google Play.',
        },
    ],
    [
        {
            id: '#01',
            title: 'Understand',
            desc: 'The key step of all projects, our product team establish with your meeting and try to understand your needs and plans, simultaneously try to provide our ideas on how to overcome your pains with software solutions.',
        },
        {
            id: '#02',
            title: 'Design',
            desc: 'The design team goes through all customer business requirements and recreates everything into beautiful app mockups, and keeps working until all needs would be covered fully.',
        },
        {
            id: '#03',
            title: 'Testnet',
            desc: 'The development team goes through whitepaper and project design, took into consideration meetings backlog to create initial prototype of the future decentralized app.',
        },
        {
            id: '#04',
            title: 'Mainnet',
            desc: 'After delivering all required features and their validation on the test net, our development team helps you to set up the main net and deploy all required infrastructure for your decentralized solution.',
        },
    ],
    [],
];

const Application = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Nav />
                <Switch>
                    <Route path="/" render={() => <Home />} exact />
                    <Route
                        path="/web"
                        render={() => (
                            <Field
                                projects={projects[0]}
                                headerInfo={headersInfo[0]}
                                technologies={technologies[0]}
                                steps={steps[0]}
                            />
                        )}
                        exact
                    />
                    <Route
                        path="/mobile"
                        render={() => (
                            <Field
                                projects={projects[1]}
                                headerInfo={headersInfo[1]}
                                technologies={technologies[1]}
                                steps={steps[1]}
                            />
                        )}
                        exact
                    />
                    <Route
                        path="/blockchain"
                        render={() => (
                            <Field
                                projects={projects[2]}
                                headerInfo={headersInfo[2]}
                                technologies={technologies[2]}
                                steps={steps[2]}
                            />
                        )}
                        exact
                    />
                    <Route
                        path="/ai"
                        render={() => (
                            <Field
                                projects={projects[3]}
                                headerInfo={headersInfo[3]}
                                technologies={technologies[3]}
                                steps={steps[3]}
                            />
                        )}
                        exact
                    />
                    <Route component={ErrorComponent} />
                </Switch>
                <Footer />
            </ThemeProvider>
        </BrowserRouter>
    );
};

Application.propTypes = {};

export default Application;
