import axios from 'axios';
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
const theApi = 'https://reqres.in/api/users/2';
// worker Saga: akan berjalan ketika ada action GET_MOVIES_REQUESTED
function* serviceSagaGetMovies(action) {
  console.log('SERVICE GET MOVIES', action);
  try {
    const res = yield axios.get(theApi);
    yield put({type: 'GET_MOVIES_SUCCEEDED', data: res.data});
  } catch (e) {
    yield put({type: 'GET_MOVIES_FAILED', message: e.message});
  }
}

export function* sagaGetMovies() {
  yield takeLatest('GET_MOVIES_REQUESTED', serviceSagaGetMovies);
}
// worker Saga: akan berjalan ketika ada action UPDATE_PROFILE_REQUESTED
function* serviceSagaUpdateProfile(action) {
  try {
    const res = yield axios.put(theApi, action.data);
    console.log(res);
    yield put({type: 'UPDATE_PROFILE_SUCCEEDED', dataUpdate: res.data});
  } catch (e) {
    yield put({type: 'UPDATE_PROFILE_FAILED', messageUpdate: e.message});
  }
}

export function* sagaUpdateProfile() {
  yield takeLatest('UPDATE_PROFILE_REQUESTED', serviceSagaUpdateProfile);
}
