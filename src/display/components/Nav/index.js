import React, { useState } from 'react';
import { goToAnchor } from 'react-scrollable-anchor';

import {
    AppBar,
    Button,
    Container,
    Divider,
    Drawer,
    Grid,
    Hidden,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Slide,
    Toolbar,
    useScrollTrigger,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import GroupIcon from '@material-ui/icons/Group';
import CodeIcon from '@material-ui/icons/Code';
import FolderIcon from '@material-ui/icons/Folder';
import EmailIcon from '@material-ui/icons/Email';
import logo from '../../../data/logo.svg';

import { withStyles } from '@material-ui/core/styles';

const MenuButton = withStyles(() => ({
    root: {
        textTransform: 'uppercase',
        padding: 0,
        paddingLeft: 5,
        paddingRight: 5,
        margin: 5,
        marginLeft: 10,
        minHeight: 0,
        minWidth: 0,
        marginRight: 10,
        letterSpacing: '0.75px',
    },
}))(Button);

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Nav = (props) => {
    const [showDrawer, setShowDrawer] = useState(false);

    const goToElement = (element) => {
        goToAnchor(element);
        setShowDrawer(false);
    };

    return (
        <HideOnScroll {...props}>
            <AppBar color="inherit" elevation={0}>
                <Container>
                    <Toolbar>
                        <Hidden smDown>
                            <Grid container alignItems="center">
                                <Grid item>
                                    <Link to="/" component={RouterLink}>
                                        <img alt="logo" src={logo} width="100%" />
                                    </Link>
                                </Grid>
                                <Grid item md align="right">
                                    <MenuButton href="#process">Process</MenuButton>
                                    <MenuButton href="#clients">Clients</MenuButton>
                                    <MenuButton href="#technologies">Technologies</MenuButton>
                                    <MenuButton href="#fields">Projects</MenuButton>
                                    <MenuButton href="#contact" variant="contained" disableElevation>
                                        Contact us
                                    </MenuButton>
                                </Grid>
                            </Grid>
                        </Hidden>
                        <Hidden mdUp>
                            <Grid container alignItems="center">
                                <Grid item>
                                    <Link to="/" component={RouterLink}>
                                        <img alt="logo" src={logo} width="100%" />
                                    </Link>
                                </Grid>
                                <Grid item sm xs align="right">
                                    <IconButton
                                        edge="start"
                                        color="inherit"
                                        aria-label="open drawer"
                                        onClick={() => setShowDrawer(true)}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Hidden>
                    </Toolbar>
                </Container>
                <Drawer anchor={'right'} open={showDrawer} onClose={() => setShowDrawer(false)}>
                    <List style={{ width: '250px' }}>
                        <ListItem button onClick={() => goToElement('process')}>
                            <ListItemIcon>
                                <AllInclusiveIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Process'} />
                        </ListItem>
                        <ListItem button onClick={() => goToElement('clients')}>
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Clients'} />
                        </ListItem>
                        <ListItem button onClick={() => goToElement('technologies')}>
                            <ListItemIcon>
                                <CodeIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Technologies'} />
                        </ListItem>
                        <ListItem button onClick={() => goToElement('fields')}>
                            <ListItemIcon>
                                <FolderIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Projects'} />
                        </ListItem>
                        <Divider />
                        <ListItem button onClick={() => goToElement('contact')}>
                            <ListItemIcon>
                                <EmailIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Contact us'} />
                        </ListItem>
                    </List>
                </Drawer>
            </AppBar>
        </HideOnScroll>
    );
};

export { Nav };
