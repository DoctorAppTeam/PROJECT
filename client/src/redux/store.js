import { configureStore } from "@reduxjs/toolkit";
import { alertsSlice } from "./features/alertsSlice";

export default configureStore({
  reducer: {
    alerts: alertsSlice.reducer,
  },
});
