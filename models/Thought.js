const { Schema, Types, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dateFormat = require("./../utils/dateFormat");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});
// TODO: create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
