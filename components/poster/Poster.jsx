import React from 'react'

import cloneDeep from 'lodash.clonedeep'
import { changeFavoriteStatus } from '../../api/api'
import { useDispatch, useSelector } from 'react-redux'
import { addPromoFilm, updateFilms } from '../../store/filmsSlice'
import { useRouter } from 'next/router'

function Poster({ children, film }) {
  const { user } = useSelector((state) => state.user)
  const { films } = useSelector((state) => state.films)
  const dispatch = useDispatch()
  const router = useRouter()

  const getUpdatedFilmsArray = (film) => {
    const updatedFilmsArray = cloneDeep(films)
    updatedFilmsArray[films.findIndex((element) => element.id === film.id)] = film

    return updatedFilmsArray
  }

  console.log(user.token)

  return (
    <section className='movie-card'>
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
                        changeFavoriteStatus('POST', `https://9.react.pages.academy/wtw/favorite/${film.id}/${film.isFavorite ? 0 : 1}`, user.token)
                          .then((film) => {
                            dispatch(updateFilms(getUpdatedFilmsArray(film)))
                            dispatch(addPromoFilm(film))
                          }).catch(() => {
                          router.push('/log-in')
                        })
                      }}
              >
                {film.isFavorite ? <svg viewBox='0 0 18 14' width='18' height='14'>
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
