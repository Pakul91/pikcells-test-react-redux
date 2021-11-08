import { configureStore } from "@reduxjs/toolkit";

import canvasReducer from "../components/Convas/CanvasSlice";
import dataReducer from "../data/dataSlice";

export const store = configureStore({
  reducer: {
    canvas: canvasReducer,
    data: dataReducer,
  },
});
