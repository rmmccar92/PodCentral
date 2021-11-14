import { gql } from "@apollo/client";

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const GET_ME = gql`
  {
    me {
      _id
      firstName
      lastName
      email
      addedPodcast {
        title
        description
        image
        episodes {
          title
          audio
          season
          episode
        }
      }
    }
  }
`;
