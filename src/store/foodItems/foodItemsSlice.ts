import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {ApiFoodItems} from '../../types';
import {fetchDataItems} from './foodItemsThunks';

interface foodItemsState {
  foodItems: ApiFoodItems[];
  fetchFoodItemsLoading: boolean;
}

const initialState: foodItemsState = {
  foodItems: [],
  fetchFoodItemsLoading: false,
};

const foodItemsSlice = createSlice({
  name: 'foodItems',
  initialState,
  reducers: {
    setResult: (state, action: PayloadAction<ApiFoodItems[]>) => {
      state.foodItems = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataItems.pending, (state: foodItemsState) => {
      state.fetchFoodItemsLoading = true;
    });
    builder.addCase(fetchDataItems.fulfilled, (state: foodItemsState, {payload: foodList}) => {
      state.foodItems = foodList;
      state.fetchFoodItemsLoading = false;
    });
    builder.addCase(fetchDataItems.rejected, (state: foodItemsState) => {
      state.fetchFoodItemsLoading = false;
    });
  }
});

export const foodItemReducer = foodItemsSlice.reducer;
export const selectFoodItemList = (state: RootState) => state.foodItems.foodItems;


export const selectFoodItemsLoading = (state: RootState) => state.foodItems.fetchFoodItemsLoading;