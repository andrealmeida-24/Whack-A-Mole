import { configureStore } from "@reduxjs/toolkit";
import { gameplaySlice } from "./gameplaySlice";

export const store = configureStore({
  reducer: {
    gameplay: gameplaySlice.reducer,
  },
});
