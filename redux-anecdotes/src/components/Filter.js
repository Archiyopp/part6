import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../reducers/filterReducer';

export function Filter(props) {
  const style = {
    marginBottom: 10,
  };
  return (
    <div style={style}>
      filter{' '}
      <input
        type="text"
        onChange={({ target }) => {
          props.setFilter(target.value);
        }}
      />
    </div>
  );
}

const mapDispatchToProps = {
  setFilter,
};

export default connect(null, mapDispatchToProps)(Filter);
