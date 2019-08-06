import React from "react";
import { bool, func, number, shape } from "prop-types";
import cx from "classnames";
import { connect } from "react-redux";

// import { filmsToggleFavorite } from 'store/films';
const filmsToggleFavorite = () => ({ type: 'olden' });

const _FilmFavoriteIcon = ({
  isFavoriteBeingSet,
  film,
  userId,
  filmsToggleFavorite
}) => {
  const { id: movieId, isFavorite = false } = film;

  const handleIconClick = event => {
    event.preventDefault();

    if (isFavoriteBeingSet) {
      return;
    }

    filmsToggleFavorite({ userId, movieId, isFavorite: !isFavorite });
  };

  return (
    <div
      onClick={handleIconClick}
      className={cx(isFavoriteBeingSet && "film-favorite-icon--disabled")}
    >
      {isFavorite ? (
        <i className="fas fa-heart" />
      ) : (
        <i className="far fa-heart" />
      )}
    </div>
  );
};

_FilmFavoriteIcon.propTypes = {
  isFavoriteBeingSet: bool.isRequired,
  film: shape({
    id: number.isRequired,
    isFavorite: bool
  }).isRequired,
  filmsToggleFavorite: func.isRequired,
  userId: number.isRequired
};

const FilmFavoriteIcon = connect(
  state => ({
    isFavoriteBeingSet: state.films.isFavoriteBeingSet,
    userId: state.auth.id
  }),
  {
    filmsToggleFavorite
  }
)(_FilmFavoriteIcon);

export { FilmFavoriteIcon };
