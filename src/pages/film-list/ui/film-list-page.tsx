import React from 'react';
import { Button, Space, Typography } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../store';
import { addFilm } from '../../../store/slices/films/film-slice';
import { Film } from '../api';
// import { getFilmList } from "../api";

export function FilmListPage():JSX.Element {
  const filmList = useAppSelector(state => state.films);
  const dispatch = useAppDispatch();


  const handleClick = () => {
    const newFilm: Film = {id: Math.round(Math.random()* 10), title: 'NewIOInteractive'}

    dispatch(addFilm(newFilm));
  }

  return (
    <div>
      <Space>
        <Typography.Title>Список фильмов</Typography.Title>

        <div className="">
          <Space>
            {filmList.map((film) => (
              <div key={film.id}>{film.title}</div>
            ))}
          </Space>
        </div>
      </Space>

      <Button onClick={handleClick}>Hello Kitty</Button>
    </div>
  );
}