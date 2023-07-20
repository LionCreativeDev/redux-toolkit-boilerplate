import { createSlice } from '@reduxjs/toolkit'
// Slice
const searchAndOrderSlice = createSlice({
    name: 'search',
    initialState: {
        order: "",
        searchText: ""
    },
    reducers: {
        setSearchText: (state, action) => {
            //console.log("setSearchText: ", action.payload);
            state.searchText = action.payload;
        },
        setRecordsOrder: (state, action) => {
            //console.log("setRecordsOrder: ", action.payload);
            state.order = action.payload;
        },
    },
});
// this is for dispatch
export const { setSearchText, setRecordsOrder } = searchAndOrderSlice.actions;

// this is for configureStore
export default searchAndOrderSlice.reducer;