import { FilmList } from "./dto/get-film-list-response";

export const getFilmList = (): FilmList => {
  return [
    {id: 1, title: 'Белоснежка'},
    {id: 2, title: 'Семь Гномов'},
    {id: 3, title: 'Белоснежка и семь Гномов: кроссовер'},
  ]
}