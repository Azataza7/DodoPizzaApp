import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {FoodItem} from '../../types';
import {createDataItem} from '../../store/foodItems/foodItemsThunks';
import FoodItemsForm from '../../Components/FoodItemsForm/FoodItemsForm';
import {selectCreateFoodLoading} from '../../store/foodItems/foodItemsSlice';

const NewFoodItem: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const createLoading = useAppSelector(selectCreateFoodLoading);

  const onSubmit = (newFood: FoodItem) => {
    dispatch(createDataItem(newFood));
    navigate('/admin/');
  };

  return (
    <div>
      <FoodItemsForm onSubmit={onSubmit} isLoading={createLoading}/>
    </div>
  );
};

export default NewFoodItem;