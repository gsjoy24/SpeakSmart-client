import { Link, useNavigate } from 'react-router-dom';
import authImg from '../../assets/authImg.svg';
import { useForm } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import GoogleLogin from '../../components/GoogleLogin';
import { toast } from 'react-hot-toast';
import { GiSpinningBlades } from 'react-icons/gi';
import { Bounce } from 'react-awesome-reveal';

const Login = () => {
	const [loading, setLoading] = useState(false);
	const { loginWithEmail } = useContext(AuthContext);
	const [error, setError] = useState('');
	const [showPass, setShowPass] = useState('password');

	const navigate = useNavigate();
	useEffect(() => {
		// scroll to top of page
		window.scrollTo(0, 0);
		document.title = 'Login | SpeakSmart';
	}, []);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const onSubmit = (formData) => {
		setLoading(true);
		loginWithEmail(formData.email, formData.password)
			.then((data) => {
				setLoading(false);
				console.log(data.user);
				navigate('/');
				toast.success('successfully logged in');
			})
			.catch((err) => {
				setLoading(false);
				console.log(err.message);
				setError(err.message);
			});
	};

	return (
		<div className='lg:flex justify-center h-full items-center py-12'>
			<Bounce className='w-full lg:w-1/2'>
				<img className='w-full max-w-xl mx-auto' src={authImg} alt='signup' />
			</Bounce>

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
								className='absolute top-4 right-3 active:scale-95 opacity-90 cursor-pointer'
								size={16}
							/>
						)}
						{showPass === 'text' && (
							<FaEyeSlash
								onClick={() => setShowPass('password')}
								className='absolute top-4 right-3 active:scale-95 opacity-90 cursor-pointer'
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
					{loading ? (
						<button
							type='button'
							className='btn btn-block bg-[#8de4af] hover:bg-[#54cc82] flex justify-center items-center'>
							<GiSpinningBlades size={25} className='animate-spin text-slate-900' />
						</button>
					) : (
						<button
							type='submit'
							className='btn btn-block bg-[#8de4af] hover:bg-[#54cc82] flex justify-center items-center'>
							login
						</button>
					)}
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
