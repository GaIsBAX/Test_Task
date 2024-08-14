import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface handleSearchParams {
  query: string;
  sortBy: "stars" | "forks" | "update";
  order: "desc" | "asc";
}

export const handleSearch = createAsyncThunk(
  "pizzas/handleSearchStatus",
  async (params: handleSearchParams) => {
    const { query, sortBy, order } = params;
    const baseUrl = "https://api.github.com/search/repositories";
    const url = `${baseUrl}?q=${query}&sort=${sortBy}&order=${order}`;

    const res = await axios.get(url, {
      headers: {
        "User-Agent": "Test_Task", 
      },
    });
    return res.data.items;
  }
);
