const router = require("express").Router();
const { createReaction, deleteReaction } = require("../../controllers/reactionController");

// /api/reaction
// api route to create a new reaction
router.route("/").post(createReaction);

// /api/reaction/:reactionId
// api route to delete a reaction by reactionId
router.route("/:reactionId").delete(deleteReaction);

module.exports = router;

// TODO: move this into thorught routes
