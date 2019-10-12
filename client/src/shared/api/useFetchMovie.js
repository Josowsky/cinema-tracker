import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

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

export const useFetchMovie = id =>
  useQuery(GET_MOVIE, {
    variables: { id }
  });
