import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY } from "../../utils/ApiKey";
import CurrencyData from "../../utils/CurrencyData";

export const loadCurrency = createAsyncThunk(
  "loadCurrency",
  async(api) => {
    const symbols = api.map(({symbol}) => symbol)
    const setSymbols = symbols.toString()
    const currencyAPI = await axios.get(
      `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&symbols=${setSymbols}`
    );
    return (currencyAPI.data)
  }
)

const initialState = {
    base: '',
    rates: [],
    // symbols: ["IDR", "USD", "GBP", "SGD"]
    symbols: [
      { id: 1, symbol: 'IDR' },
      { id: 2, symbol: 'USD' },
      { id: 3, symbol: 'GBP' },
      { id: 4, symbol: 'SGD' },
    ],
    id: 4,
    input: 10,
    searchInput: '',
    loading: true,
    toggle:true,
}


const currencySlice = createSlice({
    name: "currencyData",
    initialState,
    reducers: {
      addCurrency: (state, action) => {
        if(Object.keys(CurrencyData.CurrencyRegion).includes(action.payload.symbol)){
          state.symbols.push(action.payload)
        }
      },
      deleteCurrency: (state, action) => {
        const { id } = action.payload;         
        state.symbols = state.symbols.filter((symbol) => symbol.id !== id)
      },
      addTotalId: (state) => {
        state.id = state.id + 1;
      },
      addInput: (state, action) => {
        state.input = action.payload
      },
      searchInput: (state, action) => {
        state.searchInput = action.payload
      },
      toogling: (state, action) => {
        state.toggle = action.payload
      }
    },
    extraReducers: {
      [loadCurrency.pending]: () => {
        console.log("Pending");
      },
      [loadCurrency.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        if(state.symbols.length > 0){
          return { ...state, base: payload.base, rates: payload.rates, loading: false, searchInput:''};
        } else {
          return {...state, rates: []}
        }
      },
      [loadCurrency.rejected]: () => {
        console.log("Rejected!");
      },
    },
  });

  export const { addCurrency, deleteCurrency, addTotalId, addInput, searchInput, toogling } = currencySlice.actions;
  export const getAllCurrency = (state) => state.currencyData.data;
  export default currencySlice.reducer;