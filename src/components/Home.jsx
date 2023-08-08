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
        <LinkRouter to={'/Cities'}><img src="https://cdn.discordapp.com/attachments/1116849578575155230/1120061436018823290/pandb-travel.gif" alt='Call to action'/></LinkRouter>
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