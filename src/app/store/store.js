import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "../features/clientSlice";
import activityReducer from "../features/clientActivitiesSlice";
import sellerSlice from "../features/sellerSlice";
import authSlice from "../features/authSlice";
import productsSlice from "../features/productsSlice";
import bossSlice from "../features/bossSlice";

export const store = configureStore({
  reducer: {
    clients: clientReducer,
    activities: activityReducer,
    sellers: sellerSlice,
    auth: authSlice,
    products: productsSlice,
    boss: bossSlice,
  },
});
