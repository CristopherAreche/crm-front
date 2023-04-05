import { createSlice } from "@reduxjs/toolkit";

import {
    getSellers,
} from "../../services/sellersServices";

const initialState = {
    sellers: [],
    message: "",
    status: "idle",
    error: null,
};

export const sellerSlice = createSlice({
    name: "sellers",
    initialState,
    reducers: {
        selectedSellerCheckbox: (state, action) => {
            state.sellerSelected = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSellers.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(getSellers.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload
                state.sellers = action.payload;


            })
            .addCase(getSellers.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export const { selectedSellerCheckbox } = sellerSlice.actions;
export default sellerSlice.reducer;




