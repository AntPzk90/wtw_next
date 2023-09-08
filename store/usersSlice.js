import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    token: null
  }
}

export const usersSlice = createSlice({
  name: 'user', initialState, reducers: {
    addUser: (state, action) => {
      state.user = { ...action.payload }
    }
  }
})

export const { addUser } = usersSlice.actions

export default usersSlice.reducer
