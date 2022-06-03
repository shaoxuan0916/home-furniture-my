import React from 'react'

import { Button, Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material'
import { makeStyles } from '@mui/styles'



export default function Product() {

    const useStyles = makeStyles({
        button : {
            borderRadius:'1.5rem',
            border:'none',
            color:'#AD8B73',

            '&:hover' : {
                backgroundColor:'#fff',
                border: 'none'
            },
        },

        
    })

    const classes = useStyles()

    return (
        <div id='products'>
            <Container maxWidth='lg' className='product-grid'>
                <Typography className='product-grid-title' variant='h4' gutterBottom>Our Products</Typography>
                <Grid container spacing={6} >

                    <Grid item xs='12' sm='6' md='4'>
                        <Card
                            sx={{
                                borderRadius: '5rem 4rem 3rem 2rem',
                            }}
                            className='produt-card'
                        >
                            <CardMedia
                                className='product-image'
                                image='https://source.unsplash.com/OngbrOmqtzc'
                                title='Item One'
                            />

                            <CardContent className='product-content'>
                                <Typography className='product-title' variant='h5' gutterBottom>Item One</Typography>
                                <Button
                                    className={classes.button}
                                    variant='solid'
                                >
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs='12' sm='6' md='4'>
                        <Card
                            sx={{
                                borderRadius: '5rem 4rem 3rem 2rem',
                            }}
                            className='produt-card'
                        >
                            <CardMedia
                                className='product-image'
                                image='https://source.unsplash.com/OngbrOmqtzc'
                                title='Item One'
                            />

                            <CardContent className='product-content'>
                                <Typography className='product-title' variant='h5' gutterBottom>Item One</Typography>
                                <Button
                                    className={classes.button}
                                    variant='solid'
                                >
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs='12' sm='6' md='4'>
                        <Card
                            sx={{
                                borderRadius: '5rem 4rem 3rem 2rem',
                            }}
                            className='produt-card'
                        >
                            <CardMedia
                                className='product-image'
                                image='https://source.unsplash.com/OngbrOmqtzc'
                                title='Item One'
                            />

                            <CardContent className='product-content'>
                                <Typography className='product-title' variant='h5' gutterBottom>Item One</Typography>
                                <Button
                                    className={classes.button}
                                    variant='solid'
                                >
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs='12' sm='6' md='4'>
                        <Card
                            sx={{
                                borderRadius: '5rem 4rem 3rem 2rem',
                            }}
                            className='produt-card'
                        >
                            <CardMedia
                                className='product-image'
                                image='https://source.unsplash.com/OngbrOmqtzc'
                                title='Item One'
                            />

                            <CardContent className='product-content'>
                                <Typography className='product-title' variant='h5' gutterBottom>Item One</Typography>
                                <Button
                                    className={classes.button}
                                    variant='solid'
                                >
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs='12' sm='6' md='4'>
                        <Card
                            sx={{
                                borderRadius: '5rem 4rem 3rem 2rem',
                            }}
                            className='produt-card'
                        >
                            <CardMedia
                                className='product-image'
                                image='https://source.unsplash.com/OngbrOmqtzc'
                                title='Item One'
                            />

                            <CardContent className='product-content'>
                                <Typography className='product-title' variant='h5' gutterBottom>Item One</Typography>
                                <Button
                                    className={classes.button}
                                    variant='solid'
                                >
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs='12' sm='6' md='4'>
                        <Card
                            sx={{
                                borderRadius: '5rem 4rem 3rem 2rem',
                            }}
                            className='produt-card'
                        >
                            <CardMedia
                                className='product-image'
                                image='https://source.unsplash.com/OngbrOmqtzc'
                                title='Item One'
                            />

                            <CardContent className='product-content'>
                                <Typography className='product-title' variant='h5' gutterBottom>Item One</Typography>
                                <Button
                                    className={classes.button}
                                    variant='solid'
                                >
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
