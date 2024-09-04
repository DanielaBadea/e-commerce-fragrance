import { createSelector } from 'reselect';

export const selectCartItems = (state) => state.cart.items;
export const selectCartTotalQuantity = (state) => state.cart.totalQuantity;
export const selectCartTotalAmount = (state) => state.cart.totalAmount;
export const selectorCartError = (state) => state.cart.error;
export const selectorCartIsLoading = (state) => state.cart.isLoading;


// export const selectCartItemsMemoized = createSelector(
//     [selectCartItems],
//     (items) => items 
// );

// export const selectCartTotalAmountMemoized = createSelector(
//     [selectCartTotalAmount],
//     (totalAmount) => totalAmount 
// );

// export const selectCartTotalQuantityMemoized = createSelector(
//     [selectCartTotalQuantity],
//     (totalQuantity) => totalQuantity 
// );

// export const selectErrorMemoized = createSelector(
//     [selectorCartError],
//     (error) => error 
// );

// export const selectIsLoadingMemoized = createSelector(
//     [selectorCartIsLoading],
//     (isLoading) => isLoading 
// );