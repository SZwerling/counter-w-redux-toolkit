import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
  selectedSong: {
    title: "song one",
    duration: "4:32"
  },
  mySongs: [
    {
      title: "song one",
      duration: "4:32"
    },
    {
      title: "Number Two of the Songs",
      duration: "3:21"
    },
    {
      title: "three",
      duration: "3:33"
    }
  ]
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
      state.count += 1;
    },
    decrement: (state) => {
      state.count -=1;
    },
    selectSong: (state, action) => {
      return {...state, selectedSong: action}
    }
  },
})

// return {
//   ...state,
//   value: 123,
// }

// Action creators are generated for each case reducer function
export const { increment, decremen, selectSong } = counterSlice.actions  //export actions to call in components

export default counterSlice.reducer  //export reducer to use in redux store