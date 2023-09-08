import React from 'react'
import Head from 'next/head'

import Layout from '../../components/Layout'
import AuthBlock from '../../components/_blocks/auth-block/AuthBlock'
import Sprite from '../../components/sprite/Sprite'

function LogIn() {
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
        <AuthBlock />
      </Layout>
    </>
  )
}

export default LogIn
