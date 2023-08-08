import { Link as LinkRouter } from 'react-router-dom';
import CarouselCards from './CarouselCards';
import '../styles/carouselCards.css';
import '../styles/home.css';


import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Home() {

  return (
    <>
    <div className='banner-container'>
      <h1 className='slogan'>Find your perfect trip, designed by insiders who know and love their cities! </h1>
      <div className='modal'>

      <h3>Choose your tourist destination <ArrowForwardIosIcon/>
        <LinkRouter to={'/Cities'}><img src="https://firebasestorage.googleapis.com/v0/b/susangarcialanzdeweissbacher.appspot.com/o/imagenes%2Fgiphy%20(2).gif?alt=media&token=ab12b0a2-592a-4b53-ac29-bc42ad4f70f5" alt='Call to action'/></LinkRouter>
        </h3>
      </div>
    </div>
      <div className='title-carousel'>
        <h3 className='titulo'>Popular MYTineraries</h3>
      </div>
      <CarouselCards />
    </>
  )
}
export default Home;