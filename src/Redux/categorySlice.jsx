// import { createSlice } from "@reduxjs/toolkit";
// import { fetchProductsCategory } from "./operations";


// const handlePending = (state) => {
//     state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
// };

// const categorySlice = createSlice({
//     name:'category',
//     initialState:{
//         category:[],
//         isLoading:false,
//         error:null,
//     },
//     extraReducers: (builder) => {
//         builder
//         .addCase(fetchProductsCategory.pending, handlePending)
//         .addCase(fetchProductsCategory.fulfilled, (state, action) => {
//             state.category = action.payload,
//             state.isLoading = false;
//             state.error=null;
//         })
//         .addCase(fetchProductsCategory.rejected, handleRejected)
//     }
// });

// export const categoryReducer = categorySlice.reducer;