import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import user from './usersSlice'
import counter from './counterSlice'
import films from './filmsSlice'
import context from 'react-redux/lib/components/Context'

const combinedReducer = combineReducers({
  counter,
  user,
  films
})

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      counter: {
        count: state.counter.count + action.payload.counter.count
      },
      user: {
        user: { ...action.payload.user.user }
      },
      films: {
        films: action.payload.films.films,
        genre: action.payload.films.genre,
        promo: action.payload.films.promo,
        film: action.payload.films.film
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
