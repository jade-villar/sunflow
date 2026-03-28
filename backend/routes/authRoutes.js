const express = require("express");
const { registerUser, loginUser, logoutUser } = require("../controllers/authControllers");
const validate = require("../middlewares/validateMiddleware");
const { registerSchema, loginSchema } = require("../validators/authValidator");

const router = express.Router();

router.post("/register", validate(registerSchema), registerUser);

router.post("/login", validate(loginSchema), loginUser);

router.post("/logout", logoutUser);

module.exports = router;
