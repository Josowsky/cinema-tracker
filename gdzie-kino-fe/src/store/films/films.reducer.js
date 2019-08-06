import {
  FILMS_LOAD,
  FILMS_LOAD_CANCELLED,
  FILMS_LOAD_ERROR,
  FILMS_LOAD_SUCCESS,
  FILMS_FILTER_SET,
  FILMS_FILTER_CLEAR,
  FILMS_TOGGLE_FAVORITE,
  FILMS_TOGGLE_FAVORITE_ERROR,
  FILMS_TOGGLE_FAVORITE_SUCCESS,
} from './films.constans';

const initialState = {
  isLoaded: false,
  isBeingLoaded: false,
  error: null,
  collection: [],
  favorites: [],
  filters: {
    genre: '',
  },
  isFavoriteBeingSet: false,
  favoriteSetError: null,
};

const filmsReducer = (state = initialState, action = { type: '', payload: [] }) => {
  switch (action.type) {
    case FILMS_TOGGLE_FAVORITE_SUCCESS:
    case FILMS_LOAD: {
      return {
        ...state,
        isLoaded: false,
        isBeingLoaded: true,
        isFavoriteBeingSet: false,
        error: null,
      };
    }

    case FILMS_LOAD_CANCELLED: {
      return {
        ...state,
        isLoaded: false,
        isBeingLoaded: false,
        error: null,
      };
    }

    case FILMS_LOAD_ERROR: {
      const { error } = action.payload;

      return {
        ...state,
        isLoaded: true,
        isBeingLoaded: false,
        error,
      };
    }

    case FILMS_LOAD_SUCCESS: {
      const { collection } = action.payload;

      return {
        ...state,
        isLoaded: true,
        isBeingLoaded: false,
        collection,
      };
    }

    case FILMS_FILTER_SET: {
      const { filters } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          ...filters,
        },
      };
    }

    case FILMS_FILTER_CLEAR: {
      return {
        ...state,
        filters: {},
      };
    }

    case FILMS_TOGGLE_FAVORITE: {
      return {
        ...state,
        isFavoriteBeingSet: true,
        favoriteSetError: null,
      };
    }

    case FILMS_TOGGLE_FAVORITE_ERROR: {
      const { error } = action.payload;

      return {
        ...state,
        isFavoriteBeingSet: false,
        favoriteSetError: error,
      };
    }

    default: {
      return state;
    }
  }
};

export { filmsReducer };
