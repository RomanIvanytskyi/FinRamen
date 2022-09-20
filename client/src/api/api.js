import axios from "axios";

export const register = (data) => {
  return axios.post("http://localhost:3000/auth/register", {
    email: data.email,
    name: data.name,
    password: data.password,
  });
};

export const loginApi = (data) => {
  return axios.post("http://localhost:3000/auth/login", {
    email: data.email,
    password: data.password,
  });
};

export const update = (data) => {
  return axios.put("http://localhost:3000/auth/update", {
    id: data.id,
    currency: data.currency,
  });
};
export const deleteUser = (id) => {
  return axios.delete("http://localhost:3000/auth/delete", {
    id,
  });
};

export const meAPI = (token) => {
  return axios.post("http://localhost:3000/auth/me", { token });
};
