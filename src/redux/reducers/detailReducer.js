const initialState = {
  city: [],
  auxDetail: [],  
}

const detailReducer = (state = initialState, action) => {

  switch (action.type) {
    
    case "loadDetail":
      return {
        ...state,
        city: action.payload,
        
      }
    default:
      return state

  }
}

export default detailReducer