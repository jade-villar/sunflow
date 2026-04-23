const crypto = require("crypto");

const csrfTokens = new Set();

const generateCsrfToken = (req, res) => {
  const token = crypto.randomBytes(32).toString("hex");

  csrfTokens.add(token);
  
  res.json({ csrfToken: token });
};

const validateCsrf = (req, res, next) => {
  if (req.method === "GET") {
    return next();
  }

  const token = req.headers["x-csrf-token"];

  if (!token || !csrfTokens.has(token)) {
    return res.status(403).json({ error: "Invalid CSRF token" });
  }

  csrfTokens.delete(token);

  next();
};

module.exports = { generateCsrfToken, validateCsrf };
