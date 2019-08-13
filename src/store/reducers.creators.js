const trueFalseReducerCreator = (initialState, TRUE_ACTION, FALSE_ACTION, TOGGLE_ACTION = null) => {
  return (state = initialState, action = { type: '' }) => {
    switch (action.type) {
      case TRUE_ACTION:
        return true;

      case FALSE_ACTION:
        return false;

      case TOGGLE_ACTION:
        return !state;

      default:
        return state;
    }
  };
};

export { trueFalseReducerCreator };
