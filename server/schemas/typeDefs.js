const { gql } = require("apollo-server-express");
// TODO: fix liked Podcast type

// This goes in mutation
// likePodcast(input: likedPodcast!): User

// This goes in user
// likedPodcasts: [Podcast]

// This is the type
// input likedPodcast {
//   _id: ID
//   title: String
//   description: String
//   image: String
//   episodes: [Episode]
//   createdBy: User
//   likes: Int
// }

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    createdPodcasts: [Podcast]
  }

  type Podcast {
    _id: ID
    title: String
    description: String
    image: String
    episodes: [Episode]
    createdBy: User
    likes: Int
  }

  type Episode {
    _id: ID
    title: String
    description: String
    audio: String
    podcast: Podcast
    createdBy: User
    duration: Int
    season: Int
    episode: Int
  }

  type Auth {
    token: ID
    user: User
  }

  input addedPodcast {
    title: String
    description: String
    image: String
  }

  input addedEpisode {
    title: String
    description: String
    audio: String
    season: Int
  }

  type Query {
    user: User
    podcasts: [Podcast]
    Episode(_id: ID): Podcast
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
    addPodcast(title: String!, description: String, image: String): Podcast
  }
`;

module.exports = typeDefs;
