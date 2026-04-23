const express = require("express");
const router = express.Router();
const { completeHabit, getWeeklyHabitLogs } = require("../controllers/habitLogControllers");
const protect = require("../middlewares/authMiddleware");
const { validateCsrf } = require("../middlewares/csrfMiddleware");

router.use(protect);

router.patch("/:id/complete", validateCsrf, completeHabit);

router.get("/:id/weekly-logs", getWeeklyHabitLogs);

module.exports = router;
