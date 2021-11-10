import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      firstName
      lastName
      email

      createdPodcast {
        title
        description
        image
      }
    }
  }
`;
