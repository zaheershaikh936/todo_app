import axios from 'axios';

const axiosInstance: any = axios.create({
	baseURL: 'https://todo-solo-backend-production.up.railway.app/'
});
axiosInstance.interceptors.response.use(
	(response: any) => response,
	(error: any) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
