import React from 'react';
import { FilmListPage } from '../../pages/film-list';
import { Provider as ReduxProvider } from 'react-redux';
import { setupStore } from '../../store';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from '../lib';
import { Pages } from '../types';
import { Root } from '../../pages';
import { Empty } from 'antd';
import styles from './app.module.css';

const reduxStore = setupStore();

export const App = () => {
  return (
    <div className={styles['app']}>
      <ReduxProvider store={reduxStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/404" element={<Empty description={'Not Found'} />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
            <Route element={<Root />} path={'/'}>
              <Route element={<FilmListPage />} path={ROUTES[Pages.FilmList]} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ReduxProvider>
    </div>
  );
};
