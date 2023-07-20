import { createSlice } from '@reduxjs/toolkit'
// Slice
const recordsSlice = createSlice({
    name: 'records',
    initialState: {
        records: [],
    },
    reducers: {
        setRecordsInStore: (state, action) => {
            //console.log("action: ", action.payload);
            state.records = [...action.payload];
        }
    },
});
// this is for dispatch
export const { setRecordsInStore } = recordsSlice.actions;

// this is for configureStore
export default recordsSlice.reducer;