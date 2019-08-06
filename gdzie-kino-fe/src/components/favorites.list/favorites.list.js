import React from "react";
import { array, bool, func, shape, string } from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { InlineLoading } from "../loading";
import { FilmListElement } from "../film.list.element";
import { NoResults } from "../no.results";
// import {
//   filmsLoad,
//   filmsLoadCancelled,
// } from 'store/films';
const filmsLoad = () => ({ type: 'olden' });
const filmsLoadCancelled = () => ({ type: 'olden' });

class _FavoritesList extends React.Component {
  static propTypes = {
    isBeingLoaded: bool.isRequired,
    isLogged: bool.isRequired,
    films: array.isRequired,
    favoritesLoad: func.isRequired,
    favoritesLoadCancelled: func.isRequired,
    search: string.isRequired,
    filters: shape({
      genre: string.isRequired
    }).isRequired
  };

  componentDidMount() {
    this.props.favoritesLoad();
  }

  componentWillUnmount() {
    this.props.favoritesLoadCancelled();
  }

  render() {
    const { isBeingLoaded, isLogged, films, filters, search } = this.props;
    const { genre } = filters;

    if (!isLogged) {
      return (
        <div className="favorites-list__not-logged">
          <div className="favorites-list__not-logged-message">
            Aby korzystać z ulubionych musisz się zalogować
          </div>
          <Link to="/logowanie">
            <div className="favorites-list__login-button d-flex justify-content-center align-items-center">
              Zaloguj się
            </div>
          </Link>
        </div>
      );
    }

    const filteredFilms = films.filter(film => {
      if (!film.isFavorite) {
        return false;
      }

      if (
        search &&
        film.name &&
        !film.name
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(search.toLowerCase().replace(/\s/g, ""))
      ) {
        return false;
      }

      if (genre && !film.genre.includes(genre)) {
        return false;
      }

      return true;
    });

    if (isBeingLoaded) {
      return (
        <div className="favorites-list__loading d-flex justify-content-center align-items-center">
          <InlineLoading />
        </div>
      );
    }

    const isListEmpty = filteredFilms.length === 0;

    return (
      <div className="favorites-list justify-content-center">
        {isListEmpty ? (
          <NoResults />
        ) : (
          filteredFilms.map(film => (
            <FilmListElement key={film.id} isLogged film={film} />
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogged: Boolean(state.auth.token),
    films: state.films.collection,
    isBeingLoaded: state.films.isBeingLoaded,
    search: state.search,
    filters: state.films.filters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    favoritesLoad: () => dispatch(filmsLoad()),
    favoritesLoadCancelled: () => dispatch(filmsLoadCancelled())
  };
};

const FavoritesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(_FavoritesList);

export { FavoritesList };
