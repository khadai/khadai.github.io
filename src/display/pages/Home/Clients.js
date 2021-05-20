import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import { Parallax } from 'react-scroll-parallax';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';

import aok from '../../../data/projects/aok.png';
import rapids from '../../../data/rapids.png';
import microbitcoin from '../../../data/projects/microbitcoin.png';
import sugarchain from '../../../data/projects/sugarchain.svg';
import fourth from '../../../data/backs/4.svg';

const useStyles = makeStyles((theme) => ({
    shape: {
        zIndex: '-1',
        [theme.breakpoints.down('md')]: {
            opacity: '0.4',
        },
    },
}));

const Clients = () => {
    const classes = useStyles();

    const fourthStyle = {
        position: 'absolute',
        right: 0,
    };

    return (
        <ScrollableAnchor id={'clients'}>
            <Box my={12}>
                <Parallax y={[50, -50]} styleInner={fourthStyle}>
                    <img alt="fourth" src={fourth} className={classes.shape} />
                </Parallax>
                <Grid container spacing={2} style={{ marginTop: 10 }} align="center" alignItems="center">
                    <Grid item md={12}>
                        <Typography variant="h3" align="center" component="h2" gutterBottom>
                            Clients we work with
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            style={{ width: '75%' }}
                            component="p"
                            gutterBottom
                        >
                            We work with companies that need a reliable partner in the software development field. We
                            dive into their business process to provide them the best solutions.
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3} sm={6}>
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={200}>
                            <Link href="https://aok.network" target="_blank">
                                <Tooltip title="AOK" placement="top">
                                    <img alt="aok" src={aok} width="50%" />
                                </Tooltip>
                            </Link>
                        </ScrollAnimation>
                    </Grid>
                    <Grid item xs={6} md={3} sm={6}>
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <Link href="https://rapidsnetwork.io" target="_blank">
                                <Tooltip title="Rapids" placement="top">
                                    <img alt="rapids" src={rapids} width="50%" />
                                </Tooltip>
                            </Link>
                        </ScrollAnimation>
                    </Grid>
                    <Grid item xs={6} md={3} sm={6}>
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={250}>
                            <Link href="https://microbitcoin.org/" target="_blank">
                                <Tooltip title="MicroBitcoin" placement="top">
                                    <img alt="microbitcoin" src={microbitcoin} width="50%" />
                                </Tooltip>
                            </Link>
                        </ScrollAnimation>
                    </Grid>
                    <Grid item xs={6} md={3} sm={6}>
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
                            <Link href="https://sugarchain.org/" target="_blank">
                                <Tooltip title="Sugarchain" placement="top">
                                    <img alt="sugarchain" src={sugarchain} width="50%" />
                                </Tooltip>
                            </Link>
                        </ScrollAnimation>
                    </Grid>
                </Grid>
            </Box>
        </ScrollableAnchor>
    );
};

export default Clients;
