import '../styles/cityDetail.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Itineraries from './Itineraries';
import * as React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link as LinkRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import detailAction from '../redux/actions/detailAction';
import CityDetailCard from './CityDetailCard';

function CityDetail() {
  const dispatch = useDispatch();
  const { id } = useParams()
  const city = useSelector((state) => state.detailReducer.city);


useEffect(() => {
  dispatch(detailAction.getCity(id));
}, [dispatch, id]);

  return (

    <>
      <LinkRouter className='backCities' to={'/Cities'}><ArrowBackIcon />Cities</LinkRouter>
      {
        city.length > 0 &&  city[0] ?
          <div className='container-cityDetail'>
            <CityDetailCard city={city[0]} />

            <div className='titleItinerary'>
              <h2 className='itinerariesTitle'>Itineraries</h2>
            </div>

            <section className='cardItinerary'>
              
              <Itineraries cityId={city[0]._id}/>

            </section>

          </div>
          :
          <div>
            <div className="core-page-loader splash">
              <div className="plane-spinner">
                <div className="spinner-plane">
                </div>
              </div>
            </div>
          </div>
      }
    </>
  )

}
export default CityDetail;