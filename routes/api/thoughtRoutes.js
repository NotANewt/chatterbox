const router = require("express").Router();
const { getThoughts, getSingleThought, createThought, updateThought, deleteThought } = require("../../controllers/thoughtController");

// /api/thoughts
// api routes to get all thoughts and post a new thought
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
// routes to get, put(update), and delete thoughts by thoughtId
router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);

module.exports = router;
