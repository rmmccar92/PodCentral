import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_PODCAST = gql`
  mutation addPodcast($input: podcastInput!) {
    addPodcast(input: $input) {
      title
      description
      image
    }
  }
`;

export const ADD_EPISODE = gql`
  mutation addEpisode($input: episodeInput!) {
    addEpisode(input: $input) {
      title
      description
      audio
      duration
      season
      episode
    }
  }
`;

export const LIKE_PODCAST = gql`
  mutation likePodcast($input: likedPodcast!) {
    likePodcast(input: $input) {
      _id
      email
      likedPodcasts {
        title
        description
        image
      }
    }
  }
`;
