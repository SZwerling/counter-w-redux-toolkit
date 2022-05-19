import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter', //state
  initialState, //state
  reducers: {
    increment: (state) => {  //action inside reducer
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1
    },
    decrement: (state) => {  //action inside reducer
      state.count -= 1
    },
    incrementByAmount: (state, action) => {  //action inside reducer
      state.count += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions  //export actions to call in components

export default counterSlice.reducer  //export reducer to use in redux store