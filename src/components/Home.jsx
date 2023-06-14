import { Link as LinkRouter } from 'react-router-dom';
import Carousel from './Carousel';
import CarouselCards from './CarouselCards';


function Home() {

  return (
    <>
      <button>
        <LinkRouter to={'/Cities'}> Cities </LinkRouter>
      </button>
      <Carousel />
      <CarouselCards />
      
      

      
    </>
  )
}
export default Home;