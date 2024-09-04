// import { createSlice } from "@reduxjs/toolkit";
// import { fetchProductsByPrice } from "./operations";

// const handlePending = (state) => {
//     state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
// };

// const filterPriceSlice = createSlice({
//     name: "filterPrice",
//     initialState: {
//         price: [],
//         error: null,
//         isLoading: false,
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchProductsByPrice.pending, handlePending)
//             .addCase(fetchProductsByPrice.fulfilled, (state, action) => {
//                 state.price = action.payload;
//                 state.error = null;
//                 state.isLoading = false;
//             })
//             .addCase(fetchProductsByPrice.rejected, handleRejected);
//     },
// });

// export const filterPriceReducer = filterPriceSlice.reducer;
