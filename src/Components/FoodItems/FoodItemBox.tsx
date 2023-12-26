import React from 'react';
import {ApiFoodItems} from '../../types';

interface Props {
  foodItem: ApiFoodItems
}

const FoodItemBox:React.FC<Props> = ({foodItem}) => {
  return (
    <div className="food-item">
      <span>{foodItem.title}</span>
      <span>{foodItem.price}</span>
      <img src={foodItem.image} alt={foodItem.title + 'image'}/>
    </div>
  );
};

export default FoodItemBox;