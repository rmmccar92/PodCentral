const { Schema, model } = require("mongoose");

const episodeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  audio: {
    type: String,
  },
  duration: {
    type: Number,
  },
  season: {
    type: Number,
  },
  episode: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Episode = model("Episode", episodeSchema);

module.exports = Episode;
