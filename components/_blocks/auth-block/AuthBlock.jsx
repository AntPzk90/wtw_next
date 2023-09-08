import React, { useState, useRef } from 'react'
import { userAuth } from '../../../api/api'
import { useDispatch } from 'react-redux'
import { addUser } from '../../../store/usersSlice'
import { useRouter } from 'next/router'


function AuthBlock() {
  const [emailValue, setEmail] = useState(null)
  const [passValue, setPass] = useState(null)
  const emailInput = useRef()
  const passInput = useRef()
  const dispatch = useDispatch()
  const router = useRouter()

  const postFormData = (evt) => {
    evt.preventDefault()
    const userData = userAuth('POST', 'https://9.react.pages.academy/wtw/login', {
      'email': emailValue, 'password': passValue
    })
    userData.then((res) => {
      dispatch(addUser(res))
      document.cookie = `jwt=${res.token}`
    }).then(() => {
      router.push('/')
    })
  }

  return (<div className='sign-in user-page__content'>
      <form action='#' className='sign-in__form' onSubmit={(evt) => {
        postFormData(evt)
      }}>
        <div className='sign-in__fields'>
          <div className='sign-in__field'>
            <input
              className='sign-in__input'
              type='email'
              placeholder='Email address'
              name='user-email'
              id='user-email'
              onKeyPress={() => {
                setEmail(emailInput.current.value)
              }}
              ref={emailInput}
            />
            <label className='sign-in__label visually-hidden' htmlFor='user-email'>
              Email address
            </label>
          </div>
          <div className='sign-in__field'>
            <input
              className='sign-in__input'
              type='password'
              placeholder='Password'
              name='user-password'
              id='user-password'
              onKeyPress={() => {
                setPass(passInput.current.value)
              }}
              ref={passInput}
            />
            <label
              className='sign-in__label visually-hidden'
              htmlFor='user-password'
            >
              Password
            </label>
          </div>
        </div>
        <div className='sign-in__submit'>
          <button className='sign-in__btn' type='submit'>
            Sign in
          </button>
        </div>
      </form>
    </div>

  )
}

export default AuthBlock
