import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import * as products from '../../services/productSevices'

export const getType = createAsyncThunk('product/getType', async () => {
    const result = await products.getType()
    return result
})

export const getSize = createAsyncThunk('product/getSize', async () => {
    const result = await products.getSize()
    return result
})

export const getRangePrice = createAsyncThunk('product/getRangePrice', async () => {
    const result = await products.getRangePrice()
    return result
})

export const productSlice = createSlice({
  name: 'product',
  initialState : {status : 'leisured', rangePrice : {maxPrice: 10000000, minPrice: 0}} ,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
        //getType
        .addCase(getType.pending, (state , action) => {
            state.status = 'loading'
        })
        .addCase(getType.fulfilled, (state , action) => {
            state.status = 'success'
            state.type = action.payload.data
            state.mess = action.payload.mess
        })
        .addCase(getType.rejected, (state,action) => {
            state.status = 'failure'
        })
        //getSize
        .addCase(getSize.pending, (state , action) => {
            state.status = 'loading'
        })
        .addCase(getSize.fulfilled, (state , action) => {
            state.status = 'success'
            state.size = action.payload.data
            state.mess = action.payload.mess
        })
        .addCase(getSize.rejected, (state,action) => {
            state.status = 'failure'
        })
        //getRangePrice
        .addCase(getRangePrice.pending, (state , action) => {
            state.status = 'loading'
        })
        .addCase(getRangePrice.fulfilled, (state , action) => {
            state.status = 'success'
            state.rangePrice = action.payload.data
            state.mess = action.payload.mess
        })
        .addCase(getRangePrice.rejected, (state,action) => {
            state.status = 'failure'
        })
  }
})

export default  productSlice.reducer
