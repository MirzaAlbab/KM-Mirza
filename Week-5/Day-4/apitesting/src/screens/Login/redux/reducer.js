const initialState = {
  username: '',
  password: '',
  loading: false,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.payload,
      }
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.payload,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return {
        ...state,
      };
}};

export default LoginReducer