import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isDropdownOpen:false,
}

const dropdownSlice = createSlice({
    name:"dropdown",
    initialState,
    reducers:{
        toggleDropdown: (state) => {
            state.isDropdownOpen = !state.isDropdownOpen;
        }
    }
});

export const {toggleDropdown} = dropdownSlice.actions;
export const dropdownReducer = dropdownSlice.reducer;