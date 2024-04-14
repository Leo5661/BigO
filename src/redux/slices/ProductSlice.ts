import { Item } from "@/components/ItemCard";
import { createSlice } from "@reduxjs/toolkit";

type FormState = {
    products: Item[],
}

const initialState: FormState = {
    products: [],
}

export const ProductSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products.push(action.payload);
        }
    }
});

export const { setProducts } = ProductSlice.actions;
export default ProductSlice.reducer