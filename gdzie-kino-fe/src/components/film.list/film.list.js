import React from "react";
import cx from "classnames";
import { array, bool, func, shape, string } from "prop-types";
import { connect } from "react-redux";

import { InlineLoading } from "../loading";
import { FilmListElement } from "../film.list.element";
import { NoResults } from "../no.results";
// import {
//   filmsLoad,
//   filmsLoadCancelled,
// } from 'store/films';
const filmsLoad = () => ({ type: 'olden' });
const filmsLoadCancelled = () => ({ type: 'olden' });

class _FilmList extends React.Component {
  static propTypes = {
    isBeingLoaded: bool.isRequired,
    isLogged: bool.isRequired,
    films: array.isRequired,
    filmsLoad: func.isRequired,
    filmsLoadCancelled: func.isRequired,
    search: string.isRequired,
    filters: shape({
      genre: string.isRequired
    }).isRequired
  };

  componentDidMount() {
    this.props.filmsLoad();
  }

  componentWillUnmount() {
    this.props.filmsLoadCancelled();
  }

  render() {
    const { isBeingLoaded, films, filters, search, isLogged } = this.props;
    const { genre } = filters;

    const filteredFilms = films.filter(film => {
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
        <div className="film-list__loading d-flex align-items-center justify-content-center">
          <InlineLoading />
        </div>
      );
    }

    const isListEmpty = filteredFilms.length === 0;

    return (
      <div
        className={cx("film-list justify-content-center", {
          "film-list--empty": isListEmpty
        })}
      >
        {isListEmpty ? (
          <NoResults />
        ) : (
          filteredFilms.map(film => (
            <FilmListElement key={film.id} isLogged={isLogged} film={film} />
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLogged: Boolean(state.auth.token),
  films: state.films.collection,
  isBeingLoaded: state.films.isBeingLoaded,
  search: state.search,
  filters: state.films.filters
});

const mapDispatchToProps = dispatch => ({
  filmsLoad: () => dispatch(filmsLoad()),
  filmsLoadCancelled: () => dispatch(filmsLoadCancelled())
});

const FilmList = connect(
  mapStateToProps,
  mapDispatchToProps
)(_FilmList);

export { FilmList };
