import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateI {
  query: string;
  sortBy: "stars" | "forks" | "update";
  order: "desc" | "asc";
}

const initialState: initialStateI = {
  query: "",
  sortBy: "stars",
  order: "asc",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setSortBy(state, action: PayloadAction<"stars" | "forks" | "update">) {
      state.sortBy = action.payload;
    },
    setOrder(state, action: PayloadAction<"desc" | "asc">) {
      state.order = action.payload;
    },
  },
});

export const { setOrder, setSortBy, setQuery } = filterSlice.actions;

export default filterSlice.reducer;
