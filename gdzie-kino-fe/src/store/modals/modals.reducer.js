import uuid from 'uuid-v4';

import {
  MODAL_CLOSE,
  MODAL_OPEN,
} from './modals.constants';

const initialState = {
  collection: [],
};

const modalsReducer = (state = initialState, action = { type: '' }) => {
  switch (action.type) {
    case MODAL_CLOSE: {
      const { id } = action.payload;

      return {
        ...state,
        collection: state.collection.filter((modal) => modal.id !== id),
      };
    }

    case MODAL_OPEN: {
      const { params, type } = action.payload;

      const modal = {
        id: uuid(),
        params: { ...params },
        type,
      };

      return {
        ...state,
        collection: [
          ...state.collection,
          modal,
        ],
      };
    }

    default:
      return state;
  }
};

export { modalsReducer };
