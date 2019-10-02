import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_MOVIE_LIST = gql`
  query Movie($id: Int!) {
    movie(id: $id) {
      genre
      id
      posterUrl
      bannerUrl
      rating
      duration {
        hours
        minutes
      }
      title
      description
      showings {
        date
        seances {
          time
          cinema
          subtitles
          dimensionality
          dubbing
          url
        }
      }
    }
  }
`;

export const useMovieFetch = id =>
  useQuery(GET_MOVIE_LIST, {
    variables: { id }
  });

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
