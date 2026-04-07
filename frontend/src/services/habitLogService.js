import api from "../api/axios";

export const complete = async ({ id }) => {
  try {
    const res = await api.patch(`/habits/${id}/complete`);
    return res.data;
  } catch (err) {
    throw err.response?.data?.error;
  }
};

export const fetchWeeklyHabitLogs = async ({ id }) => {
  try {
    const res = await api.get(`/habits/${id}/weekly-logs`);
    return res.data;
  } catch (err) {
    throw err.response?.data?.error;
  }
};
