import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const axiosSecure = axios.create({
	baseURL: `${import.meta.env.VITE_SERVER_URL}`
});

const useAxiosSecure = () => {
	const navigate = useNavigate();
	const { logOutUser } = useContext(AuthContext);

	useEffect(() => {
		axiosSecure.interceptors.request.use((config) => {
			const token = localStorage.getItem('access_token');
			if (token) {
				config.headers.Authorization = `bearer ${token}`;
			}
			return config;
		});

		axiosSecure.interceptors.response.use(
			(response) => response,
			async (error) => {
				if (error.response && (error.response.status === 401 || error.response.status === 403)) {
					await logOutUser();
					navigate('/login');
				}
				return Promise.reject(error);
			}
		);
	}, [logOutUser, navigate]);

	return [axiosSecure];
};
export default useAxiosSecure;
