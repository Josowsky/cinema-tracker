import {
  FILMS_LOAD,
  FILMS_LOAD_CANCELLED,
  FILMS_LOAD_ERROR,
  FILMS_LOAD_SUCCESS,
  FILMS_FILTER_SET,
  FILMS_FILTER_CLEAR,
  FILMS_TOGGLE_FAVORITE,
  FILMS_TOGGLE_FAVORITE_CANCELLED,
  FILMS_TOGGLE_FAVORITE_ERROR,
  FILMS_TOGGLE_FAVORITE_SUCCESS,
  FILMS_REMOVE_FROM_FAVORITES,
} from './films.constans';

const filmsLoad = () => ({
  type: FILMS_LOAD,
});

const filmsLoadCancelled = () => ({
  type: FILMS_LOAD_CANCELLED,
});

const filmsLoadError = (error) => ({
  type: FILMS_LOAD_ERROR,
  payload: {
    error,
  },
});

const filmsLoadSuccess = (collection) => ({
  type: FILMS_LOAD_SUCCESS,
  payload: {
    collection,
  },
});

const filmsFiltersSet = (filters) => ({
  type: FILMS_FILTER_SET,
  payload: {
    filters,
  },
});

const filmsFiltersClear = () => ({ type: FILMS_FILTER_CLEAR });

const filmsToggleFavorite = ({ isFavorite, movieId, userId }) => ({ type: FILMS_TOGGLE_FAVORITE, payload: { isFavorite, movieId, userId } });

const filmsToggleFavoriteCancelled = { type: FILMS_TOGGLE_FAVORITE_CANCELLED };

const filmsToggleFavoriteError = (error) => ({ type: FILMS_TOGGLE_FAVORITE_ERROR, payload: { error } });

const filmsToggleFavoriteSuccess = () => ({ type: FILMS_TOGGLE_FAVORITE_SUCCESS });

const filmsRemoveFromFavorites = (id) => ({ type: FILMS_REMOVE_FROM_FAVORITES, payload: { id } });

export {
  filmsLoad,
  filmsLoadCancelled,
  filmsLoadError,
  filmsLoadSuccess,
  filmsFiltersSet,
  filmsFiltersClear,
  filmsToggleFavorite,
  filmsToggleFavoriteCancelled,
  filmsToggleFavoriteError,
  filmsToggleFavoriteSuccess,
  filmsRemoveFromFavorites,
};
