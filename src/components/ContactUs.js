import React from 'react'

import { Container, Grid, Typography } from '@mui/material'
import { LocationOnRounded, LocalPhoneRounded, EmailRounded } from '@mui/icons-material'

export default function ContactUs() {
    return (
        <div className='big' id='contact-us'>
            <Container>
                <div className='contact-us'>
                    <Typography className='contact-grid-title' variant='h4' gutterBottom>Contact Us</Typography>
                    <Grid container spacing={6}>
                        <Grid item xs='12' sm='6'>
                            <img className='contact-us-image' src='https://source.unsplash.com/f0iHba5bSlQ' />
                        </Grid>
                        <Grid item xs='12' sm='6'>
                            <div className='contact-us-content'>
                                <div className='contact-item'>
                                    <Typography variant='h6' gutterBottom>
                                    <LocationOnRounded className='contact-icon'/>
                                    Address
                                    </Typography>
                                    <Typography className='contact-item-item' variant='subtitle1' gutterBottom>41, Suria KLCC, Kuala Lumpur City Centre, 50088 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur</Typography>
                                </div>
                                <div className='contact-item'>
                                    <Typography variant='h6' gutterBottom>
                                    <LocalPhoneRounded className='contact-icon'/>
                                    Contact Number
                                    </Typography>
                                    <Typography className='contact-item-item' variant='subtitle1' gutterBottom>03-3371 4241</Typography>
                                </div>
                                <div className='contact-item'>
                                    <Typography variant='h6' gutterBottom>
                                    <EmailRounded className='contact-icon'/>
                                    Email
                                    </Typography>
                                    <Typography className='contact-item-item' variant='subtitle1' gutterBottom>myhome@gmail.com</Typography>
                                </div>
                            </div>
                        </Grid>

                    </Grid>

                </div>
            </Container>






        </div>
    )
}
