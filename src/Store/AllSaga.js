import {all} from 'redux-saga/effects';
import {SagaHome} from '../Screens/Home/SagaHome';
import {sagaGetMovies} from '../Screens/Home/sagaTest';
import {SagaLogin} from '../Screens/Login/SagaLogin';
import {SagaRegister} from '../Screens/Register/SagaRegister';

export function* AllSaga() {
  yield all([SagaHome(), SagaLogin(), SagaRegister(), sagaGetMovies()]);
}
