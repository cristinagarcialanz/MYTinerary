import axios from 'axios';


export const getItineraries= (cityID) => {
    return async (dispatch) => {
      try {
        const response = await axios.get('https://cristina-api-itineraries-crud.onrender.com/api/itineraries');
        const filteredItineraries = response.data.response.itineraries.filter((itinerary) => itinerary.cityID === cityID);
        dispatch({ type: 'loadItineraries', payload: filteredItineraries });
      } catch (error) {
        console.error(error);
      }
    };
  }
  export const addFavorite = (itineraryID) => {
    return { type: 'addFavorite', payload: itineraryID };
  }
  export const removeFavorite= (itineraryID) => {
    return { type: 'removeFavorite', payload: itineraryID };
  }


