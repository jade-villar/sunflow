require("dotenv").config();

const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

// Import routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const habitRoutes = require("./routes/habitRoutes");
const habitLogRoutes = require("./routes/habitLogRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/habits", habitRoutes);
app.use("/api/habits", habitLogRoutes);
app.use("/api/categories", categoryRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
