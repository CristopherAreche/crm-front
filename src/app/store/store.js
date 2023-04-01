import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "./clientSlice";
import activityReducer from "./clientActivitiesSlice";

export const store = configureStore({
  reducer: {
    clients: clientReducer,
    activities: activityReducer,
  },
});
