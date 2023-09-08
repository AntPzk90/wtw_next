import React, { useEffect } from 'react'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'

import { fetchMyListFilms } from '../../api/api'
import { addMyFilmsList } from '../../store/filmsSlice'

import Sprite from '../../components/sprite/Sprite'
import Layout from '../../components/Layout'


function MyList() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)

  useEffect(() => {
    const token = user.token
    const myList = fetchMyListFilms('GET', 'https://9.react.pages.academy/wtw/favorite', token)
    myList.then((res) => {
      dispatch(addMyFilmsList(res))
    })
  }, [])

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
          <h1>My list</h1>
        </section>
      </Layout>
    </>
  )
}

export default MyList
