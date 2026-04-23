const express = require("express");
const { getCurrentUser, updateTheme } = require("../controllers/userControllers");
const protect = require("../middlewares/authMiddleware");
const validate = require("../middlewares/validateMiddleware");
const { validateCsrf } = require("../middlewares/csrfMiddleware");
const themeSchema = require("../validators/userValidator");

const router = express.Router();

router.use(protect);

router.get("/me", getCurrentUser);

router.patch("/theme", validateCsrf, validate(themeSchema), updateTheme);

module.exports = router;
