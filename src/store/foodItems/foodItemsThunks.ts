import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import {ApiFoodItems, FoodItem, FoodItemsJson, FoodItemsResponse} from '../../types';
import {AppDispatch} from '../../app/store';

export const fetchDataItems = createAsyncThunk<ApiFoodItems[], undefined, { dispatch: AppDispatch }>(
  'meals',
  async () => {
    const response: FoodItemsResponse = await axiosApi.get<FoodItemsJson | null>('/meals.json');
    const data = response.data;

    let foodList: ApiFoodItems[] = [];

    if (data) {
      foodList = Object.keys(data).map((id) => {
        const meal = data[id];
        return {
          ...meal,
          id: id,
        };
      });
    }
    return foodList;
  }
);

export const createDataItem = createAsyncThunk<void, FoodItem>(
  'meals/create',
  async (data) => {
    await axiosApi.post('/meals.json', data);
  }
);

export const fetchOneFoodItem = createAsyncThunk<ApiFoodItems, string>(
  'meals/oneMeal',
  async (id) => {
    try {
      const response: FoodItemsResponse = await axiosApi.get(`/meals/${id}.json`);
      return response.data;
    } catch (error) {
      console.log('Error: ', error)
    }
  }
);

interface updateFoodItemParams {
  id: string;
  data: FoodItem;
}

export const updateFoodItem = createAsyncThunk<void, updateFoodItemParams>(
  'meals/update',
  async ({ id, data }) => {
    try {
      await axiosApi.put(`/meals/${id}.json`, data);
    } catch (e) {
      console.log('Error', e)
    }
  }
);