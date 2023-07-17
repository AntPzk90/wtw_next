import React from "react";
import {GENRES_LIST} from '../../../constants/constants';

import List from "../../list/List";
import GenresList from "../../genres-list/GenresList";

function FilmsListBlock({films, activeGenre}) {

  const getAllGenres = () => {
    const genresList = new Set();
    
    genresList.add('All genres');

    films.forEach((film) => {
      genresList.add(film.genre)
    });

    return Array.from(genresList);
  }

  const genresList = getAllGenres();
  const getFilteredFilmsList = () => {
    if (activeGenre === 'All genres') return films;
    return films.filter((film) => {
      return film.genre == activeGenre
    })
  }
  return (
    <section className='catalog'>
      <GenresList genresList={genresList} activeGenre={activeGenre}/>
      <List list={getFilteredFilmsList()}/>
    </section>
  )
}

export default FilmsListBlock;
