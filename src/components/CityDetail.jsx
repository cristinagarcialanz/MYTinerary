import '../styles/cityDetail.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link as LinkRouter } from "react-router-dom";

function CityDetail() {

  const [city, setCity] = useState([]);
  const { id } = useParams()

  async function getCity(id) {
    let cityDB
    cityDB = await axios.get('https://cristina-api-cities-crud.onrender.com/api/cities/' + id);
    setCity(cityDB.data.response);

  }

  useEffect(() => {
    getCity(id);
  }, [])


  return (

    <>
      <LinkRouter className='backCities' to={'/Cities'}><ArrowBackIcon />Cities</LinkRouter>
      {
        city.length > 0 ?
          <div>
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
                  <p className="card-detail-amount-total"> Price $ {city[0].price}</p>
                </div>
                <div className='containerItinerary'>
                  <button className="card-detail-buttonItinerary"> Itinerary 1</button>
                  <button className="card-detail-buttonItinerary"> Itinerary 2</button>
                  <button className="card-detail-buttonItinerary"> Itinerary 3</button>
                </div>
                <button className="card-detail-button"> Reservation</button>
              </div>
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