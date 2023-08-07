import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import { Link as LinkRouter } from 'react-router-dom';

function CityCard({ city }) {
    console.log(city);
  return (
    <div className='cardCities'>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar src={city.flag}></Avatar>}
          action={
            <IconButton aria-label='share' className='share'>
              <ShareIcon />
            </IconButton>
          }
          title={city.name} 
          subheader={city.country}
        />
        <CardMedia
          component='img'
          height='194'
          image={city.image}
          alt='Ciudad'
        />
        <CardContent>
          <Typography
            variant='body2'
            color='text.secondary'
            padding='0.7rem'
            height='4rem'
          >
            {city.description}
          </Typography>
        </CardContent>
        <div className='selects'>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <LinkRouter to={'/CityDetail/' + city._id} className='explore'>
              <button className='explore-button'>Explore More</button>
            </LinkRouter>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CityCard;