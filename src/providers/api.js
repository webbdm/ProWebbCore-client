import axios from "axios";

const API_BASE_URL = `/api`;

export const api = {
  userApi: {
    getUser: async (id) => await axios.get(`${API_BASE_URL}/user/${id}`),
  },
};
