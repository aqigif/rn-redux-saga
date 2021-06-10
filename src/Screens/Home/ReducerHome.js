const initialState = {
  listData: [],
};

// export const actionHome = {
//   type: 'SET_HOME',
//   data: 'dadang',
// };

// reducer menerima data api dari action set dan memasukkan ke initial state lalu ke store
export default (state = initialState, action) => {
  console.log('REDUCER GET MOVIES');
  switch (action.type) {
    case 'SET_LIST_MOVIE':
      return {
        ...state,
        listData: action.payload,
      };
    case 'GET_MOVIES_REQUESTED':
      return {
        ...state,
      };
    case 'GET_MOVIES_SUCCEEDED':
      return {
        ...state,
        moviesData: action.data,
      };
    case 'GET_MOVIES_FAILED':
      return {
        ...state,
        moviesData: action.data,
      };
    default:
      return state;
  }
};
