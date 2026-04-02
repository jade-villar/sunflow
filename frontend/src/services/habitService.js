import api from "../api/axios";

export const fetchAllHabits = async () => {
  try {
    const res = await api.get("/habits");
    return res.data;
  } catch (err) {
    throw err.response?.data?.error;
  }
};

export const fetchHabit = async ({ id }) => {
  try {
    const res = await api.get(`/habits/${id}`);
    return res.data;
  } catch (err) {
    throw err.response?.data?.error;
  }
};

export const postHabit = async ({
  title,
  description,
  categoryId,
  frequency,
  scheduledDays,
}) => {
  try {
    const res = await api.post("/habits", {
      title,
      description,
      categoryId,
      frequency,
      scheduledDays,
    });

    return res.data;
  } catch (err) {
    throw err.response?.data?.error;
  }
};

export const editHabit = async ({
  id,
  title,
  description,
  categoryId,
  frequency,
  scheduledDays,
}) => {
  try {
    const res = await api.put(`/habits/${id}`, {
      title,
      description,
      categoryId,
      frequency,
      scheduledDays,
    });

    return res.data;
  } catch (err) {
    throw err.response?.data?.error;
  }
};

export const removeHabit = async ({ id }) => {
  try {
    const res = await api.delete(`/habits/${id}`);
    return res.data;
  } catch (err) {
    throw err.response?.data?.error;
  }
};
