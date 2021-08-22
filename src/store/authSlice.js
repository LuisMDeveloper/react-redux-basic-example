import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      console.log(action.payload)
      if (
        action.payload.email === 'root@email.com' &&
        action.payload.password === 'toor'
      ) {
        state.isAuthenticated = true
      }
    },
    logout(state) {
      state.isAuthenticated = false
    },
  },
})

export const { login, logout } = authSlice.actions
