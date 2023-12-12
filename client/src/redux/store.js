import { configureStore } from "@reduxjs/toolkit";
import { alertsSlice } from "./features/alertsSlice";
import { userSlice } from "./features/userSlice";

export default configureStore({
  reducer: {
    alerts: alertsSlice.reducer,
    user: userSlice.reducer,
  },
});
