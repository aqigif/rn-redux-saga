import {applyMiddleware, createStore} from 'redux';
import {AllReducer} from './AllReducer';
import {persistReducer, persistStore} from 'redux-persist';
import Logger from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSaga from 'redux-saga';
import {all} from 'redux-saga/effects';
import {AllSaga} from './AllSaga';

const persistConfig = {
  key: 'sagas',
  storage: AsyncStorage,
};

// redux saga selalu berhubungan dengan fetching api
const SagaMiddleware = createSaga();

const persistreducer = persistReducer(persistConfig, AllReducer);

export const Store = createStore(
  AllReducer,
  {},
  applyMiddleware(Logger, SagaMiddleware),
);

export const StorePersist = persistStore(Store);

// function saga
// function* HalloSaga() {
//   console.log('Hai Saga');
// }
// function* HalloSaga1() {
//   console.log('Hai Saga1');
// }
// function* HalloSaga2() {
//   console.log('Hai Saga2');
// }

// memanggil semua function harus menggunakan saga effect all()
// function* allSagas() {
//   yield all([HalloSaga(), HalloSaga1(), HalloSaga2()]);
// }

// me run function saga harus menggunakan method run dan hanya bisa satu function
SagaMiddleware.run(AllSaga);
