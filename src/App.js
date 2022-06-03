import React from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import Service from './components/Service'
import Product from './components/Product'
import Review from './components/Review'
import Gallery from './components/Gallery'
import ContactUs from './components/ContactUs'

import { Typography } from '@mui/material'



export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Service />
      <Product />
      <Review />
      <Gallery />
      <ContactUs />

      <footer>
        <Typography variant='subtitle1'>Copyright 2022 @ MYHOME. All Rights Reserved.</Typography>
      </footer>

    </>
  )
}
