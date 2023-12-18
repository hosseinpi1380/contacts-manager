import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import '../style.css';

// import required modules
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper/modules';
export default function SwiperComponent({ controler, info = [{ lastName: 'hossein', course: 'js', opinion: 'good' }] }) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        keyboard={{enabled:'true'}}
        grid={{fill:'column'}}
        centeredSlides={true}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          reverseDirection: true
        }}
        navigation={controler}
        modules={[Autoplay, Navigation, Pagination]}
        pagination={true}
        className="mySwiper"
      >
         <SwiperSlide>1</SwiperSlide>
         <SwiperSlide>2</SwiperSlide>
         <SwiperSlide>3</SwiperSlide>
         <SwiperSlide>4</SwiperSlide>
         <SwiperSlide>5</SwiperSlide>
         <SwiperSlide>6</SwiperSlide>
        

      </Swiper>
    </>
  );
}

