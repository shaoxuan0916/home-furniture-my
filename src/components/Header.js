import React from 'react'
import DrawerComp from './DrawerComp'

import { AppBar, Toolbar, Typography, Tab, Tabs, IconButton, useTheme, useMediaQuery} from '@mui/material'
import { CottageOutlined } from '@mui/icons-material'


export default function Header() {

  const [navValue, setNavValue] = React.useState(0)

  const theme = useTheme()

  // check nav button shown or not
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))

  // nav array
  const pages = ['Home', 'Products', 'Services', 'Gallery', 'Reviews', 'Contact Us']

  return (
    <>
      <AppBar position='sticky'>
        <Toolbar className='navbar'>
          <IconButton href='#home'>
            <CottageOutlined className='nav-icon' />
          </IconButton>
          <Typography variant='h6'>THE HOME</Typography>

          { isMatch ? 
          
          <DrawerComp /> :

          <Tabs
            className='nav-tabs'
            textColor='inherit'
            value={navValue}
            indicatorColor='inherit'
            onChange={(e, value) => setNavValue(value)}
          >

            {/* {pages.map((page,index) => <Tab key={index} label={page} /> )} */}
            <Tab label='Home' href='#home'/>
            <Tab label='Services' href='#services'/>
            <Tab label='Products' href='#products' />
            <Tab label='Review' href='#review'/>
            <Tab label='Gallery' href='#gallery'/>
            <Tab label='Contact Us' href='#contact-us'/>
            
          </Tabs>          
          }
      
        </Toolbar>
      </AppBar>
    </>
  )
}