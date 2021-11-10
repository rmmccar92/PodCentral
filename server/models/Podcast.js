const mongoose = require("mongoose");

const { Schema } = require("mongoose");
const Episode = require("./Episode");
const User = require("./User");

const podcastSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  // episodes: [
  //   {
  //     type: Episode.Types.ObjectId,
  //   },
  // ],
  // createdBy: {
  //   type: User.Types.ObjectId,
  // },

  likes: {
    type: Number,
  },
});

const Podcast = mongoose.model("Podcast", podcastSchema);

module.exports = Podcast;
