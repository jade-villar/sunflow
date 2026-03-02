const prisma = require('../config/db')
const bcrypt = require('bcryptjs')

const registerUser = async (req, res) => {
  const { name, email, password } = req.body

  // Check if user already exist
  const userExists = await prisma.user.findUnique({
    where: { email: email }
  })

  if (userExists) {
    return res.status(400).json({ error: "User already exist" })
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword
    }
  })
  
  res.status(201).json({  
    status: "success",
    data: {
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    }
  })
}

const loginUser = async (req, res) => {
  const { email, password } = req.body

  // Check if user already registered
  const user = await prisma.user.findUnique({
    where: { email: email }
  })

  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" })
  }

  // Verify password
  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) {
    return res.status(401).json({ error: "Invalid email or password" })
  }

  res.status(201).json({  
    status: "success",
    data: {
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    }
  })
}

const logoutUser = async (req, res) => {
  res.status(200).json({ status: "success", message: "Logged out successfully" })
}

module.exports = { registerUser, loginUser, logoutUser }
