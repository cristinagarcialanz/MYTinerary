import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import 'swiper/css/navigation';
import "../styles/carouselCards.css";


import { Autoplay, Pagination, Navigation } from "swiper";

export default function CarouselCards() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;}
    const cities = [
      {
        name: "Ushuaia",
        image: 'https://swiperjs.com/demos/images/nature-1.jpg'
      },
      {
        name: "city2",
        image: 'https://swiperjs.com/demos/images/nature-2.jpg'
      },
      {
        name: "city3",
        image: 'https://swiperjs.com/demos/images/nature-3.jpg'
      },
      {
        name: "city4",
        image: 'https://swiperjs.com/demos/images/nature-4.jpg'
      },
      {
        name: "city5",
        image: 'https://swiperjs.com/demos/images/nature-5.jpg'
      },
      {
        name: "city6",
        image: 'https://swiperjs.com/demos/images/nature-6.jpg'
      },
      {
        name: "city7",
        image: 'https://swiperjs.com/demos/images/nature-7.jpg'
      },
      {
        name: "city8",
        image: 'https://swiperjs.com/demos/images/nature-8.jpg'
      },
      {
        name: "city9",
        image: 'https://swiperjs.com/demos/images/nature-8.jpg'
      },
      {
        name: "city10",
        image: 'https://swiperjs.com/demos/images/nature-2.jpg'
      },
      {
        name: "city11",
        image: 'https://swiperjs.com/demos/images/nature-5.jpg'
      },
      {
        name: "city12",
        image: 'https://swiperjs.com/demos/images/nature-4.jpg'
      }
    ]
  return (
    
    <div className="carouselHome">
      <Swiper
        slidesPerView={4}
        slidesPerGroup={4}
        autoplay = {{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >   
          {cities.map(city=>
            <SwiperSlide><img src={city.image} alt={city.name} /><div className="slide-caption">{city.name}</div></SwiperSlide>
          )
          }
          
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
      </Swiper>
      </div>
  );
}
