import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import repo from "./repositories/pepositoriesSlice";
import filter from "./filter/filterSlice";

export const store = configureStore({
  reducer: { repo, filter },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
