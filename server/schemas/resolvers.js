const { AuthenticationError } = require("apollo-server-express");
const { User, Podcast, Episode } = require("../models");
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
            .populate("addedPodcast")
            .populate({
              path: "addedPodcast",
              populate: "episodes",
            });

          return userData;
        } catch (err) {
          console.log(err);
        }
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    users: async () => {
      return User.find().populate("addedPodcast").populate({
        path: "addedPodcast",
        populate: "episodes",
      });
    },
    podcasts: async () => {
      return await Podcast.find().populate("episodes");
    },

    podcast: async (parent, args) => {
      try {
        const podcastData = await Podcast.findOne({
          _id: args._id,
        }).populate("episodes");
        return podcastData;
      } catch (err) {
        console.log(err);
      }
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
          const newPodcast = await Podcast.create(args.input);
          console.log(newPodcast);
          // return newPodcast;

          const updateUserPodcast = await User.findOneAndUpdate(
            { _id: context.user._id },
            { addedPodcast: newPodcast._id },
            { new: true, runValidators: true }
          );
          // console.log(updateUserPodcast);
        } catch (err) {
          console.log(err);
        }
      }
    },
    addEpisode: async (parent, args, context) => {
      if (context.user) {
        try {
          // console.log(args.input);
          // console.log(context.user);
          const newEpisode = await Episode.create(args.input);
          // console.log(newEpisode);
          const user = await User.findOne({ _id: context.user._id });
          const updatePodcast = await Podcast.findOneAndUpdate(
            { _id: user.addedPodcast },
            { $push: { episodes: newEpisode._id } },
            { new: true, runValidators: true }
          );
          console.log(updatePodcast);
        } catch (err) {
          console.log(err);
        }
      }
    },

    likePodcast: async (parent, args, context) => {
      if (context.user) {
        console.log(args.input);
        console.log("user: ", context.user.firstName);
        try {
          const updateUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { likedPodcasts: args.input } },
            { new: true, runValidators: true }
          );

          return updateUser;
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
