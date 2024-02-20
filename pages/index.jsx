import React from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { wrapper } from '../store/store'
import { addFilms, addPromoFilm } from '../store/filmsSlice'
import { fetchFilms, fetchPromoFilm } from '../api/api'

import Layout from '../components/Layout'
import FilmsListBlock from '../components/_blocks/films-list-block/FilmsListBlock'
import Sprite from '../components/sprite/Sprite'

const Index = () => {
  const { films, genre, promo } = useSelector((state) => state.films)

  return (<>
    <Head>
      <title key='title'>{'title index page'}</title>
      <meta property='og:title' content={'title index page'} key='og:title' />
      <meta property='og:description' content={'description'} key='og:description' />
      <meta name='description' content={'description'} key='description' />
      <meta />
    </Head>
    <Sprite />
    <Layout film={promo}>
      <FilmsListBlock films={films} activeGenre={genre} />
    </Layout>
  </>)
}

export default Index

export const getServerSideProps = wrapper.getServerSideProps((store) => {
  return async (context) => {
    const cookieJWT = context.req.cookies.jwt
    const response = fetchFilms('GET', 'https://9.react.pages.academy/wtw/films', cookieJWT)
    const responsePromo = fetchPromoFilm('GET', 'https://9.react.pages.academy/wtw/promo', cookieJWT)
    const data = await response
    const dataPromo = await responsePromo
    store.dispatch(addFilms(data))
    store.dispatch(addPromoFilm(dataPromo))
  }
})
