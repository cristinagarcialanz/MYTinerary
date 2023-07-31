import { useEffect, useState } from 'react';
import '../styles/cities.css';
import * as React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { animateScroll as scroll } from 'react-scroll';
import Search from './Search';
import CityCard from './CityCard';
import {useDispatch, useSelector } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";

function Cities() {

  const dispatch = useDispatch()
  let searchResult = useSelector(store => store.citiesReducer.searchResult)
  const cities = useSelector(store=>store.citiesReducer.cities)
  const [filteredCities, setFilteredCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    dispatch(citiesActions.getCities())           
}, []) 

useEffect(() => {
  if (searchResult.length === 0) {
    setFilteredCities(cities);
  } else {
    setFilteredCities(searchResult);
  }
}, [searchResult, cities]);

useEffect(() => {
  setIsLoading(cities.length === 0);
}, [cities]);

const scrollToTop = () => {
  scroll.scrollToTop();
};

  const showNoResultsMessage = searchResult.length === 0 && !isLoading;
  
  return (
    <div className='containCities'>
      <Search cities={cities} />
      <div className='in-construction'>

        {showNoResultsMessage ? (
          <div className='messageNoFound'>No destinations found <img src="https://firebasestorage.googleapis.com/v0/b/mytinerary-cities.appspot.com/o/itineraries%2Fsearch%20(2).gif?alt=media&token=0a5ce9da-7e7a-4f14-ba62-58eedd311486" alt='' /></div>
        ) :
        
        filteredCities.length > 0 ? (
          filteredCities.map((city) => (
              <CityCard key={city._id} city={city} />
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
            <button className="subir" onClick={scrollToTop}><KeyboardArrowUpIcon /></button>
      </div >
    
    </div >

  );
}
export default Cities;