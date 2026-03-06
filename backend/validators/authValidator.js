const { z } = require("zod");

const registerSchema = z.object({
  name: z
    .string({ error: "Name must be a string" })
    .trim()
    .min(2, { error: "Name must be at least 2 characters" })
    .max(100, { error: "Name is too long" }),

  email: z
    .string({ error: "Invalid email address" })
    .trim()
    .toLowerCase()
    .email({ error: "Invalid email address" }),

  password: z
    .string({ error: "Password must contain at least one uppercase character" })
    .min(8, { error: "Password must be at least 8 characters" })
    .max(100, { error: "Password is too long" })
    .regex(/[A-Z]/, { error: "Password must contain at least one uppercase character" }),
});

const loginSchema = z.object({
  email: z
    .string({ error: "Invalid email address" })
    .trim()
    .toLowerCase()
    .email({ error: "Invalid email address" }),

  password: z
    .string({ error: "Password must contain at least one uppercase character" })
    .min(1, { error: "Password is required" }),
});

module.exports = { registerSchema, loginSchema };
