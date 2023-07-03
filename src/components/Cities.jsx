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

import Button from '@mui/material/Button';

function Cities() {

  const [cities, setCities] = useState([])

  let citiesDB
  async function getData() {
    citiesDB = await axios.get('http://localhost:4000/api/cities');
    setCities(citiesDB.data.response.cities);
    //console.log(citiesDB)
    console.log(cities)
  }

  useEffect(() => {
    getData()
  }, [])

  // useEffect(() => {
  //   console.log(cities);
  // }, [cities]);

  return (
    <div className='in-construction'>

      {cities.length > 0 ?

        cities.map((city, index) =>

          
            <div key={index}>

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
                  <Typography variant="body2" color="text.secondary">
                    {city.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>

                {/* <CardActions> */} 
                <LinkRouter to={'/CityDetail/'+city._id}>                
                  <Button size="small">Explore More</Button>
                  </LinkRouter>
                {/* </CardActions> */}
                
              </Card>
          
          </div>)
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

    </div >
  )

}
export default Cities;