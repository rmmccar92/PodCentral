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
    required: true,
  },
  image: {
    type: String,
  },
  episodes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Episode",
    },
  ],

  likes: {
    type: Number,
  },
});

const Podcast = mongoose.model("Podcast", podcastSchema);

module.exports = Podcast;
