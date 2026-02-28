const express = require('express')
const router = express.Router()
const { completeHabit, getHabitLogs, getHabitStreak } = require('../controllers/habitLogControllers')

router.post("/:id/complete", completeHabit)

router.get("/:id/logs", getHabitLogs)

router.get("/:id/streak", getHabitStreak)

module.exports = router
