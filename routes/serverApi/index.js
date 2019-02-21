
const router = require("express").Router();
const resourceRoutes = require("./resource");


router.use('/homecoming/', resourceRoutes);

module.exports = router;

