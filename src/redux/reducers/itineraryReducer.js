const initialState = {
    itineraries: [],
    favorites: [],
  };
  
  const itineraryReducer = (state = initialState, action) => {
    switch (action.type) {
      case "loadItineraries":
        return {
          ...state,
          itineraries: action.payload,
        };
      case "addFavorite":
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      case "removeFavorite":
        return {
          ...state,
          favorites: state.favorites.filter((id) => id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default itineraryReducer;