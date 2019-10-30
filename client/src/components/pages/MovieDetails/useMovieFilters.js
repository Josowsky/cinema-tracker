export const useMovieFilters = (movieData, filters) => {
  if (!(movieData && movieData.showings)) return movieData;

  const filteredShowings = movieData.showings.map(showing => {
    const { seances } = showing;

    const filteredSeances = seances
      .map(seance => {
        const { subtitles, dubbing, dimensionality } = seance;

        if (filters.screenType === "2D" && dimensionality !== "2D") return null;
        if (filters.screenType === "3D" && dimensionality !== "3D") return null;
        if (filters.dialoguesType === "subtitles" && !subtitles) return null;
        if (filters.dialoguesType === "dubbing" && !dubbing) return null;

        return seance;
      })
      .filter(showing => Boolean(showing));

    if (Boolean(filteredSeances))
      return {
        ...showing,
        seances: filteredSeances
      };

    return null;
  });

  return {
    ...movieData,
    showings: filteredShowings.filter(showing => Boolean(showing))
  };
};
