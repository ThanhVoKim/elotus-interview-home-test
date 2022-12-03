import axios from 'axios';
import { API_URL, API_KEY } from 'common/constants/api';

const instance = axios.create({
	baseURL: API_URL,
	params: {
		api_key: API_KEY,
	},
});

// Add a request interceptor
axios.interceptors.request.use(
	function (config) {
		config.params = {
			api_key: API_KEY,
			...config.params,
		};
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	},
);

// Add a response interceptor
axios.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	},
);

export default instance;
