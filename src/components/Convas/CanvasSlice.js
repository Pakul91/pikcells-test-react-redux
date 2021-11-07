import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  layer0: "",
  layer1: "",
  layer2: "",
};

export const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    //  update canvas layer using data from clicked item
    updateCanvasLayer: (state, action) => {
      const payload = action.payload;
      state[`layer${payload.layer}`] = payload.imgSrc;
    },
  },
});

export const { updateCanvasLayer } = canvasSlice.actions;

export default canvasSlice.reducer;
