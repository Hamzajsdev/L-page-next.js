import React, { Fragment } from 'react'
import { ButtonBase, Container } from '@mui/material'
import { Grid } from '@mui/material';
import banner from '../public/images/header/banner-img.png'
import slack from '../public/images/company/slack.png'
import netlify from '../public/images/company/netlify.png'
import fitbit from '../public/images/company/fitbit.png'
import google from '../public/images/company/google.png'
import airbnd from '../public/images/company/airbnd.png'
import career from '../public/images/header/career.png'
import errowup from '../public/images/FamousTec/errow-up.png'
import register from '../public/images/FamousTec/resgister-img.png'
const PapularDep = dynamic(() => import('@/components/PapularDep'));
const FamousTec = dynamic(() => import('@/components/FamousTec'));
import Image from 'next/image';
import dynamic from 'next/dynamic'


const Homepage = () => {
  return (
    <Fragment>
      {/* Banner Section */}
      <div className="banner-section">
        <div className='wrapper'>
          <Container>
            <Grid container spacing={2} padding={'30px 0px'}>
              <Grid item lg={6} md={6} xs={12} sm={12} display={'flex'}>
                <div className="wrapper-content">
                  <div className='header-title'>
                    <div className='main-heading'>
                      <h1>Start Your</h1>
                      <h1>Future</h1>
                      <h1>Education</h1>
                    </div>
                    <div className='description-banner'>
                      <p className='description'>Credibly redifine distinctive total linkage vis-a-vis multifuction data. phosfluorescently impact goal-oriented strategic</p>
                      <ButtonBase variant='dark' className="btn-warning">Contact Now </ButtonBase>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item lg={6} md={6} xs={12} sm={12}>
                <div>
                  <Image src={banner} alt='banner-img' className='banner-img' quality={100} />
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>

      {/* Company Section */}
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={12} sm={12} md={12} xs={12} >
            <div className='header-container'>
              <div className='wrapper-container'>
                <h1 className='title'>Trusted Companies</h1>
                <div className='compant-img'>
                  <Image src={slack} alt='slack' className="com-img  zoom-animation" quality={100} />
                  <Image src={netlify} alt='netlify' className="com-img mt-15 zoom-animation" quality={100} />
                  <Image src={fitbit} alt='fitbit' className="com-img mt-15 zoom-animation" quality={100} />
                  <Image src={google} alt='google' className="com-img mt-15 zoom-animation" quality={100} />
                  <Image src={airbnd} alt='airbnd' className="com-img mt-15 zoom-animation" quality={100} />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      {/* Career Section */}
      <Container>
        <Grid container spacing={2} padding={'30px 0px'} className='career-container'>
          <Grid item lg={6} md={6} xs={12} sm={12}>
            <div className='com-career-img'>
              <Image src={career} alt='banner-img' className='career-img' quality={100} />
            </div>
          </Grid>
          <Grid item lg={6} md={6} xs={12} sm={12} display={'flex'}>
            <div className="wrapper-content">
              <div className='header-title'>
                <div className='carrer-heading'>
                  <h1>We help to create</h1>
                  <h1>posiibility & success</h1>
                  <h1>in your career!</h1>
                </div>
                <div className='description-banner'>
                  <p className='career-description'>Continually administrator process-center human capital rather than bleeding-edge methodologies. Distinctively supply accurate method of empowerment before.</p>
                  <ButtonBase variant='dark' className="btn-warning">Get Started Today </ButtonBase>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      {/* Papular Section */}
      <PapularDep />

      {/* Famous Teacher Section */}
      <FamousTec />

      {/* Register Section */}
      <div className='wrapper-resgisterd-container'>
        <div className='registerd-container'>
          <Container>
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} xs={12} sm={12}>
                <div className="elementor-content-reguister">
                    <div>
                      <span className="errow-up"> <Image src={errowup} className='errowup' /> </span> 
                      <h3 className='elementor-register'>Create Free Account <br/> & Get Register   </h3>
                    </div>
                    <div className='register-btn'>
                     <ButtonBase variant='dark' className="btn-warning register-btn">Register Now </ButtonBase>
                    </div>
                </div>
              </Grid>
              <Grid item lg={6} md={6} xs={12} sm={12}>
                <div className="content-register">
                  <Image src={register} alt="register-img" className="register-img" quality={100} />
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </Fragment>
  )
}

export default Homepage
