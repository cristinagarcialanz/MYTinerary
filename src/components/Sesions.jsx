import { useEffect, useState } from 'react';
import '../styles/sesions.css';
import * as React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { animateScroll as scroll } from 'react-scroll';
import Search from './Search';
import SesionCard from './SesionCard';
import { useDispatch, useSelector } from "react-redux";
import sesionsActions from "../redux/actions/sesionsActions";

function Sesions() {

  const dispatch = useDispatch()
  let searchResult = useSelector(store => store.sesionsReducer.searchResult)
  const sesions = useSelector(store => store.sesionsReducer.sesions)
  const [filteredSesions, setFilteredSesions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    dispatch(sesionsActions.getSesions())
  }, [])

  useEffect(() => {
    if (searchResult.length === 0) {
      setFilteredSesions(sesions);
    } else {
      setFilteredSesions(searchResult);
    }
  }, [searchResult, sesions]);

  useEffect(() => {
    setIsLoading(sesions.length === 0);
  }, [sesions]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const showNoResultsMessage = searchResult.length === 0 && !isLoading;

  return (
    <div className='containSesions'>
      <Search sesions={sesions} />
      <div className='in-construction'>

        {showNoResultsMessage ? (
          <div className='messageNoFound'>No sesions found <img src="https://firebasestorage.googleapis.com/v0/b/susangarcialanzdeweissbacher.appspot.com/o/imagenes%2Fastrologia.jpg?alt=media&token=e44e6155-a99a-4415-b0d4-4fb3ecfbbb1f" alt='astrología' /></div>
        ) :

          filteredSesions.length > 0 ? (
            filteredSesions.map((sesion) => (
              <SesionCard key={sesion._id} sesion={sesion} />
            )))
            : (
              
              <div>
                {/* SPINNER ORBITS */}
                <div className="spinner-box">
                  <div className="blue-orbit leo">
                  </div>

                  <div className="green-orbit leo">
                  </div>

                  <div className="red-orbit leo">
                  </div>

                  <div className="white-orbit w1 leo">
                  </div><div className="white-orbit w2 leo">
                  </div><div className="white-orbit w3 leo">
                  </div>
                </div>

                </div>

            )}
        <button className="subir" onClick={scrollToTop}><KeyboardArrowUpIcon /></button>
      </div >

    </div >

  );
}
export default Sesions;