import '../styles/cityDetail.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import * as React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link as LinkRouter } from "react-router-dom";

function CityDetail() {

  const [city, setCity] = useState([]);
  const { id } = useParams()

  async function getCity(id) {
    let cityDB
    cityDB = await axios.get('http://localhost:4000/api/cities/' + id);
    setCity(cityDB.data.response);
    console.log(id)
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
                <img className="card-image" src={city[0].image} alt="Imagen Detalle"/>
              </div>
              <div className="card-detail">                
                <h1 className="card-detail-title">{city[0].name}</h1>
                <h2 className="card-detail-caption">{city[0].country}</h2>
                <p clasNames="card-detail-desc">{city[0].description}</p>
                <div className="card-detail-amount">
                  <p className="card-detail-amount-total"> Price $ {city[0].price}</p>                  
                </div>
                <button class="card-detail-button"> Reservation</button>
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