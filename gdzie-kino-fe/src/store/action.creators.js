const simpleActionCreator = (type) => {
  return () => {
    return {
      type,
    };
  };
};

const multiSimpleActionCreator = (...types) => {
  return () => {
    return types.map((type) => {
      return {
        type,
      };
    });
  };
};

const errorActionCreator = (type) => {
  return (error, params = {}) => {
    return {
      type,
      payload: {
        ...params,
        error,
      },
    };
  };
};

export {
  errorActionCreator,
  multiSimpleActionCreator,
  simpleActionCreator,
};
