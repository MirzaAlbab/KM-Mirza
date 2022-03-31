export const setUsername = (username) => {
  return {
    type: 'SET_USERNAME',
    payload: username,
  };
}
export const setPassword = (password) => {
  return {
    type: 'SET_PASSWORD',
    payload: password,
  };
}
export const setLoading = (loading) => {
  return {
    type: 'SET_LOADING',
    payload: loading,
  };
}