import React from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { userUnAuth } from '../../api/api'
import { addUser } from '../../store/usersSlice'
import { USER_STATUS } from '../../constants/constants'

function Header() {
  const dispatch = useDispatch()
  const { route } = useRouter()
  const router = useRouter()
  const { user } = useSelector((state) => state.user)
  const isUserAuth = user.token !== USER_STATUS.noAuth ? true : false

  return (
    <header className='page-header movie-card__head'>
      <div className='logo'>
        {route == '/' ?
          <span className='logo__link'>
            <span className='logo__letter logo__letter--1'>W</span>
            <span className='logo__letter logo__letter--2'>T</span>
            <span className='logo__letter logo__letter--3'>W</span>
          </span>
          :
          <Link href='/' className='logo__link'>
            <span className='logo__letter logo__letter--1'>W</span>
            <span className='logo__letter logo__letter--2'>T</span>
            <span className='logo__letter logo__letter--3'>W</span>
          </Link>
        }
      </div>
      <div className='user-block'>
        {isUserAuth && route !== '/my-list' &&
          <Link href='/my-list' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <div className='user-block__avatar'>
              <img src={user.avatarUrl} alt='User avatar' width='63' height='63' />
            </div>
            <span className='user-block__link'>
              {user.name}
            </span>
          </Link>}
        {!isUserAuth && route !== '/my-list' &&
          <Link href='/log-in' className='user-block__link'>Sign in</Link>}
        {route == '/my-list' && <a className='user-block__link' onClick={() => {
          userUnAuth('DELETE', `https://9.react.pages.academy/wtw/logout`, user.token).then(() => {
            dispatch(addUser({
              token: USER_STATUS.noAuth
            }))
            document.cookie = `jwt=${USER_STATUS.noAuth}`
            router.push('/')
          })
        }}
        >Log out</a>}
      </div>
    </header>)
}

export default Header
