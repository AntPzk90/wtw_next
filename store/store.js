import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {HYDRATE, createWrapper} from 'next-redux-wrapper'
import users from './usersSlice'
import counter from './counterSlice'
import films from './filmsSlice'

const combinedReducer = combineReducers({
  counter,
  users,
  films
})

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      counter: {
        count: state.counter.count + action.payload.counter.count
      },
      users: {
        // users: [...action.payload.users.users, ...state.users.users]
      },
      films: {
        films: action.payload.films.films,
        genre: action.payload.films.genre,
        promo: action.payload.films.promo
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

export const wrapper = createWrapper(makeStore, {debug: true})
