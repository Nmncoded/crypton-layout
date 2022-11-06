import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value : 0,
  animateFace : false,
  isShareOptionVisible : false
}

export const headerSlice = createSlice({
  name: 'Header',
  initialState,
  reducers: {
    setAnimateFace: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.animateFace = action.payload
    },
    setShareOptionVisibility: (state,action) => {
      state.isShareOptionVisible = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAnimateFace, setShareOptionVisibility } = headerSlice.actions;


export default headerSlice.reducer