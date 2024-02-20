import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import user from './usersSlice'
import films from './filmsSlice'

const combinedReducer = combineReducers({
  user,
  films
})

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      user: {
        user: { ...action.payload.user.user }
      },
      films: {
        films: action.payload.films.films,
        genre: action.payload.films.genre,
        promo: action.payload.films.promo,
        myFilms: action.payload.films.myFilms,
        film: action.payload.films.film,
        comments: action.payload.films.comments
      }
    }
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

export const makeStore = () =>
  configureStore({
    reducer: masterReducer
  })

export const wrapper = createWrapper(makeStore, { debug: true })
