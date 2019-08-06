import {
  SEARCH_UPDATE,
  SEARCH_CLEAR,
} from './search.constans';

const initialState = '';

const searchReducer = (state = initialState, action = { type: '', payload: [] }) => {
  switch (action.type) {
    case SEARCH_UPDATE: {
      const { search } = action.payload;

      return typeof search !== 'undefined' ? search : state;
    }

    case SEARCH_CLEAR: {
      return initialState;
    }

    default:
      return state;
  }
};

export { searchReducer };
