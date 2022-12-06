import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl, v3 } from "../../apikeys";


export default createSlice({
    name: "nowplaying",
    initialState: {
        value: [],
        error: null,
        status: "pending"
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchnowplaying.pending, (state,action) => {
            state.status ="pending";
            state.error = null;
        })
        builder.addCase(fetchnowplaying.fulfilled, (state,action) => {
            state.value = action.payload;
            state.status = "fulfilled";
            state.error = null;
        })
        builder.addCase(fetchnowplaying.rejected, (state,action) => {
            state.status = "rejected";
            state.error = action.payload;
        })
    }

})

export const fetchnowplaying = createAsyncThunk("Now Playing/fetch", async () => {
    try {
        const { data } = await axios.get(baseUrl + "/movie/now_playing/?api_key=" + v3 + "&language=en-US&page=1");
        return data;

    } catch (error) {
        return error;
    }
})

