const router = require("express").Router();
const { getUsers, getSingleUser, addFriend, removeFriend, createUser, deleteUser, updateUser } = require("../../controllers/userController");

//  /api/users
// api route to get all users or create a new user
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
// api route to get, update, or delete a user by userId
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/userss/:userId/friends
// api route to add a new friend
router.route("/:userId/friends").post(addFriend);

// /api/userss/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").delete(removeFriend);

module.exports = router;
