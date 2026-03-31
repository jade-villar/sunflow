import api from "../api/axios";

export const getCurrentUser = async () => {
  try {
    const res = await api.get("/users/me");
    return res.data;
  } catch (err) {
    throw err.response?.data?.error;
  }
};
