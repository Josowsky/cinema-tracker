import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { Movie } from 'shared/models/movie';

interface MovieData {
  movie: Movie;
}

const GET_MOVIE = gql`
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

export const useFetchMovie = (id: number) =>
  useQuery<MovieData>(GET_MOVIE, {
    variables: { id },
  });
