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
        id: data.id,
        money_operations: data.money_operations,
        description: data.description,
        type: data.type,
        created: data.created
    });
  };
  export const get = (data) => {
    return axios.post("http://localhost:5000/transaction/get", {
        userId: data._id,
    });
  };
  export const deleteTransaction = (_id) => {
    return axios.post("http://localhost:5000/transaction/delete", {
        _id
    });
  };
 
