export const addNotification = (content) => ({
  type: 'ADDNOTI',
  content,
});
export const voteNotification = (content) => ({
  type: 'VOTENOTI',
  content,
});
export const endNotification = () => ({ type: 'ENDNOTI' });

const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'ADDNOTI': {
      return "you added '" + action.content + "'";
    }
    case 'VOTENOTI': {
      return "you voted '" + action.content + "'";
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
