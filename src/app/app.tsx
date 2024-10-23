import React from 'react';
import { FilmListPage } from "../pages/film-list";
import { Provider as ReduxProvider } from "react-redux";
import { setupStore } from "../store";

const reduxStore = setupStore();

export const App = () => {
  return (
    <ReduxProvider store={reduxStore}>
      <FilmListPage/>
    </ReduxProvider>
  );
};
