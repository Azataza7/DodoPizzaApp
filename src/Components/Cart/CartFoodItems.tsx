import React from 'react';
import {CartFoodItem} from '../../types';
import CartFoodItemBox from './CartFoodItemBox';
import {DELIVERY_COST} from '../Constants/Constants';

interface Props {
  cartFoodItems: CartFoodItem[];
}

const CartFoodItems: React.FC<Props> = ({cartFoodItems}) => {
  const total = cartFoodItems.reduce((sum, cartFoodItem) => {
    return sum + cartFoodItem.amount * Number(cartFoodItem.foodItem.price);
  }, 0);

  const totalWithDelivery = total + DELIVERY_COST;

  return (
    <>
      {cartFoodItems.map((cartFoodItem) => (
        <CartFoodItemBox key={cartFoodItem.foodItem.id} cartFoodItem={cartFoodItem} />
      ))}
      <div className="card border-0 p-2">
        <div className="row">
          <div className="col-8 text-start">
            Delivery: 150 KGS
          </div>
          <div className="col-4 text-end">
            Total: <strong>{total}</strong> + {DELIVERY_COST} = <strong>{totalWithDelivery}</strong>KGS
          </div>
        </div>
      </div>
    </>
  );
};

export default CartFoodItems;