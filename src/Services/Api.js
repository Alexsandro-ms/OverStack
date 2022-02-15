import axios from "axios";

const api = axios.create({
  baseURL: "https://admin-portal-over.herokuapp.com",
});

export default api;
