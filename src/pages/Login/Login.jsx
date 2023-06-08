import { Link } from 'react-router-dom';
import authImg from '../../assets/authImg.svg';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
	const { createUser, updateUserProfile } = useContext(AuthContext);
	const [error, setError] = useState('');
	const [showPass, setShowPass] = useState('password');
	return <div></div>;
};

export default Login;
