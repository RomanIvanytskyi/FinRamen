import axios from "axios";

export const create = (data) => {
  return axios.post("http://localhost:5000/category/create", {
    token: localStorage.getItem("token"),
    type: data.type,
    name: data.name,
    id: data.id,
  });
};

export const update = (data) => {
  return axios.put("http://localhost:5000/category/update", {
    token: localStorage.getItem("token"),
    id: data.id,
    money_operations: data.money_operations,
    description: data.description,
    type: data.type,
    created: data.created,
  });
};
export const get = (data) => {
  return axios.post("http://localhost:5000/category/get", {
    token: localStorage.getItem("token"),
  });
};
export const deleteCategory = (_id) => {
  return axios.post("http://localhost:5000/category/delete", {
    token: localStorage.getItem("token"),
    id: _id,
  });
};
