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
        image: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/ushuaia.jpeg?alt=media&token=3650ac11-07a0-48cf-b1a8-124b0ffa6f48'
      },
      {
        name: "Swiss Alps",
        image: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/alpessuizos-suiza.jpg?alt=media&token=4217a610-2a8f-440a-bb6d-e8396e4f055e'
      },
      {
        name: "Sydney",
        image: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/sidney-australia.jpg?alt=media&token=b6dcc272-d867-4dc8-b2f7-7bef4a35ec76'
      },
      {
        name: "Amsterdam",
        image: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/amsterdam-paisesbajos.jpg?alt=media&token=51815b82-ceec-4762-98d7-f773f4ce5f21'
      },
      {
        name: "Cairo",
        image: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/elcairo-egipto.jpg?alt=media&token=12fd3990-e930-4adf-8522-236ff0e22937'
      },
      {
        name: "Barcelona",
        image: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/barcelona-espa%C3%B1a.jpg?alt=media&token=90e6164f-95da-4f03-8f28-af315eacd721'
      },
      {
        name: "Uyuni salt flat",
        image: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/salardeuyuni-bolivia.jpg?alt=media&token=9592a08f-fbed-4a86-96c5-d3eafbfc43c7'
      },
      {
        name: "Kyoto",
        image: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/kyoto-japon.jpg?alt=media&token=63c323d3-69c1-4bd9-b433-c7d5cfc940db'
      },
      {
        name: "Angel falls",
        image: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/canaima-venezuela.jpg?alt=media&token=014a7bd9-c297-4990-83f4-3e33470a0786'
      },
      {
        name: "London",
        image: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/londres-inglaterra.jpg?alt=media&token=8e4affb0-50a4-4b1c-a4b5-29041c7f7e00'
      },
      {
        name: "Cancun",
        image: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/cancun-mexico.jpg?alt=media&token=346a343c-64d6-4934-be99-de870d20458b'
      },
      {
        name: "Paris",
        image: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/paris.jpg?alt=media&token=03c748ec-1cff-48df-b43c-100441f47a2d'
      }
    ]
  return (
    
    <div className="carouselHome">
      <Swiper
        
        autoplay = {{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
          marginTop: '10px',
        }}
        breakpoints={{
          425: {
            slidesPerGroup:2,
            slidesPerView: 2,
         
          },
          768: {
            slidesPerGroup:3,
            slidesPerView: 3,
            
          },
          1024: {
            
            slidesPerGroup:4,
            slidesPerView: 4,
            
          },
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
          
          <div className="swiper-button-next navigation-button"></div>
          <div className="swiper-button-prev navigation-button"></div>
          <div className="autoplay-progress autoplay-counter" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
      </Swiper>
      </div>
  );
}
