//import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/carouselCards.css";

// import required modules
import { Pagination } from "swiper";

export default function CarouselCards() {


  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}        
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
          <SwiperSlide><img src='https://swiperjs.com/demos/images/nature-1.jpg' alt='Foto 1' /></SwiperSlide>
          <SwiperSlide><img src='https://swiperjs.com/demos/images/nature-2.jpg' alt='Foto 2' /></SwiperSlide>
          <SwiperSlide><img src='https://swiperjs.com/demos/images/nature-3.jpg' alt='Foto 3' /></SwiperSlide>
          <SwiperSlide><img src='https://swiperjs.com/demos/images/nature-4.jpg' alt='Foto 4' /></SwiperSlide>
          <SwiperSlide><img src='https://swiperjs.com/demos/images/nature-5.jpg' alt='Foto 5' /></SwiperSlide>
          <SwiperSlide><img src='https://swiperjs.com/demos/images/nature-6.jpg' alt='Foto 6' /></SwiperSlide>
          <SwiperSlide><img src='https://swiperjs.com/demos/images/nature-7.jpg' alt='Foto 7' /></SwiperSlide>
          <SwiperSlide><img src='https://swiperjs.com/demos/images/nature-8.jpg' alt='Foto 8' /></SwiperSlide>          
          <SwiperSlide><img src='https://swiperjs.com/demos/images/nature-4.jpg' alt='Foto 4' /></SwiperSlide>
          <SwiperSlide><img src='https://swiperjs.com/demos/images/nature-5.jpg' alt='Foto 5' /></SwiperSlide>
          <SwiperSlide><img src='https://swiperjs.com/demos/images/nature-6.jpg' alt='Foto 6' /></SwiperSlide>
      </Swiper>
    </>
  );
}
