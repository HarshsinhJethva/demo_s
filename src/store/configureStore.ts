import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

import api from './middleware/api';
import localState from './middleware/localState';

import reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 0,
};

const middlewareConfig = {
  serializableCheck: false,
  immutableCheck: false,
};

// persisted Reducer with root reduer
const persistedReducer = persistReducer(persistConfig, reducer);

// exported store here
const store = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware(middlewareConfig).concat(api, localState),
  });
};

export default store;
