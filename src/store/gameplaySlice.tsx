import { createSlice } from "@reduxjs/toolkit";

type SliceState = {
  score: number;
  activeID: number;
  gameOn: boolean;
  showModal: boolean;
};

const initialState: SliceState = {
  score: 0,
  activeID: 0,
  gameOn: false,
  showModal: false,
};

export const gameplaySlice = createSlice({
  name: "gameplay",
  initialState,
  reducers: {
    incrementScore: (state) => {
      state.score = state.score + 1;
    },
    getRandomID: (state, action) => {
      state.activeID = action.payload;
    },
    gameOn: (state) => {
      state.gameOn = true;
    },
    gameOff: (state) => {
      state.gameOn = false;
    },
    reset: (state) => {
      state.gameOn = false;
    },
  },
});

export const { incrementScore, getRandomID, gameOn, reset } =
  gameplaySlice.actions;
