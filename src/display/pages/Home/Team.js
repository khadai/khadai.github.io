import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Box, Grid, Typography } from '@material-ui/core';

import volbil from '../../../data/us/volbil.svg';
import olexb from '../../../data/us/olexb.svg';
import olexh from '../../../data/us/olexh.svg';

const Team = () => {
    return (
        <ScrollableAnchor id={'team'}>
            <Box my={12}>
                <Grid container spacing={2} style={{ marginTop: 10 }} align="center">
                    <Grid item md={12}>
                        <Typography variant="h3" align="center" component="h2" gutterBottom>
                            Our team
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            component="p"
                            style={{ width: '75%' }}
                            gutterBottom
                        >
                            Our goal is to cover customer needs in great-designed and reliable software.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sm={4}>
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <img alt="volbil" src={volbil} height="200" />
                            <Typography variant="h5" align="center" component="h3" gutterBottom>
                                Volodymyr Biloshytskyi
                            </Typography>
                            <Typography variant="subtitle2" align="center" component="p">
                                Software Engineer
                            </Typography>
                        </ScrollAnimation>
                    </Grid>
                    <Grid item xs={12} md={4} sm={4}>
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={200}>
                            <img alt="olexb" src={olexb} height="200" />
                            <Typography variant="h5" align="center" component="h3" gutterBottom>
                                Oleh Basystiuk
                            </Typography>
                            <Typography variant="subtitle2" align="center" component="p">
                                Software Engineer
                            </Typography>
                        </ScrollAnimation>
                    </Grid>
                    <Grid item xs={12} md={4} sm={4}>
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={250}>
                            <img alt="olexh" src={olexh} height="200" />
                            <Typography variant="h5" align="center" component="h3" gutterBottom>
                                Oleh Nykoliak
                            </Typography>
                            <Typography variant="subtitle2" align="center" component="p">
                                Software Engineer
                            </Typography>
                        </ScrollAnimation>
                    </Grid>
                </Grid>
            </Box>
        </ScrollableAnchor>
    );
};

export default Team;
