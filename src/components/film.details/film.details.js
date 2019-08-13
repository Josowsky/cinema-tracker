import React from "react";
import { object } from "prop-types";
import classnames from "classnames";
import get from "lodash.get";
import { map } from "rxjs/operator/map";
import { _catch } from "rxjs/operator/catch";
import { withRouter } from "react-router-dom";

import { FILTERS_DEFAULTS } from "../film.details.filter";
import { FilmDetailsFilter } from "../film.details.filter";
import { FilmDetailsGroup } from "../film.details.group";
import { InlineLoading } from "../loading";
import { NoResults } from "../no.results";
import { ajax } from "../../utils/ajax";
import { applySeanceFilters } from "../../utils/filters";
import { getFormattedDuration } from "../../utils/filmDetails";

class _FilmDetails extends React.Component {
  static propTypes = {
    match: object.isRequired
  };

  constructor(props) {
    super(props);

    this.toggleDotsInDescription = this.toggleDotsInDescription.bind(this);
    this.handleToggleFilter = this.handleToggleFilter.bind(this);
    // this.createApiRequest = this.createApiRequest.bind(this);
    this.subscribeToApiRequest = this.subscribeToApiRequest.bind(this);

    this.state = {
      film: {},
      isBeingLoaded: true,
      error: null,
      isDescriptionShortened: true,
      filters: FILTERS_DEFAULTS
    };

    const { match } = props;

    const id = get(match, "params.id", null);

    if (id === null) {
      return this.setState({
        isBeingLoaded: false,
        error: "Invalid movie id!"
      });
    }

    // this.film$ = this.createApiRequest(id);
    this.filmS = undefined;
  }

  componentDidMount() {
    // this.filmS = this.subscribeToApiRequest();
  }

  componentWillUnmount() {
    if (this.filmsS) {
      // this.filmS.unsubscribe();
    }
  }

  componentWillReceiveProps(nextProps) {
    const id = get(this.props, "match.params.id");
    const nextId = get(nextProps, "match.params.id");

    if (nextId !== id) {
      this.setState({
        film: {},
        isBeingLoaded: true,
        error: null
      });

      this.film$ = this.createApiRequest(nextId);
      this.filmS = this.subscribeToApiRequest();
    }
  }

  // createApiRequest(id) {
  //   return ajax({
  //     method: 'GET',
  //     url: `/api/movies/${ id }`,
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     ::map((response) => response.movie)
  //     ::_catch((error) => {
  //       this.setState({
  //         isBeingLoaded: false,
  //         error: error.message || error,
  //       });
  //     });
  // }

  subscribeToApiRequest() {
    return this.film$.subscribe(
      film => {
        this.setState({
          isBeingLoaded: false,
          film
        });
      },
      () => null
    );
  }

  toggleDotsInDescription() {
    this.setState({
      isDescriptionShortened: !this.state.isDescriptionShortened,
      readMore: !this.state.readMore
    });
  }

  handleToggleFilter(filterName) {
    this.setState(state => ({
      filters: {
        ...state.filters,
        [filterName]: !this.state.filters[filterName]
      }
    }));
  }

  render() {
    const { isBeingLoaded, isDescriptionShortened, filters, film } = this.state;

    const descriptionClass = classnames("film-details__description", {
      "film-details__description--dots": isDescriptionShortened
    });

    if (isBeingLoaded) {
      return (
        <div className="film-details__loader">
          <InlineLoading />
        </div>
      );
    }

    const showings = Object.keys(film.showings).map(
      showingKey => film.showings[showingKey]
    );

    // Filter out empty groups
    const groups =
      showings &&
      showings
        .map(group => {
          const { seances } = group;

          const filteredSeances = seances.filter(applySeanceFilters(filters));

          return filteredSeances.length > 0
            ? { ...group, seances: filteredSeances }
            : null;
        })
        .filter(group => group);

    return (
      <div>
        <div className="film-details">
          <div className="d-flex align-items film-details__poster-and-desc">
            <div
              className="film-details__poster-box"
              style={{ backgroundImage: `url(${film.image})` }}
            />
            <div className="film-details__description-box">
              <h1 className="film-details__title">{film.name}</h1>
              <h2 className="film-details__genre">{film.genre}</h2>
              <div className="d-flex align-items">
                <i className="film-details__duration-icon far fa-clock" />
                <p className="film-details__duration">
                  {getFormattedDuration(film.duration)}
                </p>
              </div>
              <div className={descriptionClass}>{film.description}</div>
              <div>
                <button
                  className="film-details__toggle-desc-btn"
                  onClick={this.toggleDotsInDescription}
                >
                  {isDescriptionShortened ? "Czytaj więcej" : "Czytaj mniej"}
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex align-items film-details__rating-and-like">
            <i className="film-details__rating-icon fas fa-star" />
            <p className="film-details__rating">{film.rating}</p>
          </div>
        </div>
        <FilmDetailsFilter
          onFilterChange={this.handleToggleFilter}
          filters={filters}
        />
        {groups.length === 0 && (
          <div className="film-details__no-results">
            <NoResults />
          </div>
        )}
        {groups.map(group => (
          <FilmDetailsGroup key={group.date} group={group} filters={filters} />
        ))}
      </div>
    );
  }
}

const FilmDetails = withRouter(_FilmDetails);

export { FilmDetails };
