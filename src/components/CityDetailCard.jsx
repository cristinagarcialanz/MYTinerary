import React from 'react';
import Avatar from '@mui/material/Avatar';

const CityDetailCard = ({ city }) => {
  return (
    <section className="card">
      <div className="card-image-container">
        <img className="card-image" src={city.image} alt="Imagen Detalle" />
      </div>
      <div className="card-detail">
        <div className="tituloAvatar">
          <h1 className="card-detail-title">{city.name}</h1>
          <Avatar src={city.flag}></Avatar>
        </div>

        <h2 className="card-detail-caption">{city.country}</h2>
        <p className="card-detail-desc">{city.description}</p>
        <p className="card-detail-desc">{city.longDescription}</p>
        <div className="card-detail-amount">
          <p className="card-detail-amount-total">Population: {city.population}</p>
        </div>
      </div>
    </section>
  );
};

export default CityDetailCard;