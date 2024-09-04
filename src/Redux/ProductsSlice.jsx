import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchProductsDetails } from "./operations";

const handlePending = (state) => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        totalProducts: 0,
        isLoading: false,
        error: null,
        productDetails: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, handlePending)
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
                state.totalProducts = action.payload.total;
            })
            .addCase(fetchProducts.rejected, handleRejected)
            .addCase(fetchProductsDetails.pending, handlePending)
            .addCase(fetchProductsDetails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.productDetails = action.payload;
            })
            .addCase(fetchProductsDetails.rejected, handleRejected);
    }
});

export const productsReducer = productsSlice.reducer;
