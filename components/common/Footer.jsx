'use client'
import { Google, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import logo from '../../public/images/header/f-logo.png'

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: '#121117',
        color: 'white',
        paddingTop:'0px',
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Grid container spacing={4} paddingTop={'60px'}>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <div className='sm-center'>
                            <Image src={logo} alt='logo' quality={100} className='f-logo' />
                            <p className="footer-des">Professionally scale cross functional human Capital and extensive technology.</p>
                            <div className="footer-icons">
                                <div ><span className="icon-circle"> <Google className="f-Sivon" /> </span></div>
                                <div className='me-5'><span className="icon-circle"> <Twitter className="f-Sivon" /> </span></div>
                                <div className='me-5'><span className="icon-circle "> <Instagram className="f-Sivon" /> </span></div>
                                <div className='me-5'><span className="icon-circle"> <LinkedIn className="f-Sivon" /> </span></div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={2} md={2} sm={4} xs={12}>
                        <div className='sm-center'>
                            <Typography variant="h6" gutterBottom fontWeight={'bold'}>Services</Typography>
                            <ul>
                                <li>Documentation</li>
                                <li>Design</li>
                                <li>Themes</li>
                                <li>illustration</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item lg={2} md={2} sm={4} xs={12}>
                        <div className='sm-center'>
                            <Typography variant="h6" gutterBottom fontWeight={'bold'}>Company</Typography>
                            <ul>
                                <li>About</li>
                                <li>Terms</li>
                                <li>Private Policy</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item lg={2} md={2} sm={4} xs={12}>
                        <div className='sm-center'>
                            <Typography variant="h6" gutterBottom fontWeight={'bold'}>Job Info</Typography>
                            <ul>
                                <li>Select</li>
                                <li>Services</li>
                                <li>Payment</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item lg={2} md={2} sm={4} xs={12}>
                        <div className='sm-center'>
                            <Typography variant="h6" gutterBottom fontWeight={'bold'}>Contact</Typography>
                            <ul>
                                <li> <span className='addres-title'>Call:</span> 9715546963</li>
                                <li> <span className='addres-title'>Email:</span> xyz@gmail.com</li>
                                <li> <span className='addres-title'>Address:</span> Dhaka india</li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
                   <div className="b-bottom"></div>
                   <div className='copy-right'> <p>copyright©chakri. All right reserve</p> </div>
            </Container>
        </footer>
    );
};

export default Footer;
