import axios from "axios";

const API_BASE_URL = `${process.env.API_BASE_URL}`; //
//const API_BASE_URL = `http://localhost:3000/api`; // Used for my local testing purposes

export const userApi = {
  getUser: async (id) => await axios.get(`${API_BASE_URL}/user/${id}`),
  update: async (id, update) =>
    await axios.get(`${API_BASE_URL}/user/${id}`, update),
};

export const projectApi = {
  update: async (id, update) =>
    await axios.put(`${API_BASE_URL}/projects/${id}`, update),
};
