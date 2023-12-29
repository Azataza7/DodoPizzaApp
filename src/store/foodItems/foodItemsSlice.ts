import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {ApiFoodItems} from '../../types';
import {createDataItem, fetchDataItems, fetchOneFoodItem, updateFoodItem} from './foodItemsThunks';

interface foodItemsState {
  foodItems: ApiFoodItems[];
  OneFoodItem: ApiFoodItems | null;
  fetchFoodItemsLoading: boolean;
  fetchCreateFoodLoading: boolean;
  OneFoodItemLoading: boolean;
  updateFoodItemLoading: boolean;
}

const initialState: foodItemsState = {
  foodItems: [],
  OneFoodItem: null,
  fetchFoodItemsLoading: false,
  fetchCreateFoodLoading: false,
  OneFoodItemLoading: false,
  updateFoodItemLoading: false,
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
    builder.addCase(fetchOneFoodItem.pending, (state: foodItemsState) => {
      state.OneFoodItemLoading = true;
    });
    builder.addCase(fetchOneFoodItem.fulfilled, (state: foodItemsState, {payload: foodItem}) => {
      state.OneFoodItemLoading = false;
      state.OneFoodItem = foodItem;
    });
    builder.addCase(fetchOneFoodItem.rejected, (state: foodItemsState) => {
      state.OneFoodItemLoading = false;
    });
    builder.addCase(updateFoodItem.pending, (state: foodItemsState) => {
      state.updateFoodItemLoading = true;
    });
    builder.addCase(updateFoodItem.fulfilled, (state: foodItemsState) => {
      state.updateFoodItemLoading = false;
    });
    builder.addCase(updateFoodItem.rejected, (state: foodItemsState) => {
      state.updateFoodItemLoading = false;
    });
  }
});

export const foodItemReducer = foodItemsSlice.reducer;
export const selectFoodItemList = (state: RootState) => state.foodItems.foodItems;
export const selectFoodItem = (state: RootState) => state.foodItems.OneFoodItem;

export const selectCreateFoodLoading = (state: RootState) => state.foodItems.fetchCreateFoodLoading;
export const selectFoodItemsLoading = (state: RootState) => state.foodItems.fetchFoodItemsLoading;
export const selectOneFoodItemLoading = (state: RootState) => state.foodItems.OneFoodItemLoading;
export const selectUpdateFoodItemLoading = (state: RootState) => state.foodItems.updateFoodItemLoading;