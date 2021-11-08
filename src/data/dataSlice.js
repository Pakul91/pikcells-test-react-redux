import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../utilitties/pikcellsAPI";
import { updateCanvasLayer } from "../components/Convas/CanvasSlice";

//thunk to handle logic when clicking on item
export const handleItemCLick = (layer, imgSrc, index) => {
  return (dispatch) => {
    dispatch(updateCanvasLayer({ layer, imgSrc }));
    dispatch(setItemToActive({ layer, index }));
  };
};

const initialState = {
  isLoading: false,
  error: false,
  errorMessage: "",
  data: {
    layers: [],
    default_configuration: [],
  },
};

// load data from API
export const loadData = createAsyncThunk("state/loadData", async () => {
  const data = await fetchData();

  return data;
});

export const dataSlice = createSlice({
  name: "data",
  initialState,

  reducers: {
    //  set all items of given layer inactive and select clicked one as active
    setItemToActive(state, action) {
      const { layer, index } = action.payload;
      const clickedLayerItems = state.data.layers[layer].items;
      clickedLayerItems.forEach((item) => {
        item.active = false;
      });
      clickedLayerItems[index].active = true;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadData.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(loadData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.errorMessage = action.error.message;
      })
      .addCase(loadData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.data = action.payload;
      });
  },
});

export const { setItemToActive } = dataSlice.actions;

export const selectItemLayers = (state) => state.data.data.layers;
export const selectError = (state) => state.data.error;
export const selectErrorMessage = (state) => state.data.errorMessage;

export default dataSlice.reducer;
