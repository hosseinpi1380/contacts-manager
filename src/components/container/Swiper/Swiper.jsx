import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import homepng from '../../../assets/png/Home.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import '../style.css';

// import required modules
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          reverseDirection:true
        }}
        scrollbar={{
          draggable:true,
          enabled:true
        }}
        navigation={true}
        modules={[Autoplay, Navigation,Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          slide 9
          </SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
      </Swiper>
    </>
  );
}
