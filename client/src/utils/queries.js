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
        _id
        title
        description
        image
        episodes {
          title
          audio
          season
          episode
          _id
        }
      }
    }
  }
`;

export const QUERY_ALL_PODCASTS = gql`
  {
    podcasts {
      _id
      title
      description
      image
      episodes {
        title
        description
        audio
        season
        episode
      }
    }
  }
`;
export const QUERY_SINGLE_PODCAST = gql`
  query podcast($_id: ID!) {
    podcast(_id: $_id) {
      _id
      title
      description
      image
      episodes {
        _id
        title
        description
        audio
        season
        episode
      }
    }
  }
`;
