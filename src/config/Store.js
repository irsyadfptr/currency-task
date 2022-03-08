import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./features/Currency";

export const store = configureStore({
    reducer: {
      currency: currencyReducer,
    },
});