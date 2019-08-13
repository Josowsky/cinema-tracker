import {
  SEARCH_UPDATE,
  SEARCH_CLEAR,
} from './search.constans';

const searchUpdate = (search) => ({
  type: SEARCH_UPDATE,
  payload: {
    search,
  },
});

const searchClear = () => ({
  type: SEARCH_CLEAR,
});

export {
  searchUpdate,
  searchClear,
};
