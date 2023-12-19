
//Este archivo contiene rebanadas "slice"
import { createSlice } from '@reduxjs/toolkit'

export const userFeature = createSlice({
  name: 'user',
  initialState: {
    value: {isAdmin: false}, 
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload
      // {isAdmin: false} = {name: "Alan", isAdmin: true} 
    },
  },
})

// Action creators are generated for each case reducer function
export const {setUser} = userFeature.actions;
export default userFeature.reducer; 