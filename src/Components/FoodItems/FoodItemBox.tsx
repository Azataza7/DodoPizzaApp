import React from 'react';
import {ApiFoodItems} from '../../types';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectDeleteFoodItemLoading} from '../../store/foodItems/foodItemsSlice';
import {deleteFoodItem, fetchDataItems} from '../../store/foodItems/foodItemsThunks';

interface Props {
  foodItem: ApiFoodItems;
}

const DefaultImage = 'https://thumbs.dreamstime.com/b/no-pizza-icon-outline-no-pizza-vector-icon-color-flat-isolated-no-pizza-icon-color-outline-vector-233231617.jpg';

const FoodItemBox: React.FC<Props> = ({foodItem}) => {
  const isLoadingDelete = useAppSelector(selectDeleteFoodItemLoading);
  const dispatch = useAppDispatch();

  const isImageValid = (url: string) => {
    const img = new Image();
    img.src = url;
    return img.complete && img.naturalWidth !== 0;
  };

  const imageUrl = isImageValid(foodItem.image) ? foodItem.image : DefaultImage;

  const handleDelete = async () => {
    try {
      await dispatch(deleteFoodItem(foodItem.id));
      await dispatch(fetchDataItems());
    } catch (e) {
      console.log('Error: ', e);
    }
  };

  return (
    <div className="food-item">
      <img className="food-img"
           src={imageUrl}
           alt={foodItem.title + '-pizza-image'}/>
      <span className="food-title">{foodItem.title}</span>
      <span className="food-price">{foodItem.price}KGS</span>
      <div className="button-container">
        <Link className="edit-button btn" to={isLoadingDelete ? '/admin' : 'edit/' + foodItem.id}/>
        <button className="delete-button btn" disabled={isLoadingDelete} onClick={handleDelete}/>
        <button className="add-button btn" disabled={isLoadingDelete}/>
      </div>
    </div>
  );
};

export default FoodItemBox;