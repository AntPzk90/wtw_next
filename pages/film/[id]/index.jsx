import React from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { wrapper } from '../../../store/store'
import { addComments, addFilm } from '../../../store/filmsSlice'
import { fetchFilm, fetchFilmComments } from '../../../api/api'

import Layout from '../../../components/Layout'
import InfoBlock from '../../../components/_blocks/info-block/InfoBlock'
import Sprite from '../../../components/sprite/Sprite'


const Film = () => {
  const { film, comments } = useSelector((state) => state.films)

  return (<>
    <Head>
      <title key='title'>{'title index page'}</title>
      <meta property='og:title' content={'title index page'} key='og:title' />
      <meta property='og:description' content={'description'} key='og:description' />
      <meta name='description' content={'description'} key='description' />
      <meta />
    </Head>
    <Sprite />
    <Layout film={film} isInnerPage>
      <InfoBlock film={film} comments={comments} />
    </Layout>
  </>)
}

export default Film

export const getServerSideProps = wrapper.getServerSideProps((store) => {
  return async (context) => {
    const cookieJWT = context.req.cookies.jwt
    const response = fetchFilm('GET', `https://9.react.pages.academy/wtw/films/${context.query.id}`, cookieJWT)
    const data = await response
    const responseComments = fetchFilmComments('GET', `https://9.react.pages.academy/wtw/comments/${context.query.id}`, cookieJWT)
    const dataComments = await responseComments
    store.dispatch(addFilm(data))
    store.dispatch(addComments(dataComments))
  }
})
