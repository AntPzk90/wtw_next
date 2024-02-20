import React from 'react'
import Head from 'next/head'
import { wrapper } from '../../store/store'
import { useSelector } from 'react-redux'

import { fetchMyListFilms } from '../../api/api'
import { addMyFilmsList } from '../../store/filmsSlice'

import Sprite from '../../components/sprite/Sprite'
import Layout from '../../components/Layout'
import FilmsListBlock from '../../components/_blocks/films-list-block/FilmsListBlock'


function MyList() {
  const { myFilms, genre } = useSelector((state) => state.films)

  return (
    <>
      <Head>
        <title key='title'>{'title index page'}</title>
        <meta property='og:title' content={'title index page'} key='og:title' />
        <meta property='og:description' content={'description'} key='og:description' />
        <meta name='description' content={'description'} key='description' />
        <meta />
      </Head>
      <Sprite />
      <Layout>
        <section className='catalog'>
          <FilmsListBlock films={myFilms} activeGenre={genre} />
        </section>
      </Layout>
    </>
  )
}

export default MyList

export const getServerSideProps = wrapper.getServerSideProps((store) => {
  return async (context) => {
    const cookieJWT = context.req.cookies.jwt
    const response = fetchMyListFilms('GET', 'https://9.react.pages.academy/wtw/favorite', cookieJWT)
    const data = await response
    store.dispatch(addMyFilmsList(data))
  }
})
