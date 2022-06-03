import React from 'react'

import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { MenuOutlined } from '@mui/icons-material'

export default function DrawerComp() {

    const [openDrawer, setOpenDrawer] = React.useState(false)

    const pages = ['Home', 'Services', 'Products', 'Reviews', 'Gallery', 'Contact Us']

    return (
        <>
            <Drawer anchor='top' open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List className='drawer-list'>
                    
                    <ListItemButton href='#home' onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText >Home</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton href='#services' onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText >Services</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton href='#products' onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText >Products</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton href='#review' onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText >Reviews</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton href='#gallery' onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText >Gallery</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton href='#contact-us' onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText >Contact Us</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                </List>
            </Drawer>

            <IconButton sx={{ marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuOutlined className='nav-drawer' />
            </IconButton>



        </>
    )
}