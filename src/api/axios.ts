import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://todo-solo-backend-production.up.railway.app/",
});
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
