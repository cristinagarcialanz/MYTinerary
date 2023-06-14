import React, { useRef } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/carousel.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function Carousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 3000)}s`;
  };
  
  return (
    <>
      <div id='contenedor' className='contenedor'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
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
          <SwiperSlide><img src='https://swiperjs.com/demos/images/nature-9.jpg' alt='Foto 9' /></SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
}