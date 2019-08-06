import {
  FILTER_SUBTITLES,
  FILTER_DUBBING,
  FILTER_TWOD,
  FILTER_THREED,
  FILTER_TWOD_VALUE,
  FILTER_THREED_VALUE
} from "../../components/film.details.filter";

const applySeanceFilters = filters => seance => {
  if (filters[FILTER_TWOD] && seance.dimensionality !== FILTER_TWOD_VALUE) {
    return false;
  }

  if (filters[FILTER_THREED] && seance.dimensionality !== FILTER_THREED_VALUE) {
    return false;
  }

  if (filters[FILTER_SUBTITLES] && !seance.subtitles) {
    return false;
  }

  if (filters[FILTER_DUBBING] && !seance.dubbing) {
    return false;
  }

  return true;
};

export { applySeanceFilters };
