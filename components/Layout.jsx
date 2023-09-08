import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


import Header from './header/Header'
import Poster from './poster/Poster'
import Footer from './footer/Footer'
import { addUser } from '../store/usersSlice'
import { checkUserAuth, userAuth } from '../api/api'
import InternalPoster from './poster/internal/InternalPoster'

const Layout = ({ children, film, isInnerPage = false }) => {
  // const {token} = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const getCookie = (name) => {
    const cookies = Object.assign({}, ...document.cookie.split('; ').map(cookie => {
      const name = cookie.split('=')[0]
      const value = cookie.split('=')[1]

      return { [name]: value }
    }))

    return cookies[name]
  }

  useEffect(() => {
    const token = getCookie('jwt')

    if (token) {
      const userData = checkUserAuth('GET', 'https://9.react.pages.academy/wtw/login', token)
      userData.then((res) => {
        dispatch(addUser(res))
        document.cookie = `jwt=${res.token}`
      })
    }
  }, [])

  if (!film) return (<>
    <div className='page-content page-content--no-poster'>
      <Header />
      {children}
      <Footer />
    </div>
  </>)

  return (<>
    {isInnerPage ?
      <InternalPoster film={film}>
        <Header />
      </InternalPoster> :
      <Poster film={film}>
        <Header />
      </Poster>
    }
    <div className={'page-content'}>
      {children}
      <Footer />
    </div>
  </>)
}

export default Layout
