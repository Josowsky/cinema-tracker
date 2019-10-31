import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { MovieShortInfo } from 'shared/models/movie';

interface MoviesData {
  movies: MovieShortInfo[];
}

const GET_MOVIES_LIST = gql`
  {
    movies {
      id
      genre
      posterUrl
      rating
      title
      showingsTime
    }
  }
`;

export const useFetchMovies = () => useQuery<MoviesData>(GET_MOVIES_LIST);
