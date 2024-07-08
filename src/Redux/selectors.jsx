import { createSelector } from "@reduxjs/toolkit";

export const selectorDropdown = (state) => state.dropdown.isDropdownOpen;
export const selectorProducts = (state) => state.products.products;
export const selectIsLoading = state => state.products.isLoading;
export const selectError = state => state.products.error;
export const selectorProductsDetails = (state) => state.products.productDetails;
export const selectorFilterPrice = (state)=> state.filter.filteredItem;
const selectorCartItems = state => state.cart.cartItems;
const selectorCartTotalAmount = state => state.cart.cartTotalAmount;

export const selectCartItemsMemoized = createSelector(
    [selectorCartItems],
    cartItems => cartItems
  );
  
  export const selectCartTotalAmountMemoized = createSelector(
    [selectorCartTotalAmount],
    cartTotalAmount => cartTotalAmount
  );