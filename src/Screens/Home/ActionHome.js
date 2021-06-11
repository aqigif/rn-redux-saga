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
  return {
    type: 'GET_MOVIES_REQUESTED',
    filter,
  };
};

export const actionUpdateProfile = data => {
  return {
    type: 'UPDATE_PROFILE_REQUESTED',
    data,
  };
};
