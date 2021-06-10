// action set movie menerima data dari saga get dari parameter payload dan mengirim ke reducer
// export const setMovie = payload => {
//   return {
//     type: 'SET_MOVIE_LIST',
//     payload,
//   };
// };

export const setListMovie = data => {
  return {
    type: 'SET_LIST_MOVIE',
    payload: data,
  };
};

// action untuk mendapatkan data dari api diambil oleh saga
// export const getMovie = () => {
//   return {
//     type: 'GET_MOVIE_LIST',
//   };
// };

export const getListMovie = () => {
  return {
    type: 'GET_LIST_MOVIE',
  };
};

export const actionGetListMovie = filter => {
  console.log('ACTION GET MOVIES', 'filter: { page: 3, sort:DESC}');
  return {
    type: 'GET_MOVIES_REQUESTED',
    filter,
  };
};
