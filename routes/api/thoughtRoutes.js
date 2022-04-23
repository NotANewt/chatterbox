const router = require("express").Router();
const { getThoughts, getSingleThought, createThought, updateThought, deleteThought } = require("../../controllers/thoughtController");

// /api/thoughts
// api routes to get all thoughts and post a new thought
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
// routes to get, put(update), and delete thoughts by thoughtId
router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);

// TODO: fix these to point to thoughts instead
// /api/reaction
// api route to create a new reaction
router.route("/").post(createReaction);

// /api/reaction/:reactionId
// api route to delete a reaction by reactionId
router.route("/:reactionId").delete(deleteReaction);

module.exports = router;
