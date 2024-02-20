import React, { useState } from 'react'
import InfoOverview from '../../info/overview/InfoOverview'
import InfoDetails from '../../info/details/InfoDetails'
import InfoReviews from '../../info/reviews/InfoReviews'
import { FILM_PAGE_TABS } from '../../../constants/constants'

function InfoBlock({ film, comments }) {
  const [activeTab, setActiveTab] = useState(FILM_PAGE_TABS.overview)

  return (
    <>
      <div className='movie-card'>
        <div className='movie-card__wrap movie-card__translate-top'>
          <div className='movie-card__info'>
            <div className='movie-card__poster movie-card__poster--big'>
              <img src={film.posterImage} alt={`${film.name} poster`} width={218} height={327} />
            </div>
            <div className='movie-card__desc'>
              <nav className='movie-nav movie-card__nav'>
                <ul className='movie-nav__list'>
                  <li
                    className={`movie-nav__item ${activeTab === FILM_PAGE_TABS.overview && 'movie-nav__item--active'}`}>
                    <a className='movie-nav__link' onClick={() => setActiveTab(FILM_PAGE_TABS.overview)}>
                      Overview
                    </a>
                  </li>
                  <li
                    className={`movie-nav__item ${activeTab === FILM_PAGE_TABS.details && 'movie-nav__item--active'}`}>
                    <a className='movie-nav__link' onClick={() => setActiveTab(FILM_PAGE_TABS.details)}>
                      Details
                    </a>
                  </li>
                  <li
                    className={`movie-nav__item ${activeTab === FILM_PAGE_TABS.reviews && 'movie-nav__item--active'}`}>
                    <a className='movie-nav__link' onClick={() => setActiveTab(FILM_PAGE_TABS.reviews)}>
                      Reviews
                    </a>
                  </li>
                </ul>
              </nav>
              {activeTab === FILM_PAGE_TABS.overview &&
                <InfoOverview
                  rating={film.rating}
                  scoresCount={film.scoresCount}
                  description={film.description}
                  director={film.director}
                  starring={film.starring}
                />}
              {activeTab === FILM_PAGE_TABS.details &&
                <InfoDetails
                  director={film.director}
                  starring={film.starring}
                  runtime={film.runTime}
                  released={film.released}
                  genre={film.genre}
                />
              }
              {activeTab === FILM_PAGE_TABS.reviews &&
                <InfoReviews comments={comments} />
              }
            </div>
          </div>
        </div>
      </div>
      <section className='catalog catalog--like-this'>
        <h2 className='catalog__title'>More like this</h2>
        {/*<div className='catalog__movies-list'>*/}
        {/*  <article className='small-movie-card catalog__movies-card'>*/}
        {/*    <div className='small-movie-card__image'>*/}
        {/*      <img*/}
        {/*        src='img/fantastic-beasts-the-crimes-of-grindelwald.jpg'*/}
        {/*        alt='Fantastic Beasts: The Crimes of Grindelwald'*/}
        {/*        width={280}*/}
        {/*        height={175}*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*    <h3 className='small-movie-card__title'>*/}
        {/*      <a className='small-movie-card__link' href='movie-page.html'>*/}
        {/*        Fantastic Beasts: The Crimes of Grindelwald*/}
        {/*      </a>*/}
        {/*    </h3>*/}
        {/*  </article>*/}
        {/*  <article className='small-movie-card catalog__movies-card'>*/}
        {/*    <div className='small-movie-card__image'>*/}
        {/*      <img*/}
        {/*        src='img/bohemian-rhapsody.jpg'*/}
        {/*        alt='Bohemian Rhapsody'*/}
        {/*        width={280}*/}
        {/*        height={175}*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*    <h3 className='small-movie-card__title'>*/}
        {/*      <a className='small-movie-card__link' href='movie-page.html'>*/}
        {/*        Bohemian Rhapsody*/}
        {/*      </a>*/}
        {/*    </h3>*/}
        {/*  </article>*/}
        {/*  <article className='small-movie-card catalog__movies-card'>*/}
        {/*    <div className='small-movie-card__image'>*/}
        {/*      <img src='img/macbeth.jpg' alt='Macbeth' width={280} height={175} />*/}
        {/*    </div>*/}
        {/*    <h3 className='small-movie-card__title'>*/}
        {/*      <a className='small-movie-card__link' href='movie-page.html'>*/}
        {/*        Macbeth*/}
        {/*      </a>*/}
        {/*    </h3>*/}
        {/*  </article>*/}
        {/*  <article className='small-movie-card catalog__movies-card'>*/}
        {/*    <div className='small-movie-card__image'>*/}
        {/*      <img src='img/aviator.jpg' alt='Aviator' width={280} height={175} />*/}
        {/*    </div>*/}
        {/*    <h3 className='small-movie-card__title'>*/}
        {/*      <a className='small-movie-card__link' href='movie-page.html'>*/}
        {/*        Aviator*/}
        {/*      </a>*/}
        {/*    </h3>*/}
        {/*  </article>*/}
        {/*</div>*/}
      </section>
    </>
  )
}

export default InfoBlock
