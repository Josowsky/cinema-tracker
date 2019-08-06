import React from "react";
import cx from "classnames";
import { func, object } from "prop-types";

import {
  FILTER_SUBTITLES,
  FILTER_DUBBING,
  FILTER_TWOD,
  FILTER_THREED
} from "../film.details.filter";

const getFilterClassName = (filters, filterName) =>
  cx("film-details-filter__box d-flex align-items", {
    "film-details-filter__box-selected": filters[filterName]
  });

const FilmDetailsFilter = ({ filters, onFilterChange }) => (
  <div className="film-details-filter d-flex justify-content-around">
    <div
      className={getFilterClassName(filters, FILTER_SUBTITLES)}
      onClick={() => onFilterChange(FILTER_SUBTITLES)}
    >
      <i className="film-details-filter__icon far fa-file-alt" />
      <p className="film-details-filter__variety">Napisy</p>
    </div>
    <div
      className={getFilterClassName(filters, FILTER_DUBBING)}
      onClick={() => onFilterChange(FILTER_DUBBING)}
    >
      <i className="film-details-filter__icon far fa-comments" />
      <p className="film-details-filter__variety">Dubbing</p>
    </div>
    <div
      className={getFilterClassName(filters, FILTER_TWOD)}
      onClick={() => onFilterChange(FILTER_TWOD)}
    >
      <i className="film-details-filter__icon far fa-square" />
      <p className="film-details-filter__variety">2D</p>
    </div>
    <div
      className={getFilterClassName(filters, FILTER_THREED)}
      onClick={() => onFilterChange(FILTER_THREED)}
    >
      <i className="film-details-filter__icon far fa-clone" />
      <p className="film-details-filter__variety">3D</p>
    </div>
  </div>
);

FilmDetailsFilter.propTypes = {
  filters: object.isRequired,
  onFilterChange: func.isRequired
};

export { FilmDetailsFilter };
