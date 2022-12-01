import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { mainPageSlice } from './slices/mainPageSlice';

const rootReducer = combineReducers({
  mainPage: mainPageSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
