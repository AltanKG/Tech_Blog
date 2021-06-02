const router = require("express").Router();
const dashboardRoutes = require("./dashboardRoutes");
const loginRoutes = require("./loginRoutes");
const signupRoutes = require("./signupRoutes");

router.use("/dashboard", dashboardRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signupRoutes);

module.exports = router;
