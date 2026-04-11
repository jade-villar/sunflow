import api from "../api/axios";

export const fetchCategories = async () => {
  try {
    const res = await api.get("/categories");
    return res.data;
  } catch (err) {
    throw err.response?.data?.error;
  }
};
