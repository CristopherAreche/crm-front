import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "../features/clientSlice";
import activityReducer from "../features/clientActivitiesSlice";

export const store = configureStore({
  reducer: {
    clients: clientReducer,
    activities: activityReducer,
  },
});
