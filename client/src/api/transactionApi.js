import axios from "axios";

export const create = (data) => {
    return axios.post("http://localhost:5000/transaction/create", {
        userId: data._id,
        money_operations: data.money_operations,
        description: data.description,
        type: data.type,
    });
  };

export const update = (data) => {
    return axios.put("http://localhost:5000/transaction/update", {
        money_operations: data.money_operations,
        description: data.description,
        type: data.type,
        created: data.create.created
    });
  };
  export const get = (data) => {
    return axios.get("http://localhost:5000/transaction/get", {});
  };
  export const deleteTransaction = (data) => {
    return axios.put("http://localhost:5000/transaction/delete", {
        id: data._id
    });
  };
 
