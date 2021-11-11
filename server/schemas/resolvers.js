const { AuthenticationError } = require("apollo-server-express");
const { User, Podcast } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        try {
          const userData = await User.findOne({
            _id: context.user._id,
          })
            .select("-__v-password")
            .populate("podcasts");

          return userData;
        } catch (err) {
          console.log(err);
        }
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    users: async () => {
      return User.find().populate("comments");
    },
    podcasts: async () => {
      return await Podcast.find({}).populate("episodes");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    addPodcast: async (parent, args, context) => {
      if (context.user) {
        try {
          const podcast = new Podcast(args);

          await Podcast.create(context.user._id, args);
          return podcast;
        } catch (err) {
          console.log(err);
        }
      }
      throw new AuthenticationError("Not logged in");
    },

    likePodcast: async (parent, args, context) => {
      if (context.user) {
        try {
          const podcast = await Podcast.findByIdAndUpdate(
            args.podcastId,
            { $addToSet: { likes: context.user._id } },
            { new: true }
          );

          return podcast;
        } catch (err) {
          console.log(err);
        }
      }
      throw new AuthenticationError("Not logged in");
    },

    addComment: async (parent, args, context) => {
      if (context.user) {
        try {
          const comment = await User.findByIdAndUpdate(
            args.podcastId,
            { $push: { comments: args.text } },
            { new: true }
          );

          return comment;
        } catch (err) {
          console.log(err);
        }
      }
      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
