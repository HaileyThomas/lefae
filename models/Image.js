const { Schema, model, default: mongoose } = require("mongoose");

const imageSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
});

const Image = new mongoose.model("Image", imageSchema);

module.exports = Image;
