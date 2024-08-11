import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const handleSearch = createAsyncThunk(
  "pizzas/handleSearchStatus",
  async (params: any) => {
    const { query } = params;
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=${query}`,
      {
        headers: {
          "User-Agent": "VITE-PROJECT", // Замените на ваше название приложения
        },
      }
    );
    return res.data.items;
  }
);
