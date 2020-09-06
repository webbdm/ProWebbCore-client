import axios from "axios";

const API_BASE_URL = `${process.env.API_BASE_URL}`;//
//const API_BASE_URL = `http://localhost:3000/api`; // Used for my local testing purposes

export const userApi = {
  getUser: async (id) => await axios.get(`${API_BASE_URL}/user/${id}`),
};
