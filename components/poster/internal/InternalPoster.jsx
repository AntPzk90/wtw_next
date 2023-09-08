import React from 'react'

function InternalPoster({ children, film }) {
  const isFavorite = true
  return (
    <div className='movie-card movie-card__hero'>
      <div className='movie-card__bg'>
        <img src={film.backgroundImage} alt={film.name} />
      </div>
      <h1 className='visually-hidden'>WTW</h1>
      {children}
      <div className='movie-card__wrap'>
        <div className='movie-card__desc'>
          <h2 className='movie-card__title'>{film.name}</h2>
          <p className='movie-card__meta'>
            <span className='movie-card__genre'>{film.genre}</span>
            <span className='movie-card__year'>{film.released}</span>
          </p>
          <div className='movie-card__buttons'>
            <button className='btn btn--play movie-card__button' type='button'>
              <svg viewBox='0 0 19 19' width={19} height={19}>
                <use xlinkHref='#play-s' />
              </svg>
              <span>Play</span>
            </button>
            <button className='btn btn--list movie-card__button' type='button'>
              <svg viewBox='0 0 19 20' width={19} height={20}>
                <use xlinkHref='#add' />
              </svg>
              <span>My list</span>
            </button>
            <a href='add-review.html' className='btn movie-card__button'>
              Add review
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default InternalPoster
