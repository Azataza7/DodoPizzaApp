import React, {useEffect} from 'react';
import FoodItemsForm from '../../Components/FoodItemsForm/FoodItemsForm';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {
  selectFoodItem, selectOneFoodItemLoading,
} from '../../store/foodItems/foodItemsSlice';
import {fetchDataItems, fetchOneFoodItem, updateFoodItem} from '../../store/foodItems/foodItemsThunks';
import Spinner from '../../Components/Spinner/Spinner';
import {FoodItem} from '../../types';

const EditFoodItem = () => {
  const {id} = useParams() as { id: string };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const foodItem = useAppSelector(selectFoodItem);
  const updateFoodItemLoading = useAppSelector(selectOneFoodItemLoading);

  useEffect(() => {
    dispatch(fetchOneFoodItem(id));
  }, [dispatch, id]);

  const onSubmit = async (data: FoodItem) => {
    await dispatch(updateFoodItem({id, data}));
    await dispatch(fetchDataItems());
    navigate('/admin/');
  };

  let formSection = <Spinner/>;

  if (!updateFoodItemLoading) {
    if (foodItem) {
      formSection = (
        <FoodItemsForm
          onSubmit={onSubmit}
          isLoading={updateFoodItemLoading}
          editingFood={foodItem}
        />
      );
    }
  }

  return (
    <>
      {formSection}
    </>
  );
};

export default EditFoodItem;