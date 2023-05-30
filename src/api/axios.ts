import axios from 'axios';

const axiosInstance: any = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API_URL,
});
axiosInstance.interceptors.response.use(
	(response: any) => response,
	(error: any) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
