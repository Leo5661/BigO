import { combineReducers } from "@reduxjs/toolkit";
import FormSlice from "./slices/FormSlice";

export const rootReducer = combineReducers({
    form: FormSlice
})

export type RootState = ReturnType<typeof rootReducer>