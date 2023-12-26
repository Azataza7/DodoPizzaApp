import React from 'react';
import {ApiFoodItems} from '../../types';
import {Link} from 'react-router-dom';

interface Props {
  foodItem: ApiFoodItems
}

const FoodItemBox:React.FC<Props> = ({foodItem}) => {
  return (
    <div className="food-item">
      <img className="food-img" src={foodItem.image} alt={foodItem.title + '-pizza-image'}/>
      <span className="food-title">{foodItem.title}</span>
      <span className="food-price">{foodItem.price}KGS</span>
      <div className="button-container">
        <Link className="edit-button btn" to={"/edit/" + foodItem.id}/>
        <button className="delete-button btn"/>
        <button className="add-button btn"/>
      </div>
    </div>
  );
};

export default FoodItemBox;