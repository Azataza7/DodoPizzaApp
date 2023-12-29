import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../app/hooks';
import CartFoodItems from './CartFoodItems';
import Modal from '../Modal/Modal';
import {selectCartFoodItems} from '../../store/cart/cartSlice';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const cartFoodItems = useAppSelector(selectCartFoodItems);
  const [showModal, setShowModal] = useState(false);

  let cart = (
    <div className="alert alert-primary">
      Cart is empty! Add something!
    </div>
  );

  if (cartFoodItems.length > 0) {
    cart = (
      <>
        <CartFoodItems cartFoodItems={cartFoodItems}/>
        <button className="w-100 btn btn-primary" onClick={() => setShowModal(true)}>
          Order
        </button>
      </>
    );
  }

  return (
    <>
      <h4>Cart</h4>
      {cart}
      <Modal show={showModal} title="Order confirmation" onClose={() => setShowModal(false)}>
        <div className="modal-body">
          <p>Do you want to continue to checkout?</p>
        </div>
        <div className="modal-footer">
          <button className="btn btn-danger" onClick={() => setShowModal(false)}>Cancel</button>
          <button className="btn btn-success" onClick={() => navigate('/checkout')}>Continue</button>
        </div>
      </Modal>
      </>
  );
};

export default Cart;