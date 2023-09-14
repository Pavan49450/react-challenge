import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login-slice";
import doctorsSlice from "./doctors-slice";

const store = configureStore({
  reducer: { login: loginSlice, doctor: doctorsSlice },
});

export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch

export default store;
