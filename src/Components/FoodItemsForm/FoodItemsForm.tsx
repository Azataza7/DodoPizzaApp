import React, {useState} from 'react';
import {FoodItem} from '../../types';
import Spinner from '../Spinner/Spinner';

const initialState: FoodItem = {
  title: '',
  image: '',
  price: '',
}

interface Props {
  onSubmit: (food: FoodItem) => void;
  isLoading: boolean;
}

const FoodItemsForm: React.FC<Props> = ({onSubmit, isLoading}) => {
  const [newFood, setNewFood] = useState<FoodItem>(initialState)

  const changeFood = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewFood((prev: FoodItem) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoading) return

    onSubmit(newFood);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          className="form-control"
          value={newFood?.title}
          onChange={changeFood}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          id="price"
          className="form-control"
          value={newFood?.price}
          onChange={changeFood}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          id="image"
          className="form-control"
          value={newFood?.image}
          onChange={changeFood}
          required
        />
        <button className="btn btn-success" type="submit">Send</button>
      </div>
    </form>
  );
};

export default FoodItemsForm;