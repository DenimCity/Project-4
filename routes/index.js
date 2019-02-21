const path = require("path");
const router = require("express").Router();
const serverApi = require("./serverApi");

// API Routes
router.use("/api", serverApi);

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(__dirname + '/client/build/index.html')
});

module.exports = router;
