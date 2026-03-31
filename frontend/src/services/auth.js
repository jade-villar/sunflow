import api from "../api/axios";

export const registerUser = async ({ name, email, password }) => {
  try {
    const res = await api.post("/auth/register", {
      name,
      email,
      password,
    });

    return res;
  } catch (err) {
    throw err.response?.data?.error;
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const res = await api.post("/auth/login", {
      email,
      password,
    });

    return res;
  } catch (err) {
    throw err.response?.data?.error;
  }
};

export const logoutUser = async () => {
  try {
    const res = await api.post("/auth/logout");
    return res;
  } catch (err) {
    throw err.response?.data?.error;
  }
};
