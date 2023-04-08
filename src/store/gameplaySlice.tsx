import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";

const getRandom = (): number => {
  return Math.floor(Math.random() * 12 + 1);
};

type SliceState = {
  time: number;
  score: number;
  activeID: number;
  gameOn: boolean;
  showModal: boolean;
  timeInterval: number | any;
};

const initialState: SliceState = {
  time: 30,
  score: 0,
  activeID: 0,
  gameOn: false,
  showModal: false,
  timeInterval: 30,
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
      state.score = 0;
    },
  },
});

export const { incrementScore, getRandomID, gameOn, reset } =
  gameplaySlice.actions;
