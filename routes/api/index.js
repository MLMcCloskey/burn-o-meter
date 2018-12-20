const router = require("express").Router();
const burnRoutes = require("./burnRoutes");

router.use("/burnRoutes", burnRoutes);

module.exports = router;