import React from 'react'

import { Box, Container, ImageList, ImageListItem, Typography } from '@mui/material'

export default function Gallery() {

    const itemData = [
        {
            img: 'https://source.unsplash.com/IH7wPsjwomc',
            title: '1',
        },
        {
            img: 'https://source.unsplash.com/YI2YkyaREHk',
            title: '2',
        },
        {
            img: 'https://source.unsplash.com/kjh70RMHDco',
            title: '3',
        },
        {
            img: 'https://source.unsplash.com/hrMav18bnsc',
            title: '4',
        },
        {
            img: 'https://source.unsplash.com/QZGQO3NvsLo',
            title: '5',
        },
        {
            img: 'https://source.unsplash.com/FqqiAvJejto',
            title: '6',
        },
        {
            img: 'https://source.unsplash.com/L4iRkKL5dng',
            title: '7',
        },
    ];

    return (
        <div id='gallery'>
            <Container maxWidth='lg' className='gallery-box'>
            <Typography className='gallery-grid-title' variant='h4' gutterBottom>Gallery</Typography>
                <Box>
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    className='gallery-photo'
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </Container>
        </div>
    )


}
