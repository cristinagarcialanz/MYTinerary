const initialState = {
  detail: [],
  city: [],
  auxDetail: [],  
}

const detailReducer = (state = initialState, action) => {

  switch (action.type) {
    
    case "loadDetail":
      return {
        ...state,
        detail: action.payload,
        
      }
    default:
      return state

  }
}

export default detailReducer