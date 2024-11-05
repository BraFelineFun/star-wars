import { Film } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const INITIAL_VALUE: Film[] = [
  { id: 1, title: 'Белоснежка' },
  { id: 2, title: 'Семь Гномов' },
  { id: 3, title: 'Белоснежка и семь Гномов: кроссовер' },
];

export const filmSlice = createSlice({
  name: 'films',
  initialState: INITIAL_VALUE,
  reducers: {
    addFilm(state, action: PayloadAction<Film>) {
      state.push(action.payload);
    },
    removeFilm(state, action: PayloadAction<number>) {
      // action.payload - ID фильма
      state.splice(action.payload, 1);
    },
  },
});

export const { addFilm, removeFilm } = filmSlice.actions;
export const filmReducer = filmSlice.reducer;
