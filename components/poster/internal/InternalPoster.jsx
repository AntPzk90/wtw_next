import React from 'react'
import { changeFavoriteStatus } from '../../../api/api'
import { useDispatch, useSelector } from 'react-redux'
import { addFilm } from '../../../store/filmsSlice'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { USER_STATUS } from '../../../constants/constants'

function InternalPoster({ children, film }) {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const router = useRouter()

  const isReviewPage = router.pathname == '/film/[id]/review' ? true : false
  const isUserAuth = user.token !== USER_STATUS.noAuth ? true : false

  return (
    <div className='movie-card movie-card__hero'
         style={{ paddingBottom: isReviewPage && 0, minHeight: isReviewPage && 0 }}>
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
          <div className='movie-card__buttons' style={{ display: isReviewPage && 'none' }}>
            <button className='btn btn--play movie-card__button' type='button'>
              <svg viewBox='0 0 19 19' width={19} height={19}>
                <use xlinkHref='#play-s' />
              </svg>
              <span>Play</span>
            </button>
            <button className='btn btn--list movie-card__button' type='button' onClick={() => {
              changeFavoriteStatus('POST', `https://9.react.pages.academy/wtw/favorite/${film.id}/${film.isFavorite ? 0 : 1}`, user.token)
                .then((film) => {
                  dispatch(addFilm(film))
                }).catch(() => {
                router.push('/log-in')
              })

            }}>
              {film.isFavorite ? <svg viewBox='0 0 18 14' width='18' height='14'>
                <use xlinkHref='#in-list' />
              </svg> : <svg viewBox='0 0 19 20' width={19} height={20}>
                <use xlinkHref='#add' />
              </svg>}
              <span>My list</span>
            </button>
            <Link href={isUserAuth ? `/film/${film.id}/review` : '/log-in'} className='btn movie-card__button'>
              Add review
            </Link>
          </div>
        </div>
        {isReviewPage &&
          <div className='movie-card__poster movie-card__poster--small'>
            <img
              src={film.posterImage}
              alt={film.name}
              width={218}
              height={327}
            />
          </div>
        }
      </div>
    </div>

  )
}

export default InternalPoster
