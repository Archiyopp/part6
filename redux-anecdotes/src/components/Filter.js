import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../reducers/filterReducer';

export default function Filter() {
  const dispatch = useDispatch();
  const style = {
    marginBottom: 10,
  };
  return (
    <div style={style}>
      filter{' '}
      <input
        type="text"
        onChange={({ target }) => {
          dispatch(setFilter(target.value));
        }}
      />
    </div>
  );
}
