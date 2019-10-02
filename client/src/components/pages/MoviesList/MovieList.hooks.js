import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

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

export const useMoviesFetch = () => useQuery(GET_MOVIES_LIST);
