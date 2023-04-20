import { createSlice } from "@reduxjs/toolkit";

import {
  getSellers,
  postSeller,
  putSeller,
  toggleStatusSeller,
} from "../../services/sellersServices";
import {
  statePostSeller,
  statePutSeller,
  stateToggleStatusSeller,
} from "../../handlers/handlerSellers";

const initialState = {
  sellers: [],
  copySellers: [],
  seller: {},
  message: "",
  status: "idle",
  statusSeller: "idle",
  error: null,
  sellerSelected: "",
};

export const sellerSlice = createSlice({
  name: "sellers",
  initialState,
  reducers: {
    cleanSellers: (state, action) => {
      state.sellers = [];
      state.copySellers = [];
      state.seller = {};
    },
    selectedSellerCheckbox: (state, action) => {
      state.sellerSelected = action.payload;
    },
    cleanSellerSelect: (state) => {
      state.sellerSelected = null;
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
              order === "asc"
                ? a.avgFeedback - b.avgFeedback
                : b.avgFeedback - a.avgFeedback
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
              orderEn === "asc" ? a.enable - b.enable : b.enable - a.enable
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
                ? a.total_monthly_sales - b.total_monthly_sales
                : b.total_monthly_sales - a.total_monthly_sales
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
      })
      .addCase(postSeller.fulfilled, (state, action) => {
        statePostSeller(state, action);
      })

      .addCase(putSeller.fulfilled, (state, action) => {
        statePutSeller(state, action);
      })
      .addCase(toggleStatusSeller.fulfilled, (state, action) => {
        const status = action.payload;
        stateToggleStatusSeller(state, action, status);
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
  cleanSellerSelect,
  cleanSellers,
} = sellerSlice.actions;
export default sellerSlice.reducer;
