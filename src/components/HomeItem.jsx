import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { GrAddCircle } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { bagActions } from '../store/bagSlice';

export default function HomeItem({ item }) {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);

  const handleAddtoBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  const elementFound = bagItems.indexOf(item.id) >= 0;

  return (
    <div className='item-container'>
      <img className='item-image' src={item.image} alt='item image' />
      <div className='rating'>⭐</div>
      <div className='company-name'>Company</div>
      <div className='item-name'>Item name</div>
      <div className='price'>
        <span className='current-price'>Rs current price</span>
        <span className='original-price'>Rs original price</span>
        <span className='discount'> 2 % OFF</span>
      </div>

      {elementFound ? (
        <button
          type='button'
          className='btn btn-add-bag btn-danger'
          onClick={handleRemove}
        >
          <AiFillDelete /> Remove
        </button>
      ) : (
        <button
          type='button'
          className='btn btn-add-bag btn-success'
          onClick={handleAddtoBag}
        >
          <GrAddCircle /> Add to Bag
        </button>
      )}
    </div>
  );
}
