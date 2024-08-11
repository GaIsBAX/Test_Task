import { createSlice } from "@reduxjs/toolkit";
import { handleSearch } from "./asyncActions";
import { Status } from "./types";

const initialState = {
  items: [],
  status: Status.LOADING, // loading | success | error
};

const repositoriesSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleSearch.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(handleSearch.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(handleSearch.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

// export const {} = pizzasSlice.actions;

export default repositoriesSlice.reducer;
