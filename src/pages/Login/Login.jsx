import { Link } from 'react-router-dom';
import authImg from '../../assets/authImg.svg';
import { useForm } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import GoogleLogin from '../../components/GoogleLogin';

const Login = () => {
	const { loginWithEmail } = useContext(AuthContext);
	const [error, setError] = useState('');
	const [showPass, setShowPass] = useState('password');
	useEffect(() => {
		// scroll to top of page
		window.scrollTo(0, 0);
		document.title = 'Register | ToyVerse';
	}, []);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const onSubmit = (formData) => {
		loginWithEmail(formData.email, formData.password)
			.then((data) => {
				console.log(data.user);
			})
			.catch((err) => {
				console.log(err.message);
				setError(err.message);
			});
	};

	return (
		<div className='lg:flex justify-center items-center py-12'>
			<div className='w-full lg:w-1/2'>
				<img className='w-full max-w-xl mx-auto' src={authImg} alt='signup' />
			</div>

			{/* form */}
			<div className='w-full lg:w-1/2'>
				<form onSubmit={handleSubmit(onSubmit)} className='w-full p-3 space-y-3 max-w-md mx-auto'>
					<span className='text-2xl font-bold text-gray-900 uppercase text-center block mb-3'>Log In now</span>
					<input
						type='email'
						placeholder='Email Address'
						className='input input-bordered w-full mx-auto block'
						{...register('email', { required: true })}
					/>
					{errors.email?.type === 'required' && (
						<p className='mt-2 ml-1 text-red-600 text-xs' role='alert'>
							Email is required!
						</p>
					)}
					{/* password */}
					<div className='relative'>
						<input
							type={showPass}
							placeholder='Password'
							className='input input-bordered w-full'
							{...register('password', {
								required: true
							})}
						/>
						{showPass === 'password' && (
							<FaEye
								onClick={() => setShowPass('text')}
								className='absolute top-4 right-3 active:scale-95 opacity-90'
								size={16}
							/>
						)}
						{showPass === 'text' && (
							<FaEyeSlash
								onClick={() => setShowPass('password')}
								className='absolute top-4 right-3 active:scale-95 opacity-90'
								size={16}
							/>
						)}
					</div>
					{errors.password?.type === 'required' && (
						<p className='mt-2 ml-1 text-red-600 text-xs' role='alert'>
							Password is required
						</p>
					)}
					{error && <p className='mt-2 ml-1 text-red-600 text-xs'>{error}</p>}
					<button type='submit' className='btn btn-block bg-[#8de4af] hover:bg-[#54cc82]'>
						login
					</button>
					<p className='ml-3 text-sm'>
						New Here?
						<Link className='underline mx-2' to='/signup'>
							Sign Up
						</Link>
					</p>
				</form>
				<GoogleLogin />
			</div>
		</div>
	);
};

export default Login;
