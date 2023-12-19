import React from 'react'
import Chip from '@mui/material/Chip';
import SwiperComponent from "../components/container/Swiper/Swiper";

import { Box, Typography, Divider } from '@mui/material'
import { HelmetProvider,Helmet } from 'react-helmet-async';
const Nazarat = () => {
    
    return (
        <>
        <HelmetProvider>
            <Helmet><title>سایت حسین پیراسبقی|نظرات</title></Helmet>
        </HelmetProvider>
        
        <Box component='div' sx={{ color: 'black' }}>
            
            <Divider textAlign='center' sx={{ mt: '10px' }}>
                <Chip color='error' size='medium' label="نظرات دانشجویان"  variant="filled" sx={{ fontSize: '20px' }} />

            </Divider>
            <Box component='div' className='shadow-md mt-3 '>

            <SwiperComponent controler={false} />
            </Box>
        </Box>
        </>
    )
}

export default Nazarat