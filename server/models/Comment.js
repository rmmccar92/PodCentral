const mongoose = require("mongoose");

const { Schema } = require("mongoose");

const commentSchema = new Schema({
  text: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
