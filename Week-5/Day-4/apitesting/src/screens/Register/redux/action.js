export const setUsername= (data) => {
  return {
    type: 'SET_USERNAME',
    payload: data,
  };
}
export const setPassword= (data) => {
  return{
    type: 'SET_PASSWORD',
    payload: data,
  }
  
}
export const setEmail= (data) => {
  return{
    type: 'SET_EMAIL',
    payload: data,
  }
}
