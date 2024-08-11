import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import repo from "./repositories/pepositoriesSlice";

export const store = configureStore({
  reducer: { repo },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
