const initialState = {
  listTopTab: ['Now Playing', 'Top Rated', 'Popular'],
  listMovie:[],
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LIST_MOVIE':
      return {
        ...state,
        listMovie: action.payload,
      };
      
    default:
      return {
        ...state,
      };
  }
};
export default MovieReducer;