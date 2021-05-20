import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Parallax } from 'react-scroll-parallax';
import { TelegramClient } from 'messaging-api-telegram';

import { makeStyles, withStyles } from '@material-ui/core/styles';

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';

import fifth from '../../../data/backs/5.svg';
import sixth from '../../../data/backs/6.svg';
import { Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@material-ui/core';

const SocialButton = withStyles((theme) => ({
    root: {
        marginLeft: 5,
        marginRight: 5,
        paddingLeft: 5,
        paddingRight: 5,
        minHeight: 0,
        minWidth: 0,
        borderRadius: 3,
    },
    contained: {
        color: theme.palette.primary.main,
        background: theme.palette.primary.transparent.light,
        '&:hover': {
            background: theme.palette.primary.transparent.dark,
        },
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    shape: {
        zIndex: '-1',
        [theme.breakpoints.down('md')]: {
            opacity: '0.4',
        },
    },
}));

const ContactUs = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [offers, setOffers] = useState('false');
    const client = new TelegramClient({ accessToken: '1271608160:AAFsBwEPR2wlfzKHJaunbB6p5YPPBo1wqWk' });

    const fifthStyle = {
        position: 'absolute',
        left: 0,
    };

    const sixthStyle = {
        position: 'absolute',
        right: 0,
    };

    const sendFeedback = () => {
        client.sendMessage('555194650', `Email: ${email}\nMessage: ${message}\nOffers: ${offers}`);
    };

    return (
        <ScrollableAnchor id={'contact'}>
            <Box my={12}>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={200}>
                    <Parallax y={[100, -50]} styleInner={fifthStyle}>
                        <img alt="fifth" src={fifth} className={classes.shape} />
                    </Parallax>
                    <Parallax y={[100, 0]} styleInner={sixthStyle}>
                        <img alt="sixth" src={sixth} className={classes.shape} />
                    </Parallax>
                    <form onSubmit={sendFeedback}>
                        <Grid container spacing={2} style={{ marginTop: 10 }} justify="center">
                            <Grid item md={7} xs={12} sm={12} align="center">
                                <Typography variant="h3" align="center" component="h2" gutterBottom>
                                    Let's talk!
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    align="center"
                                    style={{ width: '75%' }}
                                    component="p"
                                    gutterBottom
                                >
                                    Let's discuss what you need and how we can help you!
                                </Typography>
                            </Grid>
                            <Grid item md={7} xs={12} sm={12} align="center">
                                <SocialButton
                                    variant="contained"
                                    target="_blank"
                                    href="https://fb.com/codepillow"
                                    color="primary"
                                    disableElevation
                                >
                                    <FacebookIcon />
                                </SocialButton>
                                <SocialButton
                                    variant="contained"
                                    target="_blank"
                                    href="https://linkedin.com/company/codepillow"
                                    color="primary"
                                    disableElevation
                                >
                                    <LinkedInIcon />
                                </SocialButton>
                                <SocialButton
                                    variant="contained"
                                    target="_blank"
                                    href="https://t.me/codepillow"
                                    color="primary"
                                    disableElevation
                                >
                                    <TelegramIcon />
                                </SocialButton>
                                <SocialButton
                                    variant="contained"
                                    target="_blank"
                                    href="https://twitter.com/codepillow"
                                    color="primary"
                                    disableElevation
                                >
                                    <TwitterIcon />
                                </SocialButton>
                            </Grid>
                            <Grid item md={7} xs={12} sm={12} align="left">
                                <Button variant="outlined" color="primary" href="mailto:codepillow@pm.me" fullWidth>
                                    codepillow@pm.me
                                </Button>
                            </Grid>
                            <Grid item md={7} xs={12} sm={12} align="left">
                                ‭
                                <Button variant="outlined" color="primary" href="tel:380507069970" fullWidth>
                                    +380 (50) 70 699 70‬
                                </Button>
                            </Grid>
                            <Grid item md={7} xs={12} sm={12} align="left">
                                <TextField
                                    required
                                    id="outlined-basic"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    type="email"
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={7} xs={12} sm={12} align="left">
                                <TextField
                                    required
                                    id="outlined-basic"
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                    label="How can we help you?"
                                    variant="outlined"
                                    multiline
                                    rows="4"
                                    style={{ marginTop: 10 }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={7} xs={12} sm={12} align="left">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="offers"
                                            color="primary"
                                            onChange={(e) => setOffers('true')}
                                            value={offers}
                                        />
                                    }
                                    label="I agree to receive information about promotions and special offers."
                                />
                            </Grid>
                            <Grid item md={7} xs={12} sm={12} align="left">
                                <FormControlLabel
                                    control={<Checkbox required name="policy" color="primary" />}
                                    label="I agree to the processing of my personal data in accordance with the Privacy Policy."
                                />
                            </Grid>
                            <Grid item md={7} xs={12} sm={12} align="center">
                                <Button variant="contained" color="primary" type="submit" disableElevation>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </ScrollAnimation>
            </Box>
        </ScrollableAnchor>
    );
};

export { ContactUs };
