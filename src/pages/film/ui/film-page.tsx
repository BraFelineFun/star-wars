import React from 'react';
import { Button } from "antd";

export type IFilmPage = {
  id: string;
};

export function FilmPage(props: IFilmPage):JSX.Element {
  const {id} = props;
  return (
    <div>
      <Button disabled/>
      This film id is {id}
    </div>
  );
}