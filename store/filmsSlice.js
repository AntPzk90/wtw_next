import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  films: [],
  promo: {},
  genre: 'All genres',
  myFilms: [],
  film: {},
  comments: []
}

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    addFilms: (state, action) => {
      state.films = [...action.payload]
    },
    updateFilms: (state, action) => {
      state.films = [...action.payload]
    },
    addActiveGenre: (state, action) => {
      state.genre = action.payload
    },
    addPromoFilm: (state, action) => {
      state.promo = { ...action.payload }
    },
    addMyFilmsList: (state, action) => {
      state.myFilms = [...action.payload]
    },
    addFilm: (state, action) => {
      state.film = { ...action.payload }
    },
    addComments: (state, action) => {
      state.comments = [...action.payload]
    }
  }
})

export const {
  addFilms,
  updateFilms,
  addActiveGenre,
  addPromoFilm,
  addMyFilmsList,
  addFilm,
  addComments
} = filmsSlice.actions

export default filmsSlice.reducer
