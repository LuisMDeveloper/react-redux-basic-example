import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
  showCounter: true,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload
    },
    decrement(state, action) {
      state.counter = state.counter - action.payload
    },
    toggle(state) {
      state.showCounter = !state.showCounter
    },
  },
})

export const { increment, decrement, toggle } = counterSlice.actions
