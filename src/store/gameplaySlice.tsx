import { createSlice } from "@reduxjs/toolkit";

type SliceState = {
  time: number;
  score: number;
  activeID: number;
  gameOn: boolean;
  showModal: boolean;
};

const initialState: SliceState = {
  time: 30,
  score: 0,
  activeID: 0,
  gameOn: false,
  showModal: false,
};

export const gameplaySlice = createSlice({
  name: "gameplay",
  initialState,
  reducers: {},
});
