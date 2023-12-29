import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectFoodItemList, selectFoodItemsLoading} from '../../store/foodItems/foodItemsSlice';
import {deleteFoodItem, fetchDataItems} from '../../store/foodItems/foodItemsThunks';
import {ApiFoodItems} from '../../types';
import FoodItemBox from './FoodItemBox';
import {Link} from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

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
      <div className="add-new-foodItem-container mb-3">
        <h3 className="add-new-food-title">Catalog</h3>
        <Link className="btn btn-light add-food-btn" to="/admin/add-new-food">Add new Food</Link>
      </div>
      <div className="food-catalog">
        {foods}
      </div>
    </>
  );
};

export default FoodItemsList;