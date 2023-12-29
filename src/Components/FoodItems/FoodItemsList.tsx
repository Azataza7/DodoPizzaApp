import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectFoodItemList, selectFoodItemsLoading} from '../../store/foodItems/foodItemsSlice';
import {fetchDataItems} from '../../store/foodItems/foodItemsThunks';
import {ApiFoodItems} from '../../types';
import FoodItemBox from './FoodItemBox';
import Spinner from '../Spinner/Spinner';
import AdminAddFoodItem from '../../Containers/AdminAddFoodItem/AdminAddFoodItem';

const FoodItemsList = () => {
  const foodCatalog = useAppSelector(selectFoodItemList);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectFoodItemsLoading);

  useEffect(() => {
    dispatch(fetchDataItems());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner/>;
  }

  const foods: ApiFoodItems[] | null = foodCatalog.map((foodItem) => (
    <FoodItemBox key={foodItem.id} foodItem={foodItem}/>
  ));

  return (
    <>
      <AdminAddFoodItem/>
      <div className="food-catalog mt-3">
        {foods}
      </div>
    </>
  );
};

export default FoodItemsList;