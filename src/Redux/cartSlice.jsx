import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
            }
            state.cartTotalQuantity = state.cartItems.reduce((total, item) => total + item.cartQuantity, 0);
            state.cartTotalAmount = state.cartItems.reduce((total, item) => total + item.price * item.cartQuantity, 0);
        },
        decrementQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex( item => item.id === action.payload);
            if( itemIndex >= 0 && state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -=1;
            }else if (itemIndex >=0 && state.cartItems[itemIndex].cartQuantity === 1){
                state.cartItems.splice(itemIndex, 1);
            }

            state.cartTotalQuantity = state.cartItems.reduce((total, item) => total + item.cartQuantity,0);
            state.cartTotalAmount = state.cartItems.reduce((total, item) => total + item.price * item.cartQuantity,0)
        },
        deleteToCart: (state, action) => {
            // const nextCartItems = state.cartItems.filter(item => item.id !== action.payload);
            // state.cartItems = nextCartItems;
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload);
            if (itemIndex >= 0) {
                state.cartItems.splice(itemIndex, 1);
            }
            state.cartTotalQuantity = state.cartItems.reduce((total, item) => total + item.cartQuantity, 0);
            state.cartTotalAmount = state.cartItems.reduce((total, item) => total + item.price * item.cartQuantity, 0);
        }
    }
});

export const { addToCart,decrementQuantity, deleteToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
