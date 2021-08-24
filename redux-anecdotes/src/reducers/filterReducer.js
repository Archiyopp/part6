export const setFilter = (filter) => ({
  type: 'FILTER',
  filter,
});

const filterReducer = (state = '', action) => {
  if (action.type === 'FILTER') {
    return action.filter;
  }
  return state;
};

export default filterReducer;
