import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filmReducer } from './slices/films/film-slice';

export const rootReducer = combineReducers({ films: filmReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
