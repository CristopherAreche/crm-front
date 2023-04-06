import { createSlice } from "@reduxjs/toolkit";

import { getSellers } from "../../services/sellersServices";

const initialState = {
  sellers: [],
  copySellers: [],
  message: "",
  status: "idle",
  error: null,
  sellerSelected: "",
};

export const sellerSlice = createSlice({
  name: "sellers",
  initialState,
  reducers: {
    selectedSellerCheckbox: (state, action) => {
      state.sellerSelected = action.payload;
    },
    searchSellers: (state, action) => {
      state.sellers = action.payload;
    },
    sortSellers: (state, action) => {
      const { order } = action.payload;
      const allSellers = [...state.copySellers];
      const SellersSorted =
        order === "todos"
          ? allSellers
          : state.sellers.sort((a, b) =>
              order === "asc"
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name)
            );
      state.sellers = SellersSorted;
    },
    sortPerformanceSellers: (state, action) => {
      const { order } = action.payload;
      const allSellers = [...state.copySellers];
      const sellersSorted =
        order === "todos"
          ? allSellers
          : state.sellers.sort((a, b) =>
              order === "asc" ? a.vip - b.vip : b.vip - a.vip
            );
      state.sellers = sellersSorted;
    },
    sortEnabledSellers: (state, action) => {
      const { orderEn } = action.payload;
      const allSellers = [...state.copySellers];
      const sellersSorted =
        orderEn === "todos"
          ? allSellers
          : state.sellers.sort((a, b) =>
              orderEn === "asc"
                ? a.performance - b.performance
                : b.performance - a.performance
            );
      state.sellers = sellersSorted;
    },
    sortSales: (state, action) => {
      const { orderP } = action.payload;
      const allSellers = [...state.copySellers];
      const sellersSorted =
        orderP === "todos"
          ? allSellers
          : state.sellers.sort((a, b) =>
              orderP === "asc"
                ? a.totalsales - b.totalsales
                : b.totalsales - a.totalsales
            );
      state.sellers = sellersSorted;
    },
    resetSellers: (state, action) => {
      state.sellers = state.copySellers;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSellers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getSellers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.sellers = action.payload;
        state.copySellers = action.payload;
      })
      .addCase(getSellers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  selectedSellerCheckbox,
  sortSellers,
  sortPerformanceSellers,
  sortSales,
  sortEnabledSellers,
  resetSellers,
  searchSellers,
} = sellerSlice.actions;
export default sellerSlice.reducer;
