import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import * as products from '../../services/productSevices'

export const getMenuProduct = createAsyncThunk('product/getMenuProduct', async (brand) => {
    const result = await products.getMenuProduct(brand)
    return result
})

export const getSearchProduct = createAsyncThunk('product/getSearchProduct', async (valueSearch) => {
    const result = await products.searchProduct(valueSearch)
    return result
})

export const getProductDetail = createAsyncThunk('product/getProductDetail', async (name) => {
    const result = await products.getProductdetails(name)
    return result
})

export const getType = createAsyncThunk('product/getType', async (brand) => {
    const result = await products.getType(brand)
    return result
})

export const getSize = createAsyncThunk('product/getSize', async (brand) => {
    const result = await products.getSize(brand)
    return result
})

export const getRangePrice = createAsyncThunk('product/getRangePrice', async (brand) => {
    const result = await products.getRangePrice(brand)
    return result
})

export const productSlice = createSlice({
  name: 'product',
  initialState : {status : 'leisured', rangePrice : {maxPrice: 10000000, minPrice: 0},searchProduct :[]} ,
  reducers: {
    urlProduct : (state, action) => {
        state.urlProduct = action.payload
    },
    nameProductDetail : (state, action) => {
        state.nameProductDetail = action.payload

    }
  },
  extraReducers: (builder) => {
    builder
        //getSearchProduct
        .addCase(getSearchProduct.pending, (state , action) => {
            state.status = 'loading'
        })
        .addCase(getSearchProduct.fulfilled, (state , action) => {
            state.status = 'success'
            state.searchProduct = action.payload.data
            state.mess = action.payload.mess
        })
        .addCase(getSearchProduct.rejected, (state,action) => {
            state.status = 'failure'
        })

        //getMenuProduct
        .addCase(getMenuProduct.pending, (state , action) => {
            state.status = 'loading'
        })
        .addCase(getMenuProduct.fulfilled, (state , action) => {
            state.status = 'success'
            state.menuProduct = action.payload.data
            state.mess = action.payload.mess
        })
        .addCase(getMenuProduct.rejected, (state,action) => {
            state.status = 'failure'
        })

        //getProductDetail
        .addCase(getProductDetail.pending, (state , action) => {
            state.status = 'loading'
        })
        .addCase(getProductDetail.fulfilled, (state , action) => {
            state.status = 'success'
            state.productDetail = action.payload.data
            state.mess = action.payload.mess
        })
        .addCase(getProductDetail.rejected, (state,action) => {
            state.status = 'failure'
        })

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

        //getProduct
  }
})

export const { urlProduct , nameProductDetail } = productSlice.actions

export default  productSlice.reducer
