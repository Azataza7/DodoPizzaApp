import React from 'react';
import {ApiFoodItems} from '../../types';
import {Link, useLocation} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectDeleteFoodItemLoading} from '../../store/foodItems/foodItemsSlice';
import {deleteFoodItem, fetchDataItems} from '../../store/foodItems/foodItemsThunks';
import {addDish} from '../../store/cart/cartSlice';

interface Props {
  foodItem: ApiFoodItems;
}

const DefaultImage = 'https://thumbs.dreamstime.com/b/no-pizza-icon-outline-no-pizza-vector-icon-color-flat-isolated-no-pizza-icon-color-outline-vector-233231617.jpg';

const FoodItemBox: React.FC<Props> = ({foodItem}) => {
  const isLoadingDelete = useAppSelector(selectDeleteFoodItemLoading);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const isAdminPath = location.pathname.includes('/admin/');


  const isImageValid = (url: string) => {
    const img = new Image();
    img.src = url;
    return img.complete && img.naturalWidth !== 0;
  };

  const imageUrl = isImageValid(foodItem.image) ? foodItem.image : DefaultImage;

  const addDishToCart = () => {
    dispatch(addDish(foodItem));
  }


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
        {isAdminPath && (
          <>
            <Link
              className="edit-button btn"
              to={isLoadingDelete ? '/admin' : 'edit/' + foodItem.id}
            />
            <button
              className="delete-button btn"
              disabled={isLoadingDelete}
              onClick={handleDelete}
            />
          </>
        )}
        {!isAdminPath && <button className="add-button btn" onClick={addDishToCart} disabled={isLoadingDelete}/>}
      </div>
    </div>
  );
};

export default FoodItemBox;