const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    addedPodcast: Podcast
    likedPodcasts: [Podcast]
    comments: [Comment]
  }

  type Category {
    _id: ID
    name: String
  }

  type Podcast {
    _id: ID
    title: String!
    description: String!
    image: String
    episodes: [Episode]
    createdBy: User
    likes: Int
    comments: [Comment]
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
    comments: [Comment]
  }

  type Comment {
    _id: ID
    text: String
    createdBy: User
    createdAt: String
  }

  type Auth {
    token: ID
    user: User
  }

  input podcastInput {
    title: String!
    description: String!
    image: String
  }

  input likedPodcast {
    id: String
    title: String
    description: String
    image: String
  }

  input episodeInput {
    title: String!
    description: String!
    audio: String
    duration: Int
    episode: Int
    season: Int
  }

  input commentInput {
    text: String
    createdBy: ID
    createdAt: String
  }

  type Query {
    user(email: String!): User
    users: [User]
    me: User
    catagories: [Category]
    comments(firstName: String, lastName: String): [Comment]
    podcasts: [Podcast]
    podcast(_id: ID!): Podcast
    episode(_id: ID): Episode
    episodes(_id: ID): Podcast
    addedPodcast: Podcast
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
      addedPodcast: String
    ): User
    login(email: String!, password: String!): Auth
    addPodcast(input: podcastInput): Podcast
    likePodcast(input: likedPodcast!): User
    addEpisode(input: episodeInput!): Episode
    addComment(input: commentInput!): User
    removeComment(_id: ID): Comment
  }
`;

module.exports = typeDefs;
