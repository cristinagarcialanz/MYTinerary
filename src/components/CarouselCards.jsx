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
        image: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/Ushuaia.webp?alt=media&token=99f5af8e-5f82-4ba4-a522-44583fda7540'
      },
      {
        name: "Swiss Alps",
        image: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/alpessuizos-suiza.jpg?alt=media&token=4217a610-2a8f-440a-bb6d-e8396e4f055e'
      },
      {
        name: "Sydney",
        image: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/SidneyAustralia.jpg?alt=media&token=f6681314-7660-4404-9ff1-38ffd71027b5'
      },
      {
        name: "Amsterdam",
        image: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/amsterdam-paisesbajos.jpg?alt=media&token=51815b82-ceec-4762-98d7-f773f4ce5f21'
      },
      {
        name: "Cairo",
        image: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/Elcairo.jpeg?alt=media&token=9678948e-e776-4176-b4cf-bb8907c70b72'
      },
      {
        name: "Santorini",
        image: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/santorini.webp?alt=media&token=0037c5a4-9527-4ad8-b1e8-7a3e03d70c09'
      },
      {
        name: "Barcelona",
        image: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/Barcelona.jpg?alt=media&token=0b2e8607-5ca2-4ad5-ac01-3c44938a945b'
      },      
      {
        name: "Kyoto",
        image: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/kyoto-japon.jpg?alt=media&token=63c323d3-69c1-4bd9-b433-c7d5cfc940db'
      },
      {
        name: "Canaima",
        image: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/canaima.jpg?alt=media&token=9661551a-b9ea-430a-8b48-819cdc2af8eb'
      },
      {
        name: "London",
        image: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/londres-inglaterra.jpg?alt=media&token=8e4affb0-50a4-4b1c-a4b5-29041c7f7e00'
      },
      {
        name: "Cancun",
        image: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/cancun.webp?alt=media&token=c3688077-7317-4c1f-98f5-9692026deef3'
      },
      {
        name: "Paris",
        image: 'https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/Paris.jpg?alt=media&token=ee4e8f65-ffe2-454e-925f-a7adcab1f2a9'
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
          {cities.map((city,index)=>
            <SwiperSlide key={index}><img src={city.image} alt={city.name} /><div className="slide-caption">{city.name}</div></SwiperSlide>
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
