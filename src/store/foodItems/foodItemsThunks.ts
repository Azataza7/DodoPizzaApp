import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import {ApiFoodItems, FoodItemsJson} from '../../types';
import {AppDispatch} from '../../app/store';

export const fetchDataItems = createAsyncThunk<ApiFoodItems[], undefined, {dispatch: AppDispatch}>(
  'meals',
  async () => {
    const response = await axiosApi.get<FoodItemsJson | null>('/meals.json');
    const data = response.data;

    let foodList: ApiFoodItems[] = []

    if (data) {
      foodList = Object.keys(data).map((id) => {
        const meal = data[id];
        return {
          ...meal,
          id: id,
        };
      });
    }
    return foodList
  }
);