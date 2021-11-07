import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import canvasReducer from "../components/Convas/CanvasSlice";
import dataReducer from "../data/dataSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    canvas: canvasReducer,
    data: dataReducer,
  },
});
