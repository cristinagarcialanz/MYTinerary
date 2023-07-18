import '../styles/cityDetail.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Itineraries from './Itineraries';
import * as React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link as LinkRouter } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import detailAction from "../redux/actions/detailAction";

function CityDetail() {

  const dispatch = useDispatch()  
  let cities = useSelector(store=>store.detailReducer.detail)
  const { id } = useParams()
  const [city, setCity] = useState([]);

  useEffect(() => {
    dispatch(detailAction.getCity(id))           
}, [])

useEffect(() => {
  setCity(id);
}, [])

  // async function getCity(id) {
  //   let cityDB
  //   cityDB = await axios.get('https://cristina-api-cities-crud.onrender.com/api/cities/' + id);

  //   setCity(cityDB.data.response);
  // }

  // 


  return (

    <>
      <LinkRouter className='backCities' to={'/Cities'}><ArrowBackIcon />Cities</LinkRouter>
      {
        // city.length > 0
        city.length > 0 && city[0] ?
          <div className='container-cityDetail'>
            <section className="card">
              <div className="card-image-container">
                <img className="card-image" src={city[0].image} alt="Imagen Detalle" />
              </div>
              <div className="card-detail">
                <div className='tituloAvatar'>
                  <h1 className="card-detail-title">{city[0].name}</h1>
                  <Avatar src={city[0].flag}></Avatar>
                </div>

                <h2 className="card-detail-caption">{city[0].country}</h2>
                <p className="card-detail-desc">{city[0].description}</p>
                <p className="card-detail-desc">{city[0].longDescription}</p>
                <div className="card-detail-amount">
                  <p className="card-detail-amount-total"> Population: {city[0].population}</p>
                </div>

              </div>
            </section>

            <div className='titleItinerary'>             
                <h2 className='itinerariesTitle'>Itineraries</h2>              
            </div>

            <section className='cardItinerary'>


              <Itineraries />



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