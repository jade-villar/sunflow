const express = require('express')
const router = express.Router()
const { completeHabit, getHabitLogs } = require('../controllers/habitLogControllers')
const protect = require('../middlewares/authMiddleware')

router.use(protect)

router.patch("/:id/complete", completeHabit)

router.get("/:id/logs", getHabitLogs)

module.exports = router
