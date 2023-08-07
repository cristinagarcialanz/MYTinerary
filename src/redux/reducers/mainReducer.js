import { combineReducers } from "redux";
import sesionsReducer from "./sesionsReducers";
import detailReducer from "./detailReducer"
import itineraryReducer from "./itineraryReducer"

const mainReducer = combineReducers({
    sesionsReducer,
    detailReducer,
    itineraryReducer
})

export default mainReducer;

