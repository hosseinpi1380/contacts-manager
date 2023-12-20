import React from 'react'
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import '../components/container/style.css';
import { deepOrange, green } from '@mui/material/colors';
// import required modules
import { Autoplay, Scrollbar } from 'swiper/modules';
import { Box, Divider, Rating, Avatar } from '@mui/material'
import { HelmetProvider, Helmet } from 'react-helmet-async';
const Nazarat = () => {
    const nazarat = [
        { id: 1, name: 'hossein pirasbaghi', course: 'react js', star: 3.5, nazar: 'lorem' },
        { id: 2, name: 'zahra pirasbaghi', course: 'tailwind css', star: 5, nazar: 'lorem' },
        { id: 3, name: 'ali pirasbaghi', course: 'php', star: 3, nazar: 'lorem' },
        { id: 3, name: 'ahmad pirasbaghi', course: 'javascript', star: 1, nazar: 'lorem' },
        { id: 3, name: 'ali jafari', course: 'php', star: 3, nazar: 'lorem' },
    ];

    return (
        <>
            <HelmetProvider>
                <Helmet><title>سایت حسین پیراسبقی|نظرات</title></Helmet>
            </HelmetProvider>
            <Box component='div' sx={{ color: 'black' }}>
                <Divider textAlign='center' sx={{ mt: '10px' }}>
                    <Chip color='error' size='medium' label="نظرات دانشجویان"
                        variant="filled" sx={{ fontSize: '20px' }} />

                </Divider>
                <Box component='div' className='shadow-md h-[500px] w-4/5 mx-auto mt-5'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={15}
                        breakpoints={{
                            '0': { slidesPerView: 1 },
                            '480': { slidesPerView: 2 },
                            '800': { slidesPerView: 2 },
                        }
                        }
                        style={{ backgroundColor: 'red', display: 'flex', alignItems: 'center', padding: '20px 20px 20px 20px', height: '100%' }}
                        keyboard={{ enabled: 'true' }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            reverseDirection: true
                        }}
                        scrollbar={true}
                        modules={[Autoplay, Scrollbar]}
                        pagination={true}
                        className="mySwiper"

                    >
                        {nazarat.map(el => (
                            <SwiperSlide key={el.name} style={{ borderRadius: '10%', height: '400px' }}>
                                <Card sx={{ width: '100%', height: '100%' }} className='bg-gray-600 rounded-md'>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            src="../public/img/bg-2.jpg"
                                            height={300}
                                            alt="green iguana"
                                        />

                                    </CardActionArea>
                                    <CardContent sx={{ height: '150px' }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {el.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, fugit! Aliquid, incidunt optio quaerat temporibus
                                            veritatis officiis ipsam.
                                        </Typography>
                                        <Rating name="read-only" value={el.star} readOnly />
                                    </CardContent>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Box >
        </>
    )
}

export default Nazarat