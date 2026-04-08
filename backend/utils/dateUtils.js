const getLocalToday = (timezone = "UTC") => {
  return new Date().toLocaleDateString("en-CA", { timeZone: timezone });
  // returns yyyy-MM-dd date format
};

const getLocalTodayKey = (timezone = "UTC") => {
  return new Date()
    .toLocaleDateString("en-US", { weekday: "short", timeZone: timezone })
    .toUpperCase();
  // returns "MON", "TUE", etc.
};

module.exports = { getLocalToday, getLocalTodayKey };
