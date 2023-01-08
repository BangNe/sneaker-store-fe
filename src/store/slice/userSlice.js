import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import * as userSivices from '../../services/userSevices'

export const signUpUser = createAsyncThunk('user/signUpUser', async (data) => {
    const result = await userSivices.creatUser(data)
    return result
})

export const logInUser = createAsyncThunk('user/logInUser', async (data) => {
    const result = await userSivices.logInUser(data)
    return result
})

export const userSlice = createSlice({
  name: 'user',
  initialState : {status : 'success' , initState : [] , mess : {}} ,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
        //signUpUser
        .addCase(signUpUser.pending, (state , action) => {
            state.status = 'loading'
        })
        .addCase(signUpUser.fulfilled, (state , action) => {
            state.status = 'success'
            state.mess = action.payload
        })
        .addCase(signUpUser.rejected, (state,action) => {
            console.log({action})
            state.status = 'failure'
        })
        //logInUser
        .addCase(logInUser.pending, (state , action) => {
            state.status = 'loading'
        })
        .addCase(logInUser.fulfilled, (state , action) => {
            state.status = 'success'
            state.mess = action.payload
        })
        .addCase(logInUser.rejected, (state,action) => {
            console.log({action})
            state.status = 'failure'
        })
  }
})

export default  userSlice.reducer
