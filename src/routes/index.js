const express = require("express");
const router = express.Router();

router.use("/", require("./appRoutes"));
router.use("/api/users", require("./userRoutes"));
router.use("/api/auth", require("./authRoutes"));

module.exports = router;
