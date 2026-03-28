const { z } = require("zod");

const themeSchema = z.object({
  theme: z
    .enum(["LIGHT", "DARK"], { error: "Theme must be LIGHT or DARK" }),
});

module.exports = themeSchema;
