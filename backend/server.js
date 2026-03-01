const express = require('express')

const authRoutes = require('./routes/authRoutes')
const habitRoutes = require('./routes/habitRoutes')
const habitLogRoutes = require('./routes/habitLogRoutes')

require('dotenv').config() 

const app = express()

// routes
app.use("/api/auth", authRoutes)
app.use("/api/habits", habitRoutes)
app.use("/api/habits", habitLogRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
