import { createSlice } from "@reduxjs/toolkit";
import { fetchCustomerSupport } from "./operations";


const handlePending = (state) => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const customerServiceSlice = createSlice({
    name: 'customerService',
    initialState: {
        customers: [],
        isLoading: false,
        error: null,
        form: {
            name: '',
            email: '',
            message: '',
        }
    },
    reducers: {
        setName: (state, action) => {
            state.form.name = action.payload;
        },
        setEmail: (state, action) => {
            state.form.email = action.payload;
        },
        setMessage: (state, action) => {
            state.form.message = action.payload
        },
        setClearForm: (state) => {
            state.form.name = '';
            state.form.email = '';
            state.form.message = '';
        }
    },
     extraReducers: (builder) => {
        builder
            .addCase(fetchCustomerSupport.pending, handlePending)
            .addCase(fetchCustomerSupport.fulfilled, (state, action) => {
                state.isLoading = false;
                state.customers.push(action.payload);
                state.error = null;
            })
            .addCase(fetchCustomerSupport.rejected, handleRejected)
    }
});
export const { setName, setEmail, setMessage, setClearForm } = customerServiceSlice.actions;
export const reducerCustomerService = customerServiceSlice.reducer;