import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {ApiFoodItems} from '../../types';
import {createDataItem, fetchDataItems} from './foodItemsThunks';

interface foodItemsState {
  foodItems: ApiFoodItems[];
  fetchFoodItemsLoading: boolean;
  fetchCreateFoodLoading: boolean;
}

const initialState: foodItemsState = {
  foodItems: [],
  fetchFoodItemsLoading: false,
  fetchCreateFoodLoading: false,
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
    builder.addCase(createDataItem.pending, (state: foodItemsState) => {
      state.fetchCreateFoodLoading = true;
    });
    builder.addCase(createDataItem.fulfilled, (state: foodItemsState) => {
      state.fetchCreateFoodLoading = false;
    });
    builder.addCase(createDataItem.rejected, (state: foodItemsState) => {
      state.fetchCreateFoodLoading = false;
    });
  }
});

export const foodItemReducer = foodItemsSlice.reducer;
export const selectFoodItemList = (state: RootState) => state.foodItems.foodItems;

export const selectCreateFoodLoading = (state: RootState) => state.foodItems.fetchCreateFoodLoading;
export const selectFoodItemsLoading = (state: RootState) => state.foodItems.fetchFoodItemsLoading;