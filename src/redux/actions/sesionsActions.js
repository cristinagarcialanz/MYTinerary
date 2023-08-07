import axios from "axios";

const sesionsActions = {

  searchResult: (filterResult) => {
    return (dispatch, getState) => {
      dispatch({ type: "searchResult", payload: filterResult })
    }

  },

  getSesions: () => {
    return async (dispatch, getState) => {
      const res = await axios.get('https://cristina-api-cities-crud.onrender.com/api/cities')
      dispatch({ type: "loadSesions", payload: res.data.response.sesions })
    }
  }


}





export default sesionsActions;