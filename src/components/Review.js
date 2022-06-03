import React from 'react'

import { Grid, Card, Typography, Container } from '@mui/material'
import { StarRounded } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'

export default function Review() {

    const useStyles2 = makeStyles({
        review: {
            padding: '2rem 1rem',
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'center',
        },
    })

    const classes = useStyles2()

    return (
        <div className='big' id='review'>
            <Container>

                <div className='review-grid'>
                    <Typography className='review-grid-title' variant='h4' gutterBottom>Reviews</Typography>
                    <Grid container spacing={4}>
                        <Grid item xs='12' sm='12' md='4'>
                            <Card className={classes.review}>
                                <span>
                                    <StarRounded className='review-star' />
                                    <StarRounded className='review-star' />
                                    <StarRounded className='review-star' />
                                    <StarRounded className='review-star' />
                                    <StarRounded className='review-star' />
                                </span>
                                <Typography variant='subtitle1'>Good Quality</Typography>
                                <Typography className='review-card-des' variant='body2'>Good quality material and helpful staff </Typography>
                                <br />
                                <Typography variant='subtitle2'>-- Ian Lee</Typography>
                            </Card>
                        </Grid>
                        <Grid item xs='12' sm='12' md='4'>
                            <Card className={classes.review}>
                                <span>
                                    <StarRounded className='review-star' />
                                    <StarRounded className='review-star' />
                                    <StarRounded className='review-star' />
                                    <StarRounded className='review-star' />
                                    <StarRounded className='review-star' />
                                </span>
                                <Typography variant='subtitle1'>Stylish Design</Typography>
                                <Typography className='review-card-des' variant='body2'>Very classic home ware. Highly recommended!</Typography>
                                <br />
                                <Typography variant='subtitle2'>-- Eric Chen</Typography>
                            </Card>
                        </Grid>
                        <Grid item xs='12' sm='12' md='4'>
                            <Card className={classes.review}>
                                <span>
                                    <StarRounded className='review-star' />
                                    <StarRounded className='review-star' />
                                    <StarRounded className='review-star' />
                                    <StarRounded className='review-star' />
                                    <StarRounded className='review-star' />
                                </span>
                                <Typography variant='subtitle1'>Wide Variety</Typography>
                                <Typography className='review-card-des' variant='body2'>Wide variety of home accessories</Typography>
                                <br />
                                <Typography variant='subtitle2'>-- Jeremy Lin</Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </Container>






        </div>
    )
}
