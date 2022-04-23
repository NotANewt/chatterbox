const router = require("express").Router();
const userRoutes = require("./userRoutes");

router.use("/users", userRoutes);

module.exports = router;

// older routes from miniproj

const courseRoutes = require("./courseRoutes");
const studentRoutes = require("./studentRoutes");

router.use("/courses", courseRoutes);
router.use("/students", studentRoutes);
