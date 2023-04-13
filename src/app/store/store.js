import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "../features/clientSlice";
import activityReducer from "../features/clientActivitiesSlice";
import sellerSlice from "../features/sellerSlice";
import authSlice from "../features/authSlice";
import productsSlice from "../features/productsSlice";
import bossSlice from "../features/bossSlice";
import postClientActivity from "../features/postActivitySlice";

export const store = configureStore({
  reducer: {
    clients: clientReducer,
    activities: activityReducer,
    activity: postClientActivity,
    sellers: sellerSlice,
    auth: authSlice,
    products: productsSlice,
    boss: bossSlice,
  },
});
