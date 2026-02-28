const registerUser = async (req, res) => {
  res.json({ message: "User registered" })
}

const loginUser = async (req, res) => {
  res.json({ message: "User logged in" })
}

const logoutUser = async (req, res) => {
  res.json({ message: "User logged out" })
}

module.exports = { registerUser, loginUser, logoutUser }