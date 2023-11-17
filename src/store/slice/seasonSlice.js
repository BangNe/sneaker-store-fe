import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'

import * as bannerSevices from '../../services/bannerSevices'

export const fetchBanner = createAsyncThunk('banner/fetchBanner', async () => {
    const result = await bannerSevices.getBanner()
    return result
})

export const bannerSlice = createSlice({
    name : 'banner',
    initialState : {status : 'success' , initState : []},
    reducers : {

    },
    extraReducers : builder => {
        builder
            .addCase(fetchBanner.pending, (state,action) => {
                state.status = 'loading'
            })
            .addCase(fetchBanner.fulfilled, (state,action) => {
                state.status = 'success'
                state.initState = action.payload
            })
            .addCase(fetchBanner.rejected, (state,action) => {
                state.status = 'failure'
            })
    }
})

export default bannerSlice.reducer