import React from 'react';
import {CartFoodItem} from '../../types';

interface Props {
  cartFoodItem: CartFoodItem;
}

const CartFoodItemBox: React.FC<Props> = ({cartFoodItem}) => {
  const price = Number(cartFoodItem.foodItem.price) * cartFoodItem.amount

  return (
    <div className="card mb-2 p-2">
      <div className="row align-items-center">
        <div className="col">{cartFoodItem.foodItem.title}</div>
        <div className="col-2">x{cartFoodItem.amount}</div>
        <div className="col-3 text-end">
          {price} KGS
        </div>
      </div>
    </div>
  );
};

export default CartFoodItemBox;