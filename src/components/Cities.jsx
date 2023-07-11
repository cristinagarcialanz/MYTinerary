import { useEffect, useState } from 'react';
import '../styles/cities.css';
import { Link as LinkRouter } from 'react-router-dom';
import axios from 'axios';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';

function Cities() {

  const [cities, setCities] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);
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

const handleFavoriteClick = (cityId) => {
  if (favorites.includes(cityId)) {
    setFavorites(favorites.filter((id) => id !== cityId));
  } else {
    setFavorites([...favorites, cityId]);
  }
};

const isFavorite = (cityId) => favorites.includes(cityId);


  return (
    <div className='containCities'>
      <div className='inputSearch'>
        <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search cities"
      />
      <SearchIcon />
      </div>
      
    
    <div className='in-construction'>
      
      {showNoResultsMessage ? (
          <div className='messageNoFound'>No destinations found</div>
        ) :
      
      filteredCitiesByName.length > 0 ?(
        filteredCitiesByName.map((city) => (
  <div key={city._id} className='cardCities'>

              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar src={city.flag}>

                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={city.name}
                  subheader={city.country}
                //subheader={city.description}
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
                  <CardActions disableSpacing>
                  <IconButton
                      className={isFavorite(city._id) ? 'favorite favorite-icon' : 'favorite'}
                      aria-label="add to favorites"
                      onClick={() => handleFavoriteClick(city._id)}
                    >
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share" className='share'>
                    <ShareIcon />
                  </IconButton>
                </CardActions>              
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <LinkRouter to={'/CityDetail/' + city._id} className='explore'>                
                <button className="explore-button">Explore More</button>
                      </LinkRouter>
                  </div>
              
                </div>
                
                
              </Card>
          
          </div>
          
          
          )))
        :(
  <div>
    <div className="core-page-loader splash">
      <div className="plane-spinner">
        <div className="spinner-plane">
        </div>
      </div>
    </div>
  </div>

)}
<a href="#" className="subir"><KeyboardArrowUpIcon /></a>
    </div >
    </div >
    
    
  );
}
export default Cities;