import { Film } from "./dto";

export const getFilmList = (): Film[] => {
  return [
    {id: 1, title: 'Белоснежка'},
    {id: 2, title: 'Семь Гномов'},
    {id: 3, title: 'Белоснежка и семь Гномов: кроссовер'},
  ]
}