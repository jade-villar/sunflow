const getAllHabits = async (req, res) => {
  res.json({ message: "Get all habits" })
}

const getHabit = async (req, res) => {
  res.json({ message: "Get habit" })
}

const addHabit = async (req, res) => {
  res.json({ message: "Post habit" })
}

const updateHabit = async (req, res) => {
  res.json({ message: "Update habit" })
}

const deleteHabit = async (req, res) => {
  res.json({ message: "Delete habit" })
}

module.exports = { getAllHabits, getHabit, addHabit, updateHabit, deleteHabit }
