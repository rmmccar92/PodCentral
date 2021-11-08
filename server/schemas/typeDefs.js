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
    createdPodcast: Podcast
    likedPodcasts: [Podcast]
    comments: [Comment]
  }

  type Category {
    _id: ID
    name: String
  }

  type Podcast {
    _id: ID
    title: String
    description: String
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

  input addedPodcast {
    title: String
    description: String
    image: String
  }

  input likedPodcast {
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

  input addedComment {
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
    addPodcast(input: addedPodcast!): User
    likePodcast(input: likedPodcast!): User
    addEpisode(input: addedEpisode!): Podcast
    addComment(input: addedComment!): User
    removeComment(_id: ID): Comment
  }
`;

module.exports = typeDefs;
