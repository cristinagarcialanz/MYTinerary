import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CarouselFlip from './CarouselFlip';
import '../styles/itineraries.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Itineraries() {

  const [itineraries, setItinerary] = useState([]);

  const { id } = useParams()
  const [favorites, setFavorites] = useState([]);

  async function getItinerary(cityID) {
    try {

      let itineraryDB

      itineraryDB = await axios.get('https://cristina-api-itineraries-crud.onrender.com/api/itineraries');
      // {params:{cityID:cityID}}
      console.log(itineraryDB.data.response);
      const filteredItineraries = itineraryDB.data.response.itineraries.filter((itinerary) => itinerary.cityID === cityID);
      setItinerary(filteredItineraries);


    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getItinerary(id);

  }, [id])

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavoriteClick = (cityId) => {
    if (favorites.includes(cityId)) {
      setFavorites(favorites.filter((id) => id !== cityId));
    } else {
      setFavorites([...favorites, cityId]);
    }
  };

  const isFavorite = (cityId) => favorites.includes(cityId);

  return (
    <>
      {itineraries.length === 0 ? (

        <div className="messageNoFound">
          <h3>Itinerary under construction...</h3>
          <img src="https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/itineraries%2Frecurring-settings.gif?alt=media&token=f0cf26e3-f677-4bf0-91ec-647c54841644" alt="" />
        </div>
      ) : (

        itineraries.map((itinerary) => (
          <Card key={itinerary._id} className='cardItineraries' sx={{ minWidth: 345 }}>
            <div className='viewPrincipal'>
              <CardMedia
                className='imageCardMedia'
                component="img"
                image={itinerary.imageItinerary}
                alt="imageItinerary"
              />
              <CardContent className='cardContentItinerary'>
                <CardHeader
                  avatar={
                    <Avatar src={itinerary.imageAutor} style={{ width: '70px', height: '70px' }}>
                      </Avatar>
                  }
                  action={
                    <IconButton
                      className={isFavorite(itinerary._id) ? 'favorite favorite-icon' : 'favorite'}
                      aria-label="add to favorites"
                      onClick={() => handleFavoriteClick(itinerary._id)}
                    >
                      <ThumbUpIcon /> 0
                    </IconButton>
                  }
                  title={itinerary.autor}
                  
                />
                <Typography className='titleItineries'>{itinerary.itinerary}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {itinerary.description}
                </Typography>
                <CardActions disableSpacing className='iconsItinaries'>
                  <div className='iconsItinaries'>
                    <div> Price: {' '}
                      {Array(itinerary.price).fill().map((_, index) => (
                        <img key={index} src="https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/itineraries%2Ficonos%2Fbillete-de-un-dolar.png?alt=media&token=4b6435c1-30f1-4c8e-a248-9e86235e7a85"
                          alt="dollar" width="35px" />
                      ))} </div>

                    <div><img src="https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/itineraries%2Ficonos%2Fzona-horaria.png?alt=media&token=6c65e432-30e1-4d7e-9f39-d450bb7b7d09" alt="dollar" width="35px" />{itinerary.duration}</div>
                    <div className='hashtags'>
                      <ul>
                        {itinerary.hashtags.map((hashtag, index) => (
                          <li key={index}>{hashtag}</li>
                        ))}
                      </ul>
                    </div>

                    <div className='buttonExpand'>
                      <p>Explore More</p>
                      <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >

                        <ExpandMoreIcon />
                      </ExpandMore>
                    </div>
                  </div>

                </CardActions>
              </CardContent>
            </div>
            <Collapse in={expanded} timeout="auto" unmountOnExit className='cardCarouselItinerary'>
              <div className='titleItinerary'>
                <h2 className='itinerariesTitle'>Let's Explore</h2>

              </div>
              <CardContent className='cardCarouselItineraries'>

                <CarouselFlip images={itinerary.image} />

              </CardContent>
            </Collapse>

          </Card>
        )))}
    </>
  );
}