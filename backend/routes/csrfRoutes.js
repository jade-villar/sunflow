const express = require("express");
const { generateCsrfToken } = require("../middlewares/csrfMiddleware");
const router = express.Router();

router.get("/", generateCsrfToken);

module.exports = router;
