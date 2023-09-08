import React from 'react'
import Header from '../header/Header'

function Poster({ children, film }) {
  const isFavorite = true
  return (<section className='movie-card'>
    <div className='movie-card__bg'>
      <img src={film.backgroundImage} alt={film.name} />
    </div>
    {children}
    <h1 className='visually-hidden'>WTW</h1>

    <div className='movie-card__wrap'>
      <div className='movie-card__info'>
        <div className='movie-card__poster'>
          <img src={film.posterImage} alt={`${film.name} poster`} width={218} height={327} />
        </div>

        <div className='movie-card__desc'>
          <h2 className='movie-card__title'>{film.name}</h2>
          <p className='movie-card__meta'>
            <span className='movie-card__genre'>{film.genre}</span>
            <span className='movie-card__year'>{film.released}</span>
          </p>

          <div className='movie-card__buttons'>
            <button className='btn btn--play movie-card__button' type='button'
                    onClick={() => {
                      // history.push(`${AppRoute.PLAYER}/${promoFilm.id}`);
                    }}
            >
              <svg viewBox='0 0 19 19' width='19' height='19'>
                <use xlinkHref='#play-s'></use>
              </svg>
              <span>Play</span>
            </button>
            <button className='btn btn--list movie-card__button' type='button'
                    onClick={() => {
                      // onMyListBtnClick(promoFilm, authorizationStatus);
                    }}
            >
              {isFavorite ? <svg viewBox='0 0 18 14' width='18' height='14'>
                <use xlinkHref='#in-list' />
              </svg> : <svg viewBox='0 0 19 20' width={19} height={20}>
                <use xlinkHref='#add' />
              </svg>}
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>)
}

export default Poster
