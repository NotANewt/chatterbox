const router = require("express").Router();
const { getThoughts, getSingleThought, createThought, updateThought, deleteThought } = require("../../controllers/thoughtController");

// /api/thoughts
// api routes to get all thoughts and post a new thought
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
// routes to get, put(update), and delete thoughts by thoughtId
router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
// api route to create a new reaction for a thought by thoughtId
router.route("/:thoughtId/reactions").post(createReaction);

// /api/thoughts/:thoughtId/:reactionId
// api route to delete a reaction by reactionId and thoughtId
router.route("/thoughtId/:reactionId").delete(deleteReaction);

module.exports = router;
