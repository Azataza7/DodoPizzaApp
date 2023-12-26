import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {ApiFoodItems} from '../../types';

interface foodItemsState {
  foodItems: ApiFoodItems[];
  fetchFoodItemsLoading: boolean;
}

const initialState: foodItemsState = {
  foodItems: [],
  fetchFoodItemsLoading: false,
}

const foodItemsSlice = createSlice({
  name: 'foodItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
})

export const foodItemReducer = foodItemsSlice.reducer;

export const selectFoodItemsLoading = (state: RootState) => state.foodItems.fetchFoodItemsLoading;