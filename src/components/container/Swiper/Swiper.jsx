import React, { useState } from "react";
import { Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import homePng from '../../../assets/png/Home.png';
import person from '../../../assets/png/person-01.jpg';


// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
import "swiper/css";

const SwiperComponent = () => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  return (
    <Swiper
      modules={[Controller]}
      onSwiper={setFirstSwiper}
      controller={{ control: secondSwiper }}
      spaceBetween={40}
      autoplay={true}
       loop={true}
    >
      <SwiperSlide>{homePng}</SwiperSlide>
      <SwiperSlide>{person}</SwiperSlide>

    </Swiper>
  );
};
export default SwiperComponent;
