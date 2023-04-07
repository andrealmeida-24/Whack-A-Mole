import { configureStore } from "@reduxjs/toolkit";
import { gameplaySlice } from "./gameplaySlice";

export const store = configureStore({
  reducer: {
    gameplay: gameplaySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
