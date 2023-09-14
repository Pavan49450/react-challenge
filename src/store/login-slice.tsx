import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for your state
interface LoginState {
  loggedIn: boolean;
}

const initialState: LoginState = {
  loggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    toggle(state) {
      state.loggedIn = !state.loggedIn;
    },
  },
});

export default loginSlice.reducer;

// Export the actions with explicit types
export const loginActions = {
  toggle: (): PayloadAction<void> => loginSlice.actions.toggle(),
};
