import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor';

import { Box, Grid, Link, Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    subtitle: {
        width: '75%',
        marginBottom: '70px',
    },
}));

const Technologies = ({ technologies }) => {
    const classes = useStyles();

    return (
        <ScrollableAnchor id={'technologies'}>
            <Box my={12} display="flex" alignItems="center" flexDirection="column">
                <Typography variant="h3" align="center" component="h2" gutterBottom>
                    {technologies.title}
                </Typography>
                <Typography variant="subtitle1" align="center" component="p" gutterBottom className={classes.subtitle}>
                    {technologies.desc}
                </Typography>
                <Grid container spacing={4} direction="row" justify="center">
                    {technologies.techWeUse.map((technology, index) => {
                        return (
                            // <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={200}>
                            <Grid item container direction="column" md={3} xs={12} key={index}>
                                <Grid item container direction="row" justify="center" alignItems="center" spacing={3}>
                                    {technology.icons.map((tech, index) => {
                                        return (
                                            <Grid item key={index}>
                                                <ScrollAnimation
                                                    animateIn="fadeIn"
                                                    animateOnce={true}
                                                    delay={200 + index * 50}
                                                >
                                                    <Link href={tech.url} target="_blank">
                                                        <Tooltip title={tech.title} placement="top">
                                                            <img alt="react" src={tech.icon} height="50" />
                                                        </Tooltip>
                                                    </Link>
                                                </ScrollAnimation>
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                                <Grid item>
                                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                                        <Typography variant="h5" align="center" component="h3" gutterBottom>
                                            {technology.title}
                                        </Typography>
                                    </ScrollAnimation>
                                </Grid>
                                <Grid item>
                                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                                        <Typography variant="subtitle1" align="center" component="p">
                                            {technology.desc}
                                        </Typography>
                                    </ScrollAnimation>
                                </Grid>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </ScrollableAnchor>
    );
};

export default Technologies;
