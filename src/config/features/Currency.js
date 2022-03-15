import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY } from "../../utils/ApiKey";

export const loadCurrency = createAsyncThunk(
  "loadPokemon",
  async(api) => {
    const symbols = api.map(({symbol}) => symbol)
    const setSymbols = symbols.toString()
    const currencyAPI = await axios.get(
      `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&symbols=${setSymbols}`
    );
    return currencyAPI.data;
  }
)

const initialState = {
    data: {},
    // symbols: ["IDR", "USD", "GBP", "SGD"]
    symbols: [
      { id: 1, symbol: 'IDR' },
      { id: 2, symbol: 'USD' },
      { id: 3, symbol: 'GBP' },
      { id: 4, symbol: 'SGD' },
    ],
    id: 4
}

const currencySlice = createSlice({
    name: "currencyData",
    initialState,
    reducers: {
      addCurrency: (state, action) => {
        state.symbols.push(action.payload)
      },
      deleteCurrency: (state, action) => {
        const { id } = action.payload;         
        state.symbols = state.symbols.filter((symbol) => symbol.id !== id)
      },
      addTotalId: (state) => {
        state.id = state.id + 1;
      }
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

  export const { addCurrency, deleteCurrency, addTotalId } = currencySlice.actions;
  export const getAllCurrency = (state) => state.currencyData.data;
  export default currencySlice.reducer;