import {configureStore} from '@reduxjs/toolkit';
import {foodItemReducer} from '../store/foodItems/foodItemsSlice';
import {cartReducer} from '../store/cart/cartSlice';

export const store = configureStore({
  reducer: {
    foodItems: foodItemReducer,
    cart: cartReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;