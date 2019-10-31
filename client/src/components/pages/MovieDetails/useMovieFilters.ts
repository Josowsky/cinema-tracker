import { Movie, ShowingGroup } from 'shared/models';
import { ShowingsFilters } from './MovieDetails.constants';

/**
 * Get movie data and return filtered movie data based on provided filters.
 * "useMovieFilters" filters out showings that don't match the filters.
 * Showings are grouped into showingsGroups.
 * If showing group is empty (all seances from the given group are filtered out)
 * then entire filterGroup element will also be removed from filtered movieData.
 * @param movieData - data from the API for the given movie
 * @param filters - current filters fot the given movie
 */
export const useMovieFilters = (movieData: Movie, filters: ShowingsFilters): Movie => {
  /**
   * Return if movie object has no showings
   */
  if (!(movieData && (movieData as Movie).showings)) return movieData;

  const filteredShowings = (movieData as Movie).showings.map(showing => {
    const { seances } = showing;

    const filteredSeances = seances
      .map(seance => {
        const { subtitles, dubbing, dimensionality } = seance;

        if (filters.screenType === '2D' && dimensionality !== '2D') return null;
        if (filters.screenType === '3D' && dimensionality !== '3D') return null;
        if (filters.dialoguesType === 'subtitles' && !subtitles) return null;
        if (filters.dialoguesType === 'dubbing' && !dubbing) return null;

        return seance;
      })
      .filter(showing => Boolean(showing));

    if (filteredSeances)
      return {
        ...showing,
        seances: filteredSeances,
      };

    return null;
  });

  return {
    ...movieData,
    showings: filteredShowings.filter(showing => Boolean(showing)) as ShowingGroup[],
  };
};
