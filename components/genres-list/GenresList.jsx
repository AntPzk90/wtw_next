import React from 'react'

import { addActiveGenre } from '../../store/filmsSlice'
import { useDispatch } from 'react-redux'

function GenresList({ genresList, activeGenre }) {
  const dispatch = useDispatch()
  if (genresList.length === 0) return 'list is empty'
  if (!genresList) return 'error'

  return (<ul className='catalog__genres-list'>
    {genresList.map((genreItem) => (// eslint-disable-next-line
      <li className={`catalog__genres-item ${activeGenre === genreItem ? `catalog__genres-item--active` : ``}`}
          key={genreItem}>
        <a className='catalog__genres-link' onClick={() => {
          dispatch(addActiveGenre(genreItem))
        }}>{genreItem}</a>
      </li>))}
  </ul>)
}

export default GenresList
