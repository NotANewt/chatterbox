const { ObjectId } = require("mongoose").Types;
const { Reaction, Thought, User } = require("../models");

module.exports = {
  // Add an reaction to a thought
  addReaction(req, res) {
    console.log("You are adding a reaction");
    console.log(req.body);
    Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $addToSet: { reactions: req.body } }, { runValidators: true, new: true })
      .then((thought) => (!thought ? res.status(404).json({ message: "No thought found with that ID" }) : res.json(thought)))
      .catch((err) => res.status(500).json(err));
  },
  // Remove reaction from a thought
  removeReaction(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $pull: { reaction: { reactionId: req.params.reactionId } } }, { runValidators: true, new: true })
      .then((thought) => (!thought ? res.status(404).json({ message: "No thought found with that ID" }) : res.json(thought)))
      .catch((err) => res.status(500).json(err));
  },
};
