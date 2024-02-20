import { createSlice } from '@reduxjs/toolkit'
import { USER_STATUS } from '../constants/constants'

const initialState = {
  user: {
    token: USER_STATUS.noAuth
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
