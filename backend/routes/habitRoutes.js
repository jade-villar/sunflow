const express = require("express");
const { getAllHabits, getHabit, addHabit, updateHabit, deleteHabit } = require("../controllers/habitControllers");
const protect = require("../middlewares/authMiddleware");
const validate = require("../middlewares/validateMiddleware");
const { validateCsrf } = require("../middlewares/csrfMiddleware");
const habitSchema = require("../validators/habitValidator");

const router = express.Router();

router.use(protect);

router.get("/", getAllHabits);

router.get("/:id", getHabit);

router.post("/", validateCsrf, validate(habitSchema), addHabit);

router.put("/:id", validateCsrf, validate(habitSchema), updateHabit);

router.delete("/:id", validateCsrf, deleteHabit);

module.exports = router;
