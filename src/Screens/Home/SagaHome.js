import {
  take,
  takeEvery,
  takeLatest,
  takeLeading,
  takeMaybe,
  put,
} from 'redux-saga/effects';
import axios from 'axios';
import {setMovie, setListMovie} from './ActionHome';

function* sagaGetListMovie() {
  //   https://api.themoviedb.org/3/discover/movie?api_key=f7b67d9afdb3c971d4419fa4cb667fbf
  const res = yield axios.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=f7b67d9afdb3c971d4419fa4cb667fbf&page=2',
  );
  //   mem set data dari api ke action setMovie
  yield put(setListMovie(res.data.results));
}

// saga action take untuk mengambil data dari api menggunakan function getListMovie()
export function* SagaHome() {
  yield takeLatest('GET_LIST_MOVIE', sagaGetListMovie);
}
