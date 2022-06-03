import React from 'react'

import { Typography} from '@mui/material'


export default function Hero() {
  return (
    <div className='hero' id='home'>
        <div className='hero-content'>
            <Typography className='hero-title' variant='h2' gutterBottom>
                THE HOME
            </Typography>
            <Typography className='hero-text' variant='h5'>
                30% Off on EVERYTHING ! 
            </Typography>
        </div>
    </div>
  )
}
