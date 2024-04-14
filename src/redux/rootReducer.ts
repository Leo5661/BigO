import { combineReducers } from "@reduxjs/toolkit";
import FormSlice from "./slices/FormSlice";
import ProductSlice from "./slices/ProductSlice";

export const rootReducer = combineReducers({
    form: FormSlice,
    product: ProductSlice
})

export type RootState = ReturnType<typeof rootReducer>