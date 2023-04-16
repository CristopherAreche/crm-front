import { createSlice } from "@reduxjs/toolkit";
import {
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  toggleStatusProduct,
  createProduct,
} from "../../services/productsServices";
import {
  stateDeleteProduct,
  statePostProduct,
  statePutProduct,
  stateToggleStatusProduct,
  stateFilterByEnabled,
  stateSortedByAlph,
  stateOrderByPrice,
  stateCategory,
} from "../../handlers/handlerProducts";
const initialState = {
  error: null,
  products: [],
  copyProducts: [],
  productsCategory: [],
  message: "",
  status: "idle",
  productSelected: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchProducts: (state, action) => {
      state.products = action.payload;
    },
    selectedProductCheckbox: (state, action) => {
      state.productSelected = action.payload;
    },
    cleanProductSelect: (state, action) => {
      state.productSelected = "";
    },
    resetProducts: (state, action) => {
      state.products = state.copyProducts;
    },
    sortProducts: (state, action) => {
      stateSortedByAlph(state, action);
    },
    sortEnabledProducts: (state, action) => {
      stateFilterByEnabled(state, action);
    },
    sortPrice: (state, action) => {
      stateOrderByPrice(state, action);
    },
    filterByCategory: (state, action) => {
      stateCategory(state, action);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        console.log("cargando...");
        state.status = "loading";
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
        state.copyProducts = action.payload;
        console.log("ingresado", state.status);
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getProductById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        statePostProduct(state, action);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        statePutProduct(state, action);
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(toggleStatusProduct.fulfilled, (state, action) => {
        const status = action.payload;
        stateToggleStatusProduct(state, action, status);
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        stateDeleteProduct(state, action);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  searchProducts,
  selectedProductCheckbox,
  cleanProductSelect,
  resetProducts,
  sortEnabledProducts,
  sortProducts,
  sortPrice,
  filterByCategory,
} = productsSlice.actions;

export default productsSlice.reducer;
