import axios from "axios";



export const register = (data) => {
  return axios.post("http://localhost:5000/auth/register", {
    email: data.email,
    name: data.name,
    password: data.password,
  });
};

export const loginAPI = (data) => {
  return axios.post("http://localhost:5000/auth/login", {
    email: data.email,
    password: data.password,
  });
};


export const meAPI = (token) => {
  return axios.post("http://localhost:5000/auth/me", { token });
};
