import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      name: '',
      surname: '',
    },
    reducers: {
      login: (state) => {
      
        state.name,
        state.surname 
      },
      jobform: (state) => {
        state.name,
        state.surname
      },
      logByAmount: (state, action) => {
        state.name += action.payload
        state.surname += action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { login, jobform, loginByAmount } = counterSlice.actions
  
  export default counterSlice.reducer
  