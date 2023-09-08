import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

function Header() {
  const { user } = useSelector((state) => state.user)
  const authorizationStatus = user.token ? true : false
  return (<header className='page-header movie-card__head'>
    <div className='logo'>
      <Link href='/' className='logo__link'>
        <span className='logo__letter logo__letter--1'>W</span>
        <span className='logo__letter logo__letter--2'>T</span>
        <span className='logo__letter logo__letter--3'>W</span>
      </Link>
    </div>
    <div className='user-block'>
      {authorizationStatus ?
        <Link href='/my-list' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <div className='user-block__avatar'>
            <img src={user.avatarUrl} alt='User avatar' width='63' height='63' />
          </div>
          <span className='user-block__link'>
              {user.name}
            </span>
        </Link> : <Link href='/log-in' className='user-block__link'>Sign in</Link>}
    </div>
  </header>)
}

export default Header
