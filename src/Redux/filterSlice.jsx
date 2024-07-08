import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filter",
    initialState: {
        items: [],
        filteredItems: [],
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
            state.filteredItems = action.payload;
        },
        filterByPrice: (state, action) => {
            const { minPrice, maxPrice } = action.payload;
            state.filteredItems = state.items.filter(product => {
                const price = product.price;
                return (minPrice === '' || price >= minPrice) && (maxPrice === '' || price <= maxPrice);
            });
        },
    },
});

export const { setItems, filterByPrice } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
