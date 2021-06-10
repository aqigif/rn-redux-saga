import axios from 'axios';
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
const theApi =
  'https://api.themoviedb.org/3/discover/movie?api_key=f7b67d9afdb3c971d4419fa4cb667fbf';
// worker Saga: akan berjalan ketika ada action GET_MOVIES_REQUESTED
function* serviceSagaGetMovies(action) {
  console.log('SERVICE GET MOVIES', action);
  try {
    const res = yield axios.get(theApi + `&page=${action.filter.page}`);
    yield put({type: 'GET_MOVIES_SUCCEEDED', data: res.data.results});
  } catch (e) {
    yield put({type: 'GET_MOVIES_FAILED', message: e.message});
  }
}

export function* sagaGetMovies() {
  yield takeLatest('GET_MOVIES_REQUESTED', serviceSagaGetMovies);
}
