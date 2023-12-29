import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ApiFoodItems, CartFoodItem} from '../../types';
import {RootState} from '../../app/store';

interface CartState {
  cartFoodItems: CartFoodItem[];
}

const initialState: CartState = {
  cartFoodItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addDish: (state, {payload: foodItem}: PayloadAction<ApiFoodItems>) => {
      const index = state.cartFoodItems.findIndex(cartFoodItem => cartFoodItem.foodItem.id === foodItem.id);

      if (index !== -1) {
        state.cartFoodItems[index].amount++;
      } else {
        state.cartFoodItems.push({
          amount: 1,
          foodItem,
        });
      }
    },
    updateCart: (state, {payload: foodItems}: PayloadAction<ApiFoodItems[]>) => {
      const newCartFoodItems: CartFoodItem[] = [];

      state.cartFoodItems.forEach(cartFoodItem => {
        const existingFoodItem = foodItems.find(foodItem => foodItem.id === cartFoodItem.foodItem.id);

        if (!existingFoodItem) {
          return;
        }

        newCartFoodItems.push({
          ...cartFoodItem,
          foodItem: existingFoodItem
        });
      });
      state.cartFoodItems = newCartFoodItems;
    },
    clearCart: (state) => {
      state.cartFoodItems = [];
    }
  },
});

export const cartReducer = cartSlice.reducer;
export const {addDish, clearCart, updateCart} = cartSlice.actions;

export const selectCartFoodItems = (state: RootState) => state.cart.cartFoodItems;
