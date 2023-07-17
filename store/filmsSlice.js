import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  films: [],
  promo: {},
  genre: 'All genres'
}

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    addFilms: (state, action) => {
      state.films = [...action.payload]
    },
    addActiveGenre: (state, action) => {
      state.genre = action.payload
    },
    addPromoFilm: (state, action) => {
      state.promo = {...action.payload}
    }
  }
})

export const {addFilms, addActiveGenre, addPromoFilm} = filmsSlice.actions

export default filmsSlice.reducer
