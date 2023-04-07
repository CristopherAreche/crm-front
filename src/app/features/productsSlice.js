import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../../services/productsServices";


const initialState = {
    error: null,
    products: [],
    message: "",
    status: "idle",
    };

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllProducts.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        })
        .addCase(getAllProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

export default productsSlice.reducer;




