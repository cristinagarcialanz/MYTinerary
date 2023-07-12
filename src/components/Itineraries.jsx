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
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CarouselFlip from './CarouselFlip';
import '../styles/itineraries.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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

  const [city, setCity] = useState([]);
  const { id } = useParams()

  async function getCity(id) {
    let cityDB
    cityDB = await axios.get('https://cristina-api-cities-crud.onrender.com/api/cities/' + id);
    setCity(cityDB.data.response);

  }

  useEffect(() => {
    getCity(id);
  },[])

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className='cardItineraries' sx={{ minWidth: 345 }}>
      <div className='viewPrincipal'>
      <CardMedia
      className='imageCardMedia'
        component="img"
        image="https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/itineraries%2Fushuaia%2Fitinerary2%2Fcaption%20(2).jpg?alt=media&token=5ccd9ecd-b901-435b-871d-ba6663ea113a"
        alt="Paella dish"
      />
      <CardContent className='cardContentItinerary'>
      <CardHeader
        avatar={
          <Avatar src='https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/itineraries%2Ffotos%20de%20perfil%2FFotograf%C3%ADa-para-CV-en-Madrid.jpg?alt=media&token=89f57c8b-c0a9-4122-bfc5-1894590b7e2c' sx={{ bgcolor: red[400] }} aria-label="recipe">
            </Avatar>
            
        }
        action={
         <IconButton  aria-label="add to favorites">
          <FavoriteIcon /> 0
        </IconButton>
        }
        title="Carmela Sans"
        
        
      />
        <Typography className='titleItineries'>Trakking</Typography>
        <Typography variant="body2" color="text.secondary">
        Get a comprehensive tour of the Blue Mountains region from Sydney, with all activities and transport included. This tour makes embarking on this jam-packed day easy. With a small group of just 21 people or fewer, get views of Jamison Valley and the Three Sisters, and then visit Scenic World and Featherdale Wildlife Park. Lunch and a drink are included before you return to Sydney by ferry.
        </Typography>
         <CardActions disableSpacing className='iconsItinaries'>
        
          <div className='iconsItinaries'>
            <div>Price: <img src="https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/itineraries%2Ficonos%2Fbillete-de-un-dolar.png?alt=media&token=4b6435c1-30f1-4c8e-a248-9e86235e7a85" alt="dollar" width="35px"/></div>
            <div><img src="https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/itineraries%2Ficonos%2Fzona-horaria.png?alt=media&token=6c65e432-30e1-4d7e-9f39-d450bb7b7d09" alt="dollar" width="35px"/>3Hs.</div>
            <div>
              <ul>
                <li><a href=''>#travel</a></li>
              </ul>
              </div>
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
       
      </CardActions>
      
      </CardContent>
        </div>
      <Collapse in={expanded} timeout="auto" unmountOnExit className='cardCarouselItinerary'>
        <div className='titleItinerary'>
                  <h2 className='itinerariesTitle'>Let's Explore</h2>
                  
          </div>
        <CardContent className='cardCarouselItineraries'>
          
        <CarouselFlip />

        </CardContent>
      </Collapse>
      
    </Card>
  );
}