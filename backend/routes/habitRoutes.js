const express = require("express");
const { getAllHabits, getHabit, addHabit, updateHabit, deleteHabit } = require("../controllers/habitControllers");
const protect = require("../middlewares/authMiddleware");
const validate = require("../middlewares/validateMiddleware");
const habitSchema = require("../validators/habitValidator");

const router = express.Router();

router.use(protect);

router.get("/", getAllHabits);

router.get("/:id", getHabit);

router.post("/", validate(habitSchema), addHabit);

router.put("/:id", validate(habitSchema), updateHabit);

router.delete("/:id", deleteHabit);

module.exports = router;
