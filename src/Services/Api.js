import axios from "axios";

const api = axios.create({
  // baseURL: "https://admin-portal-over.herokuapp.com",
  baseURL: "https://localhost:8080",
});

export default api;
