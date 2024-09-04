import { createSlice } from "@reduxjs/toolkit";
import { fetchAddToCart, fetchDecrementQuantity, fetchDeleteItem, fetchProductsCart } from "./operations";

const handlePending = (state) => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
        error: null,
        isLoading: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsCart.pending, handlePending)
            .addCase(fetchProductsCart.fulfilled, (state, action) => {
                state.items = action.payload.items;
                state.error = null;
                state.isLoading = false;
            })
            .addCase(fetchProductsCart.rejected, handleRejected)
            .addCase(fetchAddToCart.pending, handlePending)
            .addCase(fetchAddToCart.fulfilled, (state, action) => {
                state.items = action.payload.items;
                state.totalQuantity = action.payload.totalQuantity;
                state.totalAmount = action.payload.totalAmount;
                state.error = null;
                state.isLoading = false;
            })
            .addCase(fetchAddToCart.rejected, handleRejected)
            .addCase(fetchDecrementQuantity.pending, handlePending)
            .addCase(fetchDecrementQuantity.fulfilled, (state, action) => {
                state.items = action.payload.items;
                state.totalQuantity = action.payload.totalQuantity;
                state.totalAmount = action.payload.totalAmount;
                state.error = null;
                state.isLoading = false;
            })
            .addCase(fetchDecrementQuantity.rejected, handleRejected)
            .addCase(fetchDeleteItem.pending, handlePending)
            .addCase(fetchDeleteItem.fulfilled, (state, action) => {
                state.items = action.payload.items;
                state.totalQuantity = action.payload.totalQuantity;
                state.totalAmount = action.payload.totalAmount;
                state.error = null;
                state.isLoading = false;
            })
        .addCase(fetchDeleteItem.rejected, handleRejected)
    }
});

export const { addToCart,decrementQuantity, deleteToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;


