const mongoose = require("mongoose");

const { Schema } = require("mongoose");

const episodeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
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

const Episode = mongoose.model("Episode", episodeSchema);

module.exports = Episode;
