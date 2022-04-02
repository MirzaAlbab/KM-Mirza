const initialState = {
  token : '',
  tema:'light', 
}

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {

    case ("SET_TOKEN"):
      return { 
        ...state, 
        token: action.payload 
      }
    case ("SET_THEME"):
      return {
        ...state,
        tema: action.payload
      }
  
    default:
      return state
    }
  
}

