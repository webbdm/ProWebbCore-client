import axios from "axios";

const API_BASE_URL = `${process.env.API_BASE_URL}`; //
//const API_BASE_URL = `http://localhost:3000/api`; // Used for my local testing purposes

export const authApi = {
  showLoginPage: () => axios.get(`${process.env.AUTH_HOST}`),
  getToken: async data => {
    return await axios({
      method: 'post',
      url: `${process.env.AUTH_HOST}/auth/token`,
      data: data
    });
    //return await axios.post(`${process.env.AUTH_HOST}/auth/token`, { crossdomain: true }, data)
  }
};

export const userApi = {
  getUser: async (id) => await axios.get(`${API_BASE_URL}/user/${id}`),
  update: async (id, update) =>
    await axios.put(`${API_BASE_URL}/user/${id}`, update),
};

export const projectApi = {
  update: async (id, update) =>
    await axios.put(`${API_BASE_URL}/projects/${id}`, update),
};
