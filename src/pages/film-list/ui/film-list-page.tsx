import React from 'react';
import { Space, Typography } from "antd";
import { getFilmList } from "../api";

export function FilmListPage():JSX.Element {
  const filmList = getFilmList();
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
    </div>
  );
}