export const setNotification = (content, time) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_NOTI',
      content,
    });
    setTimeout(() => dispatch({ type: 'ENDNOTI' }), time * 1000);
  };
};

const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NOTI': {
      return action.content;
    }
    case 'ENDNOTI': {
      return '';
    }
    default: {
      return state;
    }
  }
};

export default notificationReducer;
