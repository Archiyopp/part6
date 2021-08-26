let endTimeout;

export const setNotification = (content, time) => {
  return async (dispatch) => {
    clearTimeout(endTimeout);
    endTimeout = setTimeout(
      () => dispatch({ type: 'ENDNOTI' }),
      time * 500
    );
    dispatch({
      type: 'SET_NOTI',
      content,
    });
  };
};

const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NOTI': {
      return action.content;
    }
    case 'ENDNOTI': {
      return null;
    }
    default: {
      return state;
    }
  }
};

export default notificationReducer;
