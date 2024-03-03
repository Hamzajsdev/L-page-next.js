import React from 'react'
import Image from 'next/image';
import { Container, Grid, ButtonBase } from '@mui/material'
import { Google, Twitter, Instagram, LinkedIn, Star } from '@mui/icons-material';
import tec1 from '../public/images/FamousTec/tec1.png'
import tec2 from '../public/images/FamousTec/tec2.png'
import tec3 from '../public/images/FamousTec/tec3.png'
import shap1 from '../public/images/FamousTec/shap1.png'
import shap2 from '../public/images/FamousTec/shap2.png'
import shap3 from '../public/images/FamousTec/shap3.png'
import Avatar from '@mui/material/Avatar';



const FamousTec = () => {
    return (
        <Container>
            <Grid>
                <div className="shap-img">
                    <Image src={shap1} className="shap-img" alt="shap-img" />
                </div>
                <Grid>
                    <div className='elementor-famous'>
                        <div className='famous-wrapper'>
                            <h3>Intriduce with Our</h3>
                            <h3>Famous Teacher</h3>
                        </div>
                        <ButtonBase variant='dark' className="btn-warning">View All Teachers </ButtonBase>
                    </div>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <div className="img-title">
                            <Image src={tec1} alt='tec-img' className="tec-img" quality={100} />
                            <div>
                                <h3 className="shapir-title">Shapir Prio</h3>
                                <p className="shpir-des">Assistance Director</p>
                                <Google className='social-icon' />
                                <Twitter className='social-icon' />
                                <Instagram className='social-icon' />
                                <LinkedIn className='social-icon' />
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <div className="img-title">
                            <Image src={tec2} alt='tec-img' className="tec-img" quality={100} />
                            <div>
                                <h3 className="shapir-title">Sellina</h3>
                                <p className="shpir-des">Director</p>
                                <Google className='social-icon' />
                                <Twitter className='social-icon' />
                                <Instagram className='social-icon' />
                                <LinkedIn className='social-icon' />
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <div className="img-title">
                            <Image src={tec3} alt='tec-img' className="tec-img" quality={100} />
                            <div>
                                <h3 className="shapir-title">John smith</h3>
                                <p className="shpir-des">Assistance Director</p>
                                <Google className='social-icon' />
                                <Twitter className='social-icon' />
                                <Instagram className='social-icon' />
                                <LinkedIn className='social-icon' />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>

            <div className='elementor-students'>
                <Grid container spacing={2} >
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <div >
                            <div className="custom-card">
                                <div className="main-custom-content">
                                    <div className="custom-card-avater">
                                        <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" objectFit={'contain'} />
                                        <span className='text-md'>Jaquon Hart <br /> <span className="text-sm"> Civil Engineer</span></span>
                                    </div>
                                    <div className="starts-icon">
                                        <Star className="star-favicon" />
                                        <Star className="star-favicon" />
                                        <Star className="star-favicon" />
                                        <Star className="star-favicon" />
                                        <Star className="star-favicon" />
                                    </div>
                                </div>
                                <div className="custom-card-description">
                                    <p>"With edu, We're able to easy track our performance in full detail it's become an essential tool for us to grow and engage with our audience."</p>
                                </div>
                                <div className="custom-cards">
                                    <div className="main-custom-content">
                                        <div className="custom-card-avater">
                                            <Avatar alt="Remy Sharp" src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" objectFit={'contain'} />
                                            <span className='text-mds'>Jaquon Hart <br /> <span className="text-sms"> Civil Engineer</span></span>
                                        </div>
                                        <div className="starts-icon">
                                            <Star className="star-favicons" />
                                            <Star className="star-favicons" />
                                            <Star className="star-favicons" />
                                            <Star className="star-favicons" />
                                            <Star className="star-favicons" />
                                        </div>
                                    </div>
                                    <div className="custom-card-descriptions">
                                        <p>"With edu, We're able to easy track our performance in full detail it's become an essential tool for us to grow and engage with our audience."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <div className="wrapper-content">
                            <div className='header-title'>
                                <div className='carrer-heading'>
                                    <h1>5000 Reviews from</h1>
                                    <h1>Our Successful</h1>
                                    <h1>Students!!</h1>
                                </div>
                                <div className='description-banner'>
                                    <p className='career-descriptions'>Teractively receptiualize intermandated e-commenrce after sticky application. Dynamic reintermediate viral testing precedure thought technicallty sound</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <div className='shap2-img'>
                        <Image src={shap2} className="shap2" />
                    </div>
                </Grid>
                <div className='shap3-img'><Image src={shap3} className="shap3" /></div>
            </div>
        </Container>
    )
}

export default FamousTec
