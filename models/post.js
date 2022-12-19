const moogose = require("mongoose");
const Schema = moogose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    imageUrl: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = moogose.model("Post", postSchema);
