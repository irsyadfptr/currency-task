import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadCurrency = createAsyncThunk(
  "loadPokemon",
  async() => {
    const currencyAPI = await axios.get(
      `http://api.exchangeratesapi.io/v1/latest?access_key=cb97a3a36a33e40525a23d616dd5fa5e&symbols=IDR,USD,GBP,SGD`
      
    );
    return currencyAPI.data;
  }
)

const initialState = {
    data: {},
}

const currencySlice = createSlice({
    name: "currencyData",
    initialState,

    extraReducers: {
      [loadCurrency.pending]: () => {
        console.log("Pending");
      },
      [loadCurrency.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, data: payload};
      },
      [loadCurrency.rejected]: () => {
        console.log("Rejected!");
      },
    },
  });

  export const getAllCurrency = (state) => state.currencyData.data;
  export default currencySlice.reducer;