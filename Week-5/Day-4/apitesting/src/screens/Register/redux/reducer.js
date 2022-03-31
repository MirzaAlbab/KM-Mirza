const initialState = {
  data : {
    username: '',
    password: '',
    email: '',
    name:{
      firstname: '',
      lastname: ''
    },
    address:{
      city: '',
      street: '',
      number: '',
      zipcode: '',
      geolocation:{
        lat: '',
        long: ''
      }
    },
    phone: '',

  }
}

const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {

  case 'SET_REGISTER':
    return { 
      ...state, 
      data: action.payload
    }

  default:
    return {
      ...state,
    };
  }
}
export default RegisterReducer;
