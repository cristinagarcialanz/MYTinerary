// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "../styles/carouselFlip.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/autoplay";
import { EffectFlip, Pagination, Navigation, Autoplay } from 'swiper';

export default function CarouselFlip({images, nameActivity}) {
  

  return (
    <>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        modules={[EffectFlip, Pagination, Navigation, Autoplay]}
        className="carouselFlip"
      autoplay = {{
          delay: 3000,
          disableOnInteraction: false,
        }} >

          {images.map((image,index)=>
            <SwiperSlide key={index}><img src={image} alt="Foto"/><div className="slide-caption">{nameActivity[index]}</div></SwiperSlide>
          )}
          <div className="swiper-button-next navigation-button"></div>
          <div className="swiper-button-prev navigation-button"></div>
          <div className="autoplay-progress autoplay-counter" slot="container-end"></div>
          
      </Swiper>
    </> 
  );
}
