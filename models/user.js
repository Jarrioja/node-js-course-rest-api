const moogose = require("mongoose");
const Schema = moogose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      require: true,
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },

  { timestamps: true }
);

module.exports = moogose.model("User", userSchema);
