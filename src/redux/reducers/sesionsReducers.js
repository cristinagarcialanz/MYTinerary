const initialState = {
  sesions: [],
  auxSesions: [],
  searchResult: [],
}

const sesionsReducer = (state = initialState, action) => {

  switch (action.type) {
    case "searchResult":
      return {
        ...state,
        searchResult: action.payload
      }
    case "loadSesions":
      return {
        ...state,
        sesions: action.payload,
        searchResult: action.payload
      }
    default:
      return state

  }
}

export default sesionsReducer