import { Link as LinkRouter } from 'react-router-dom';
import CarouselCards from './CarouselCards';
import '../styles/carouselCards.css'
import '../styles/home.css'


function Home() {

  return (
    <>
    <div className='banner-container'>
      <h1 className='slogan'>Find your perfect trip, designed by insiders who know and love their cities! </h1>
      <div className='modal'>
        <button>
        <LinkRouter to={'/Cities'}> Cities </LinkRouter>
      </button>
      </div>
    </div>
           
      <h3 className='titulo'>Popular MYTineraries</h3>
      <CarouselCards />
      
      

      
    </>
  )
}
export default Home;