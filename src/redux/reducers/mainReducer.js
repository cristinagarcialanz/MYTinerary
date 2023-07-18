import { combineReducers } from "redux";
import citiesReducer from "./citiesReducers";
import detailReducer from "./detailReducer"

const mainReducer = combineReducers({
    citiesReducer,
    detailReducer
})

export default mainReducer;