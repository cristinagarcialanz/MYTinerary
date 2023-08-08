import { combineReducers } from "redux";
import citiesReducer from "./citiesReducers";
import detailReducer from "./detailReducer"
import itineraryReducer from "./itineraryReducer"

const mainReducer = combineReducers({
    citiesReducer,
    detailReducer,
    itineraryReducer
})

export default mainReducer;

