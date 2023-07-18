import axios from "axios";

const detailAction = {

  
  getCity: (id) => {
    return async (dispatch, getState)=>{
      const res = await axios.get('https://cristina-api-cities-crud.onrender.com/api/cities/' + id)
      dispatch({type:"loadDetail", payload: res.data.response })
    }
  }


}

export default detailAction;