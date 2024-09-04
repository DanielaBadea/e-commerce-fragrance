// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchProducts = createAsyncThunk(
//     'products/fetchProducts',
//     async (_, thunkAPI) => {
//         try {
//             const response = await fetch('/products.json');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch products');
//             }
//             const data = await response.json();
//             console.log('Fetched data:', data);
//             return data.products;
//         } catch (err) {
//             return thunkAPI.rejectWithValue(err.message);
//         }
//     }    
// );
// export const fetchProductsDetails = createAsyncThunk(
//     'products/fetchProductsDetails',
//     async (productId, thunkAPI) => {
//         try {
//             const response = await fetch('/products.json');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch products');
//             }
//             const data = await response.json();
//             console.log('Fetched data:', data);  
//             console.log('Product ID:', productId);  
//             const numericProductId = Number(productId);
//             const product = data.products.find(item => item.id === numericProductId);
//             if (!product) {
//                 throw new Error('Product not found');
//             }
//             return product;
//         } catch (err) {
//             console.error('Fetch products details error:', err);
//             return thunkAPI.rejectWithValue(err.message);
//         }
//     }
// );


import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async ({ categoryName, brandName, priceMin, priceMax, sortBy, limit = 'all', page=1 }, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:5000/api/products', {
                params: { categoryName, brandName, priceMin, priceMax, sortBy, limit, page }
            });
            console.log('Fetched data:', response.data);
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const fetchProductsDetails = createAsyncThunk(
    'products/fetchProductsDetails',
    async (productId, thunkAPI) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/products/${productId}`);
            console.log('Fetched data by id:', response.data);
            return response.data; 
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const fetchCustomerSupport = createAsyncThunk(
    'customers/fetchCustomerSupport',
    async ({ name, email, message }, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:5000/api/contact/customer-support', { name, email, message });
            console.log('Fetched data from customers support:', response.data);
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
         }
     }
);
// export const fetchProductsByPrice = createAsyncThunk(
//   'products/fetchProductsByPrice',
//   async ({ priceMin, priceMax, sortBy }, thunkAPI) => {
//     try {
//     const response = await axios.get(`http://localhost:5000/api/products/?priceMin=${priceMin}&priceMax=${priceMax}&sortBy=${sortBy}`)
//       console.log('Fetched data by price:', response.data);
//       return response.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );

// export const fetchProductsCategory = createAsyncThunk(
//     'products/fetchProductsCategory',
//     async ({categoryName, priceMin, priceMax, sortBy}, thunkAPI) => {
//         try{
//             const response = await axios.get(`http://localhost:5000/api/products/category/${categoryName}?priceMin=${priceMin}&priceMax=${priceMax}&sortBy=${sortBy}`)
//             console.log('Fetched data by category:', response.data)
//             return response.data;
//         }catch(err){
//             return thunkAPI.rejectWithValue(err.message);
//         }
//     }
// );

// export const fetchProductsBrand = createAsyncThunk(
//     'products/fetchProductsBrand',
//     async ({brandName}, thunkAPI) => {
//         try{
//             const response = await axios.get(`http://localhost:5000/api/products/${brandName}`)
//             console.log('Fetched data by brand: ', response.data);
//             return response.data;
//         }catch(err) {
//             return thunkAPI.rejectWithValue(err.message)
//         }
//     }
// )