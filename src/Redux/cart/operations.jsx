import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { message as notificationMessage } from "antd";


export const fetchProductsCart = createAsyncThunk(
    "cart/fetchProductsCart",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:5000/api/cart');
            console.log("Cart products:", response.data);
            if (response.status === 200) {
                notificationMessage.success('Successfully fetched the products in the cart!');
            }
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 404) {
                notificationMessage.error("Cart not found");
            } else {
                notificationMessage.error("Failed to fetch cart products");
            }
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// export const fetchAddToCart = createAsyncThunk(
//     "cart/fetchAddToCart",
//     async (items, thunkAPI) => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/cart', items);
//             console.log("Cart products:", response.data);
//             if (response.status === 200) {
//                 notificationMessage.success('Successfully added products to the cart!');
//             }
//             return response.data;
//         } catch (error) {
//             if (error.response && error.response.status === 400) {
//                 notificationMessage.error("Item not found in the cart!");
//             } else {
//                 notificationMessage.error("Failed to add products to the cart");
//             }
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

export const fetchDecrementQuantity = createAsyncThunk(
    'cart/fetchDecrementQuantity',
    async (productId, thunkAPI) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/cart/decrement/${productId}`);
            if (response.status === 200) {
                notificationMessage.success('Successfully decremented item quantity!');
            }
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 404) {
                notificationMessage.error("Item not found in the cart!");
            }
             return thunkAPI.rejectWithValue(error.message);
        }
    });

// export const fetchDeleteItem = createAsyncThunk(
//     'cart/fetchDeleteItem',
//     async (itemId, thunkAPI) => {
//         try {
//             const response = await axios.delete(`http://localhost:5000/api/cart/items/${itemId}`);
//             if (response.status === 200) {
//                 notificationMessage.success('Successfully removed item from the cart!');
//             }
//             return response.data;
//         } catch (error) {
//             if (error.response && error.response.status === 404) {
//                 notificationMessage.error("Item not found in the cart!");
//             }
//              return thunkAPI.rejectWithValue(error.message);
//         }
//     });

export const fetchAddToCart = createAsyncThunk(
    "cart/fetchAddToCart",
    async (productId, thunkAPI) => {
        try {
            console.log("Fetching product ID:", productId); // Verifică dacă productId este corect
            const response = await axios.post(`http://localhost:5000/api/cart/${productId}`);
            console.log("Response data:", response.data); // Verifică răspunsul primit de la server

            if (response.status === 200) {
                // Adăugare reușită
                return response.data;
            } else {
                // În caz că status-ul nu este 200, returnăm eroare
                return thunkAPI.rejectWithValue('Failed to add product to cart');
            }
        } catch (error) {
            console.error("Error in fetchAddToCart:", error);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);




export const fetchDeleteItem = createAsyncThunk(
    'cart/fetchDeleteItem',
    async (productId, thunkAPI) => {
        try {
            // Logging the productId to ensure it's correct
            console.log("Item ID to delete:", productId);
            const response = await axios.delete(`http://localhost:5000/api/cart/items/${productId}`);

            if (response.status === 200) {
                notificationMessage.success('Successfully removed item from the cart!');
            }
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 404) {
                notificationMessage.error("Item not found in the cart!");
            } else {
                notificationMessage.error("Failed to remove item from the cart");
            }
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);