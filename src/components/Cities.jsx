import { useEffect, useState } from 'react';
import '../styles/cities.css';
import { Link as LinkRouter } from 'react-router-dom';
import axios from 'axios';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchCities from './SearchCities';

function Cities() {

  const [cities, setCities] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  let citiesDB

  async function getData() {
    try {
      citiesDB = await axios.get('https://cristina-api-cities-crud.onrender.com/api/cities');
      const citiesData = citiesDB.data.response.cities;
      setCities(citiesData);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])
  const filteredCitiesByName = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const showNoResultsMessage = searchTerm !== '' && filteredCitiesByName.length === 0;

  return (
    <div className='containCities'>
      <SearchCities searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />

      <div className='in-construction'>

        {showNoResultsMessage ? (
          <div className='messageNoFound'>No destinations found <img src="https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/itineraries%2Fsearch%20(2).gif?alt=media&token=0a5ce9da-7e7a-4f14-ba62-58eedd311486" alt='' /></div>
        ) :

          filteredCitiesByName.length > 0 ? (
            filteredCitiesByName.map((city) => (
              <div key={city._id} className='cardCities'>

                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar src={city.flag}>

                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="share" className='share'>
                        <ShareIcon />
                      </IconButton>
                    }
                    title={city.name}
                    subheader={city.country}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={city.image}
                    alt="Ciudad"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" padding="0.7rem" height="4rem">
                      {city.description}
                    </Typography>
                  </CardContent>
                  <div className='selects'>
                    
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <LinkRouter to={'/CityDetail/' + city._id} className='explore'>
                        <button className="explore-button">Explore More</button>
                      </LinkRouter>
                    </div>
                  </div>
                </Card>
              </div>
            )))
            : (
              <div>
                <div className="core-page-loader splash">
                  <div className="plane-spinner">
                    <div className="spinner-plane">
                    </div>
                  </div>
                </div>
              </div>

            )}
        <a href=" " className="subir"><KeyboardArrowUpIcon /></a>
      </div >
    </div >


  );
}
export default Cities;