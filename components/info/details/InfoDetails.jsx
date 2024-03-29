import React from 'react'

function InfoDetails({ director, starring = [], runtime, genre, released }) {
  return (
    <div className='movie-card__text movie-card__row'>
      <div className='movie-card__text-col'>
        <p className='movie-card__details-item'>
          <strong className='movie-card__details-name'>Director</strong>
          <span className='movie-card__details-value'>{director}</span>
        </p>
        <p className='movie-card__details-item'>
          <strong className='movie-card__details-name'>Starring</strong>
          <span className='movie-card__details-value'>
            {starring.map((starringItem) => (<span key={starringItem}>{starringItem}<br /></span>))}
          </span>
        </p>
      </div>
      <div className='movie-card__text-col'>
        <p className='movie-card__details-item'>
          <strong className='movie-card__details-name'>Run Time</strong>
          <span className='movie-card__details-value'>{runtime}m</span>
        </p>
        <p className='movie-card__details-item'>
          <strong className='movie-card__details-name'>Genre</strong>
          <span className='movie-card__details-value'>{genre}</span>
        </p>
        <p className='movie-card__details-item'>
          <strong className='movie-card__details-name'>Released</strong>
          <span className='movie-card__details-value'>{released}</span>
        </p>
      </div>
    </div>

  )
}

export default InfoDetails
