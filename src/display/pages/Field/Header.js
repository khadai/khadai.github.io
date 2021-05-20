import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import ScrollAnimation from 'react-animate-on-scroll';

import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Parallax } from 'react-scroll-parallax';
import left from '../../../data/backs/1.svg';
import right from '../../../data/backs/2.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '150px',
    },
    icon: {
        fontSize: '45px',
        color: theme.palette.primary.main,
    },
    shape: {
        zIndex: '-1',
        [theme.breakpoints.down('xs')]: {
            visibility: 'hidden',
        },
        [theme.breakpoints.down('md')]: {
            opacity: '0.4',
        },
    },
}));

const Header = ({ headerInfo }) => {
    const classes = useStyles();

    const rightStyle = {
        position: 'absolute',
        right: 0,
        top: 0,
    };

    const leftStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
    };

    return (
        <ScrollableAnchor id="header">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <Box pt={6} display="flex" alignItems="center" flexDirection="column" className={classes.root}>
                    <Parallax y={[100, 0]} styleInner={leftStyle}>
                        <img alt="second" src={left} className={classes.shape} style={{ transform: 'scale(-1, 1)' }} />
                    </Parallax>
                    <Parallax y={[100, 0]} styleInner={rightStyle}>
                        <img alt="second" src={right} className={classes.shape} style={{ transform: 'scale(-1, 1)' }} />
                    </Parallax>
                    {/*<div className={classes.icon}>{headerInfo.icon}</div>*/}
                    <img alt="mobile" src={headerInfo.icon} height="45" />
                    <Typography variant="h2" component="h1" gutterBottom>
                        {headerInfo.title}
                    </Typography>
                    <Typography variant="subtitle1" component="p" gutterBottom style={{ width: '75%' }} align="center">
                        {headerInfo.description}
                    </Typography>
                    <Button
                        variant="contained"
                        href="#contact"
                        color="primary"
                        disableElevation
                        style={{ marginTop: 25 }}
                    >
                        Start out
                    </Button>
                </Box>
            </ScrollAnimation>
        </ScrollableAnchor>
    );
};

export default Header;
