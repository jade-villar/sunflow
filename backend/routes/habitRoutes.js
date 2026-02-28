const express = require('express')
const router = express.Router()
const { getAllHabits, getHabit, addHabit, updateHabit, deleteHabit } = require('../controllers/habitControllers')

router.get("/", getAllHabits)

router.get("/:id", getHabit)

router.post("/", addHabit)

router.put("/:id", updateHabit)

router.delete("/:id", deleteHabit)

module.exports = router 
