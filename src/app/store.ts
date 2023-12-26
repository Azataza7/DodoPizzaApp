import {configureStore} from '@reduxjs/toolkit';
import {foodItemReducer} from '../store/foodItems/foodItemsSlice';

export const store = configureStore({
  reducer: {
    foodItems: foodItemReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;