const { Schema, model } = require("mongoose");
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
  episodes: [Episode.schema],
  creator: [User],

  likes: {
    type: Number,
  },
});

const Podcast = model("Podcast", podcastSchema);

module.exports = Podcast;
