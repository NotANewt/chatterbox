const router = require("express").Router();
const { getUsers, getSingleUser, addFriend, removeFriend, createUser, deleteUser, updateUser } = require("../../controllers/userController");

//  /api/users
// api route to get all users or create a new user
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
// api route to get, update, or delete a user by userId
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
// api route to add a friend or remove a friend from a user by userId and friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
