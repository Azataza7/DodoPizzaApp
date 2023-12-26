import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectFoodItemList} from '../../store/foodItems/foodItemsSlice';
import {fetchDataItems} from '../../store/foodItems/foodItemsThunks';
import {ApiFoodItems} from '../../types';
import FoodItemBox from './FoodItemBox';

const FoodItemsList = () => {
  const foodCatalog = useAppSelector(selectFoodItemList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDataItems());
  }, [dispatch]);

  let foods: ApiFoodItems[] = foodCatalog.map((foodItem) => (
    <FoodItemBox key={foodItem.id} foodItem={foodItem}/>
  ));

  return (
    <div className="food-catalog">
      {foods}
    </div>
  );
};

export default FoodItemsList;