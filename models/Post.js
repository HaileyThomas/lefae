const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const Image = require("./Image");

const postSchema = new Schema(
  {
    postText: {
      type: String,
      required: "You need to leave a descrption!",
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    image: {
      type: Schema.types.ObjectId,
      ref: "Image",
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Post = model("Post", postSchema);

module.exports = Post;
