import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import ScrollAnimation from 'react-animate-on-scroll';
import { Box, Grid, Hidden, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import arrowRight from '../../../data/arrows/arrow-down-right.png';
import arrowLeft from '../../../data/arrows/arrow-down-left.png';
import { Parallax } from 'react-scroll-parallax';
import right from '../../../data/backs/3.svg';
import left from '../../../data/backs/4.svg';

const useStyles = makeStyles((theme) => ({
    listNumber: {
        color: theme.palette.primary.transparent.light,
        fontWeight: 'lighter',
        paddingLeft: '27px',
    },
    subtitle: {
        width: '75%',
    },
    arrow: {
        height: '50%',
        width: '50%',
    },
    evenListItem: {
        marginTop: '110px',
        marginBottom: '110px',
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

const Steps = ({ steps }) => {
    const classes = useStyles();
    const rightStyle = {
        position: 'absolute',
        right: 0,
    };

    const leftStyle = {
        position: 'absolute',
        left: 0,
    };

    const listLength = steps.length;

    return (
        <ScrollableAnchor id={'technologies'}>
            <Grid container alignItems="center">
                <Parallax y={[100, 0]} styleInner={leftStyle}>
                    <img alt="second" src={left} className={classes.shape} style={{ transform: 'scale(-1, -1)' }} />
                </Parallax>
                <Parallax y={[100, 0]} styleInner={rightStyle}>
                    <img alt="second" src={right} className={classes.shape} style={{ transform: 'scale(-1, 1)' }} />
                </Parallax>

                {steps.map((step, index) => {
                    if (index % 2) {
                        //ListItem with arrows
                        return (
                            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={index * 50}>
                                <Box key={index}>
                                    <Hidden smDown>
                                        <Grid container item direction="row" xs={11} justify="flex-end">
                                            <Grid item md={2}>
                                                <Box display="flex" flexDirection="column" alignItems="flex-end">
                                                    <img
                                                        alt="arrow"
                                                        src={arrowRight}
                                                        style={{ paddingBottom: '40px' }}
                                                        className={classes.arrow}
                                                    />
                                                    <img
                                                        alt="arrow"
                                                        src={arrowLeft}
                                                        className={classes.arrow}
                                                        hidden={index === listLength - 1}
                                                    />
                                                </Box>
                                            </Grid>
                                            <Grid item md={2}>
                                                <Typography
                                                    variant="h2"
                                                    align="left"
                                                    color="textSecondary"
                                                    className={`${classes.listNumber} ${classes.evenListItem}`}
                                                >
                                                    {step.id}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={9} md={7} className={classes.evenListItem}>
                                                <Typography variant="h3" component="h2" gutterBottom>
                                                    {step.title}
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    component="p"
                                                    gutterBottom
                                                    className={classes.subtitle}
                                                >
                                                    {step.desc}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Hidden>
                                    <Hidden mdUp>
                                        <Grid
                                            container
                                            item
                                            direction="row"
                                            xs={11}
                                            justify="flex-end"
                                            alignItems="center"
                                        >
                                            <Grid item xs={3}>
                                                <Typography
                                                    variant="h2"
                                                    align="center"
                                                    color="textSecondary"
                                                    className={classes.listNumber}
                                                >
                                                    {step.id}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={9} md={7}>
                                                <Typography variant="h3" component="h2" gutterBottom>
                                                    {step.title}
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    component="p"
                                                    gutterBottom
                                                    className={classes.subtitle}
                                                >
                                                    {step.desc}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Hidden>
                                </Box>
                            </ScrollAnimation>
                        );
                    }
                    //ListItem without arrows
                    return (
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={index * 50}>
                            <Grid key={index} container item direction="row" xs={11} alignItems="center">
                                <Grid item xs={3}>
                                    <Typography
                                        variant="h2"
                                        align="center"
                                        color="textSecondary"
                                        className={classes.listNumber}
                                    >
                                        {step.id}
                                    </Typography>
                                </Grid>
                                <Grid item xs={9}>
                                    <Typography variant="h3" component="h2" gutterBottom>
                                        {step.title}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        component="p"
                                        className={classes.subtitle}
                                        gutterBottom
                                    >
                                        {step.desc}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </ScrollAnimation>
                    );
                })}
            </Grid>
        </ScrollableAnchor>
    );
};

export default Steps;
