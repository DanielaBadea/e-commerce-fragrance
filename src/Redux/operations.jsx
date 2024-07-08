import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, thunkAPI) => {
        try {
            const response = await fetch('/products.json');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            console.log('Fetched data:', data);
            return data.products;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }    
);
export const fetchProductsDetails = createAsyncThunk(
    'products/fetchProductsDetails',
    async (productId, thunkAPI) => {
        try {
            const response = await fetch('/products.json');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            console.log('Fetched data:', data);  
            console.log('Product ID:', productId);  
            const numericProductId = Number(productId);
            const product = data.products.find(item => item.id === numericProductId);
            if (!product) {
                throw new Error('Product not found');
            }
            return product;
        } catch (err) {
            console.error('Fetch products details error:', err);
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);


// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchProducts = createAsyncThunk(
//     'products/fetchProducts',
//     async (_, thunkAPI) => {
//         try {
//             const response = await axios.get('http://localhost:3000/products');
//             console.log('Fetched data:', response.data);
//             return response.data;  // Aici ai schimbat din response.products în response.data
//         } catch (err) {
//             return thunkAPI.rejectWithValue(err.message);
//         }
//     }    
// );
// export const fetchProductsDetails = createAsyncThunk(
//     'products/fetchProductsDetails',
//     async (productId, thunkAPI) => {
//         try {
//             const response = await axios.get(`http://localhost:3000/products/${productId}`);
//             console.log('Fetched id:', response.data);
//             return response.data;  // Returnează direct datele din răspuns
//         } catch (err) {
//             return thunkAPI.rejectWithValue(err.message);
//         }
//     }
// );