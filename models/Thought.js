const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectIds,
      default: () => new Types.ObjectIds(),
    },
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
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Reaction",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// TODO: create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query

module.exports = thoughtSchema;
