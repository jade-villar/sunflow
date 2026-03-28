const { z } = require("zod");

const habitSchema = z.object({
  title: z
    .coerce.string()
    .trim()
    .min(1, { error: "Title is required" })
    .max(100, { error: "Title is too long" }),

  description: z
    .coerce.string()
    .trim()
    .max(500, { error: "Description is too long" })
    .optional()
    .nullable(),

  categoryId: z
    .int({ error: "Category ID must be a whole number" })
    .min(1, { error: "Invalid category" })
    .max(8, { error: "Invalid category" }),

  frequency: z
    .enum(["DAILY", "WEEKLY"], { error: "Frequency must be DAILY or WEEKLY" }),

  scheduledDays: z
    .array(z.enum(["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], { error: "Invalid scheduled days" }))
    .min(1, { error: "Select at least one day" }),
});

module.exports = habitSchema;
