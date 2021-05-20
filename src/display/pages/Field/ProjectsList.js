import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor';

import Project from '../../components/Project';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    subtitle: {
        width: '75%',
        marginBottom: '40px',
    },
}));

const ProjectsList = ({ projects }) => {
    const classes = useStyles();

    return (
        <ScrollableAnchor id={'fields'}>
            <Box my={12}>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={200}>
                    <Grid container spacing={2} align="center">
                        <Grid item md={12}>
                            <Typography variant="h3" align="center" component="h2" gutterBottom>
                                Our Projects
                            </Typography>
                            <Typography variant="subtitle1" component="p" className={classes.subtitle}>
                                Above all, we are engineers, and our mission is to find the most elegant and economical
                                solutions to business problems.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={4} alignItems="center" direction="row">
                        {projects.map((project, index) => {
                            return (
                                <Grid key={index} item xs={12} md={6}>
                                    <Project data={project} />
                                </Grid>
                            );
                        })}
                    </Grid>
                </ScrollAnimation>
            </Box>
        </ScrollableAnchor>
    );
};

export default ProjectsList;
