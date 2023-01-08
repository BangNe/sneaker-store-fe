import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import * as brandSevices from '../../services/brandSevices'

export const fetchBrand = createAsyncThunk('brand/fetchBrand', async () => {
    const result = await brandSevices.getBrand()
    return result
})

export const brandSlice = createSlice({
  name: 'brand',
  initialState : {status : 'success' , initState : []} ,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchBrand.pending, (state , action) => {
            state.status = 'loading'
        })
        .addCase(fetchBrand.fulfilled, (state , action) => {
            state.status = 'success'
            state.initState = action.payload
        })
        .addCase(fetchBrand.rejected, (state,action) => {
            console.log({action})
            state.status = 'failure'
        })
  }
})

export default  brandSlice.reducer
