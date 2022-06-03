import React from 'react'

import { Grid, Typography, Container} from '@mui/material'
import { Architecture, FlightTakeoff, LocalShipping } from '@mui/icons-material'

export default function Service() {
    return (
        <>
            <div className='service-grid big' id='services'>
            <Container>
                <Grid container spacing={12}>
                    <Grid className='service-item' item xs='12' md='4'>
                        <Architecture
                            sx={{
                                fontSize: '5rem',
                                color: '#CEAB93'
                            }}
                        />
                        <Typography className='service-text' variant='h6' >Custom Design</Typography>
                    </Grid>
                    <Grid className='service-item' item xs='12' md='4'>
                        <FlightTakeoff
                            sx={{
                                fontSize: '5rem',
                                color: '#CEAB93'
                            }}
                        />
                        <Typography className='service-text' variant='h6'>Worldwide Delivery</Typography>
                    </Grid>
                    <Grid className='service-item' item xs='12' md='4'>
                        <LocalShipping
                            sx={{
                                fontSize: '5rem',
                                color: '#CEAB93'
                            }}
                        />
                        <Typography className='service-text' variant='h6'>7 Days Free Returns</Typography>
                    </Grid>
                </Grid>
            </Container>
            </div>
        </>
    )
}
