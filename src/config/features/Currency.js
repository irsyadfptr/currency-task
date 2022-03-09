import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY } from "../../utils/ApiKey";

export const loadCurrency = createAsyncThunk(
  "loadPokemon",
  async(symbols) => {
    const setSymbols = symbols.toString()
    const currencyAPI = await axios.get(
      `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&symbols=${setSymbols}`
    );
    return currencyAPI.data;
  }
)

const initialState = {
    data: {},
    symbols: ["IDR", "USD", "GBP", "SGD"]
}

const currencySlice = createSlice({
    name: "currencyData",
    initialState,
    reducers: {
      addCurrency: (state, action) => {
        state.symbols.push(action.payload)
      },
    },
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

  export const { addCurrency } = currencySlice.actions;
  export const getAllCurrency = (state) => state.currencyData.data;
  export default currencySlice.reducer;