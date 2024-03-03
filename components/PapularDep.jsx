'use client'
import { Container, Grid } from '@mui/material'
import { East, KeyboardBackspace, Person, Star, FileCopy, WatchLater, SignalCellular3Bar } from '@mui/icons-material';
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';
import artDesign from '../public/images/popularDep/artDesign.png'
import marketing from '../public/images/popularDep/marketing.png'
import content from '../public/images/popularDep/content.png'
import UX from '../public/images/popularDep/UX.png'
import development from '../public/images/popularDep/development.png'
import mechanical from '../public/images/popularDep/mechanical.png'

const PapularDep = () => {
    const [age, setAge] = useState();
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className='elementor-wrapper '>
            <div className="elementor-container">
                <Container>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <div className="popular-content-description">
                                <div>
                                    <h1 className='title'>we have most of papular Departments</h1>
                                </div>
                                <div className='dropdown-content'>
                                    <div>
                                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                            <InputLabel id="demo-simple-select-standard-label">All Category</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                value={age}
                                                onChange={handleChange}
                                                label="All Category"
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className='group-errow'>
                                        <div className='errow'>
                                            <KeyboardBackspace className="errow-icons   " />
                                        </div>
                                        <div className='errow-right'>
                                            <East className="errow-icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container spacing={4} className="card-content">
                        <Grid item lg={4} md={4} xs={12} sm={6} className="grid-item">
                            <div className="card-container">
                                <Card className="card-grid-item">
                                    <CardMedia />
                                    <Image src={artDesign} className="card-img" alt='card-img' quality={100} />
                                    <CardContent>
                                        <Typography gutterBottom className='card-title'>
                                            photoshop training: from beginners to pro
                                        </Typography>
                                        <Typography>
                                            <div className="main-inner-content">
                                                <div className='card-inner-des'>
                                                    <p className="rate">5.0 <span> <Star className='rate-icon' /></span> </p>
                                                    <p className='inner-des'>(24,783)</p>
                                                </div>
                                                <div className='card-inner-des'>
                                                    <p className="rate"> <Person className='rate-icon' /><span className='inner-des'> 42,383 Students</span> </p>
                                                </div>
                                            </div>
                                        </Typography>
                                        <Typography>
                                            <div className="main-inner-content">
                                                <div className='card-inner-des'>
                                                    <p className="rate"> <WatchLater className='rate-icon' /><span className='inner-des'> 11 hours 20 Minutes</span> </p>
                                                </div>
                                                <div className='card-inner-des'>
                                                    <p className="rate"> <FileCopy className='rate-icon' /><span className='inner-des'> 46 Lectures</span> </p>
                                                </div>
                                                <div className='card-inner-des'>
                                                    <p className="rate"> <SignalCellular3Bar className='rate-icons' /><span className='inner-des'> Beginner</span> </p>
                                                </div>
                                            </div>
                                        </Typography>
                                        <Typography className="border-bottom"></Typography>
                                        <Typography>
                                            <div className="main-inner-contents">
                                                <div className='card-inner-des'>
                                                    <Avatar alt="Remy Sharp" src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" objectFit={'contain'} />
                                                    <span className='inner-des'> Brain Cumin</span>
                                                </div>
                                                <div className='card-inner-des'>
                                                    <p className="rates"><span className='inner-des'> $11.99</span>
                                                        <div className='errow-right'>
                                                            <East className="errow-icon" />
                                                        </div>
                                                    </p>
                                                </div>
                                            </div>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item lg={4} md={4} xs={12} sm={6} className="grid-item">
                            <div className="card-container">
                                <Card className="card-grid-item">
                                    <CardMedia />
                                    <Image src={marketing} className="card-img" alt='card-img' quality={100} />
                                    <CardContent>
                                        <Typography gutterBottom className='card-title'>
                                            The Business Intelligence analyst Course 2022
                                        </Typography>
                                        <Typography>
                                            <div className="main-inner-content">
                                                <div className='card-inner-des'>
                                                    <p className="rate">5.0 <span> <Star className='rate-icon' /></span> </p>
                                                    <p className='inner-des'>(24,783)</p>
                                                </div>
                                                <div className='card-inner-des'>
                                                    <p className="rates"> <Person className='rate-icon' /><span className='inner-des'> 42,383 Students</span> </p>
                                                </div>
                                            </div>
                                        </Typography>
                                        <Typography>
                                            <div className="main-inner-content">
                                                <div className='card-inner-des'>
                                                    <p className="rate"> <WatchLater className='rate-icon' /><span className='inner-des'> 11 hours 20 Minutes</span> </p>
                                                </div>
                                                <div className='card-inner-des'>
                                                    <p className="rate"> <FileCopy className='rate-icon' /><span className='inner-des'> 46 Lectures</span> </p>
                                                </div>
                                                <div className='card-inner-des'>
                                                    <p className="rate"> <SignalCellular3Bar className='rate-icons' /><span className='inner-des'> Beginner</span> </p>
                                                </div>
                                            </div>
                                        </Typography>
                                        <Typography className="border-bottom"></Typography>
                                        <Typography>
                                            <div className="main-inner-contents">
                                                <div className='card-inner-des'>
                                                    <Avatar alt="Remy Sharp" src="https://t4.ftcdn.net/jpg/03/83/25/83/240_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" objectFit={'contain'} />
                                                    <span className='inner-des'> Albert Flores</span>
                                                </div>
                                                <div className='card-inner-des'>
                                                    <p className="rates"><span className='inner-des'> $99.99</span> 
                                                    <div className='errow-right'>
                                                            <East className="errow-icon" />
                                                        </div>
                                                    </p>
                                                </div>
                                            </div>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item lg={4} md={4} xs={12} sm={6} className="grid-item">
                            <div className="card-container">
                                <Card className="card-grid-item">
                                    <CardMedia />
                                    <Image src={content} className="card-img" alt='card-img' quality={100} />
                                    <CardContent>
                                        <Typography gutterBottom className='card-title'>
                                            Become a Product Manager learn the skill and job.
                                        </Typography>
                                        <Typography>
                                            <div className="main-inner-content">
                                                <div className='card-inner-des'>
                                                    <p className="rate">5.0 <span> <Star className='rate-icon' /></span> </p>
                                                    <p className='inner-des'>(24,783)</p>
                                                </div>
                                                <div className='card-inner-des'>
                                                    <p className="rate"> <Person className='rate-icon' /><span className='inner-des'> 42,383 Students</span> </p>
                                                </div>
                                            </div>
                                        </Typography>
                                        <Typography>
                                            <div className="main-inner-content">
                                                <div className='card-inner-des'>
                                                    <p className="rate"> <WatchLater className='rate-icon' /><span className='inner-des'> 11 hours 20 Minutes</span> </p>
                                                </div>
                                                <div className='card-inner-des'>
                                                    <p className="rate"> <FileCopy className='rate-icon' /><span className='inner-des'> 46 Lectures</span> </p>
                                                </div>
                                                <div className='card-inner-des'>
                                                    <p className="rate"> <SignalCellular3Bar className='rate-icons' /><span className='inner-des'> Beginner</span> </p>
                                                </div>
                                            </div>
                                        </Typography>
                                        <Typography className="border-bottom"></Typography>
                                        <Typography>
                                            <div className="main-inner-contents">
                                                <div className='card-inner-des'>
                                                    <Avatar alt="Remy Sharp" src="https://t4.ftcdn.net/jpg/01/51/99/39/240_F_151993994_mmAYzngmSbNRr6Fxma67Od3WHrSkfG5I.jpg" objectFit={'contain'} />
                                                    <span className='inner-des'> Elon Gated</span>
                                                </div>
                                                <div className='card-inner-des'>
                                                    <p className="rates"> <span className='inner-des'> $101.99</span> 
                                                    <div className='errow-right'>
                                                            <East className="errow-icon" />
                                                        </div>
                                                    </p>
                                                </div>
                                            </div>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item lg={4} md={4} xs={12} sm={6} className="grid-item">
                            <div className="card-container">
                                <Card className="card-grid-item">
                                    <CardMedia />
                                    <Image src={UX} className="card-img" alt='card-img' quality={100} />
                                    <CardContent>
                                        <Typography gutterBottom className='card-title'>
                                            Certificate user experience Design From Beginner to Pro
                                        </Typography>
                                        <Typography>
                                            <div className="main-inner-content">
                                                <div className='card-inner-des'>
                                                    <p className="rate">5.0 <span> <Star className='rate-icon' /></span> </p>
                                                    <p className='inner-des'>(24,783)</p>
                                                </div>
                                                <div className='card-inner-des'>
                                                    <p className="rate"> <Person className='rate-icon' /><span className='inner-des'> 42,383 Students</span> </p>
                                                </div>
                                            </div>
                                        </Typography>
                                        <Typography>
                                            <div className="main-inner-content">
                                                <div className='card-inner-des'>
                                                    <p className="rate"> <WatchLater className='rate-icon' /><span className='inner-des'> 11 hours 20 Minutes</span> </p>
                                                </div>
                                                <div className='card-inner-des'>
                                                    <p className="rate"> <FileCopy className='rate-icon' /><span className='inner-des'> 46 Lectures</span> </p>
                                                </div>
                                                <div className='card-inner-des'>
                                                    <p className="rate"> <SignalCellular3Bar className='rate-icons' /><span className='inner-des'> Beginner</span> </p>
                                                </div>
                                            </div>
                                        </Typography>
                                        <Typography className="border-bottom"></Typography>
                                        <Typography>
                                            <div className="main-inner-contents">
                                                <div className='card-inner-des'>
                                                    <Avatar alt="Remy Sharp" src="https://t3.ftcdn.net/jpg/02/99/04/20/240_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" objectFit={'contain'} />
                                                    <span className='inner-des'> Shahnewaz Sakil </span>
                                                </div>
                                                <div className='card-inner-des'>
                                                    <p className="rates"> <span className='inner-des'> $129.99</span> 
                                                    <div className='errow-right'>
                                                            <East className="errow-icon" />
                                                        </div>
                                                    </p>
                                                </div>
                                            </div>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item lg={4} md={4} xs={12} sm={6} className="grid-item">
                            <div className="card-container">
                                <Card className="card-grid-item">
                                    <CardMedia />
                                    <Image src={development} className="card-img" alt='card-img' quality={100} />
                                    <CardContent>
                                        <Typography gutterBottom className='card-title'>
                                            Python Programming Masterclass: Beginner to Pro 
                                        </Typography>
                                        <Typography>
                                            <div className="main-inner-content">
                                                <div className='card-inner-des'>
                                                    <p className="rate">5.0 <span> <Star className='rate-icon' /></span> </p>
                                                    <p className='inner-des'>(24,783)</p>
                                                </div>
                                                <div className='card-inner-des'>
                                                    <p className="rate"> <Person className='rate-icon' /><span className='inner-des'> 42,383 Students</span> </p>
                                                </div>
                                            </div>
                                        </Typography>
                                        <Typography>
                                            <div className="main-inner-content">
                                                <div className='card-inner-des'>
                                                    <p className="rate"> <WatchLater className='rate-icon' /><span className='inner-des'> 11 hours 20 Minutes</span> </p>
                                                </div>
                                                <div className='card-inner-des'>
                                                    <p className="rate"> <FileCopy className='rate-icon' /><span className='inner-des'> 46 Lectures</span> </p>
                                                </div>
                                                <div className='card-inner-des'>
                                                    <p className="rate"> <SignalCellular3Bar className='rate-icons' /><span className='inner-des'> Beginner</span> </p>
                                                </div>
                                            </div>
                                        </Typography>
                                        <Typography className="border-bottom"></Typography>
                                        <Typography>
                                            <div className="main-inner-contents">
                                                <div className='card-inner-des'>
                                                    <Avatar alt="Remy Sharp" src="https://t3.ftcdn.net/jpg/02/43/76/54/240_F_243765470_a0hN5zuTKIonTbRGldi8KajuvhSiWvDx.jpg" objectFit={'contain'} />
                                                    <span className='inner-des'> Pelican Steve</span>
                                                </div>
                                                <div className='card-inner-des'>
                                                    <p className="rates"> <span className='inner-des'> $139.99</span> 
                                                    <div className='errow-right'>
                                                            <East className="errow-icon" />
                                                        </div>
                                                    </p>
                                                </div>
                                            </div>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item lg={4} md={4} xs={12} sm={6} className="grid-item">
                            <div className="card-container">
                                <Card className="card-grid-item">
                                    <CardMedia />
                                    <Image src={mechanical} className="card-img" alt='card-img' quality={100} />
                                    <CardContent>
                                        <Typography gutterBottom className='card-title'>
                                            Build Your Mechanical Instrument And Get Creative Idea
                                        </Typography>
                                        <Typography>
                                            <div className="main-inner-content">
                                                <div className='card-inner-des'>
                                                    <p className="rate">5.0 <span> <Star className='rate-icon' /></span> </p>
                                                    <p className='inner-des'>(24,783)</p>
                                                </div>
                                                <div className='card-inner-des'>
                                                    <p className="rate"> <Person className='rate-icon' /><span className='inner-des'> 42,383 Students</span> </p>
                                                </div>
                                            </div>
                                        </Typography>
                                        <Typography>
                                            <div className="main-inner-content">
                                                <div className='card-inner-des'>
                                                    <p className="rate"> <WatchLater className='rate-icon' /><span className='inner-des'> 11 hours 20 Minutes</span> </p>
                                                </div>
                                                <div className='card-inner-des'>
                                                    <p className="rate"> <FileCopy className='rate-icon' /><span className='inner-des'> 46 Lectures</span> </p>
                                                </div>
                                                <div className='card-inner-des'>
                                                    <p className="rate"> <SignalCellular3Bar className='rate-icons' /><span className='inner-des'> Beginner</span> </p>
                                                </div>
                                            </div>
                                        </Typography>
                                        <Typography className="border-bottom"></Typography>
                                        <Typography>
                                            <div className="main-inner-contents">
                                                <div className='card-inner-des'>
                                                    <Avatar alt="Remy Sharp" src="https://t4.ftcdn.net/jpg/02/92/95/17/240_F_292951705_zv47wnXkjzHzSouYLpYcNgTOOosDv1ml.jpg" objectFit={'contain'} />
                                                    <span className='inner-des'>Hilary Uuse</span>
                                                </div>
                                                <div className='card-inner-des'>
                                                    <p className="rates"> <span className='inner-des'> $124.99</span> 
                                                    <div className='errow-right'>
                                                            <East className="errow-icon" />
                                                        </div>
                                                    </p>
                                                </div>
                                            </div>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>    
                </Container>
            </div>
        </div>
    )
}

export default PapularDep
