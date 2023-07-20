import { configureStore } from '@reduxjs/toolkit';
import recordsReducer from './slices/Records';
import searchReducer from './slices/Search';

export default configureStore({
  reducer: {
    records: recordsReducer,
    search: searchReducer,
  },
});