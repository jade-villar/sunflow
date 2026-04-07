const { toZonedTime, format: formatTz } = require("date-fns-tz");

const getLocalToday = (timezone = "UTC") => {
  const zonedNow = toZonedTime(new Date(), timezone);

  // Extract local date parts
  const year = zonedNow.getFullYear();
  const month = zonedNow.getMonth();
  const day = zonedNow.getDate();

  // Return as UTC midnight of that local date
  return new Date(Date.UTC(year, month, day));
};

const getLocalTodayKey = (timezone = "UTC") => {
  const zonedNow = toZonedTime(new Date(), timezone);
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return days[zonedNow.getDay()];
};

module.exports = { getLocalToday, getLocalTodayKey };
