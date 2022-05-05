const { Schema, model } = require("mongoose");

const testimonialSchema = new Schema(
  {
    testimonialText: {
      type: String,
      required: "You must leave a testimonial!",
      minlength: 1,
      maxlength: 400,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Testimonial = model("Testimonial", testimonialSchema);

module.exports = Testimonial;
