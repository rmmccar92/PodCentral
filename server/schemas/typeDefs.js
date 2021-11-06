const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    createdPodcasts: [Podcast]
    likedPodcasts: [Podcast]
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

  input likedPodcast {
    _id: ID
    title: String
    description: String
    image: String
    episodes: [Episode]
    createdBy: User
    likes: Int
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
    categories: [Category]
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
    likePodcast(input: likedPodcast!): User
    addPodcast(title: String!, description: String, image: String): Podcast
  }
`;

module.exports = typeDefs;
