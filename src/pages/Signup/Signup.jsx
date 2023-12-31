import { Link, useNavigate } from 'react-router-dom';
import authImg from '../../assets/authImg.svg';
import { useForm } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import GoogleLogin from '../../components/GoogleLogin';
import { toast } from 'react-hot-toast';
import { saveUser } from '../../apis/auth';
import { GiSpinningBlades } from 'react-icons/gi';
import { Bounce } from 'react-awesome-reveal';

const Signup = () => {
	useEffect(() => {
		// scroll to top of page
		window.scrollTo(0, 0);
		document.title = 'Signup | SpeakSmart';
	}, []);

	const { createUser, updateUserProfile } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [passErr, setPassErr] = useState('');
	const [genderErr, setGenderErr] = useState('');
	const [showPass, setShowPass] = useState('password');
	const [showConfirmPass, setShowConfirmPass] = useState('password');
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const onSubmit = (formData) => {
		setPassErr('');
		setGenderErr('');
		setError('');

		if (formData.password !== formData.confirm_password) {
			setPassErr('Password does not match!');
			return;
		} else if (formData.gender === 'default') {
			setGenderErr('Please select your gender!');
			return;
		}
		setLoading(true);
		createUser(formData.email, formData.password)
			.then((data) => {
				updateUserProfile(formData.name, formData.photo_url).then(() => {
					console.log('profile updated');
					saveUser(data.user);
				});
				navigate('/');
				toast.success('Successfully logged in!');
				setLoading(false);
			})
			.catch((err) => {
				console.log(err.message);
				setError(err.message);
				setLoading(false);
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
					<span className='text-2xl font-bold text-gray-900 dark:text-gray-300  uppercase text-center block mb-3'>sign up now</span>
					<input
						type='text'
						placeholder='Full Name'
						className='input input-bordered w-full mx-auto block'
						{...register('name', { required: true })}
					/>
					{errors.name?.type === 'required' && (
						<p className='mt-2 ml-1 text-red-600 text-xs' role='alert'>
							Name is required!
						</p>
					)}
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
					<input
						type='text'
						placeholder='Photo URL'
						className='input input-bordered w-full mx-auto block'
						{...register('photo_url', { required: true })}
					/>
					{errors.photo_url?.type === 'required' && (
						<p className='mt-2 ml-1 text-red-600 text-xs' role='alert'>
							Photo URL is required!
						</p>
					)}
					{/* password */}
					<div className='flex gap-2 justify-center items-center'>
						<div className='relative'>
							<input
								type={showPass}
								placeholder='Password'
								className='input input-bordered'
								autoComplete="on"
								{...register('password', {
									required: true,
									minLength: 6,
									pattern: /(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[#?!@$%^&*\-_])/
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
						<div className='relative'>
							<input
								type={showConfirmPass}
								placeholder='Confirm Password'
								className='input input-bordered'
								autoComplete="on"
								{...register('confirm_password')}
							/>
							{showConfirmPass === 'password' && (
								<FaEye
									onClick={() => setShowConfirmPass('text')}
									className='absolute top-4 right-3 active:scale-95 opacity-90'
									size={16}
								/>
							)}
							{showConfirmPass === 'text' && (
								<FaEyeSlash
									onClick={() => setShowConfirmPass('password')}
									className='absolute top-4 right-3 active:scale-95 opacity-90'
									size={16}
								/>
							)}
						</div>
					</div>
					{errors.password?.type === 'required' && (
						<p className='mt-2 ml-1 text-red-600 text-xs' role='alert'>
							Password is required
						</p>
					)}
					{errors.password?.type === 'pattern' && (
						<p className='mt-2 ml-1 text-red-600 text-xs' role='alert'>
							Password must have one number, one uppercase and one lowercase character, also one special character!
						</p>
					)}
					{errors.password?.type === 'minLength' && (
						<p className='mt-2 ml-1 text-red-600 text-xs' role='alert'>
							Password must have at least 6 characters!
						</p>
					)}
					{passErr && <p className='mt-2 ml-1 text-red-600 text-xs'>{passErr}</p>}
					{/* gender and phone number */}
					<div className='flex gap-3 justify-center items-baseline'>
						<div className='w-[calc(50%-3px)]'>
							<select
								{...register('gender', { required: true })}
								defaultValue='default'
								className={`select select-bordered w-full mx-auto block`}>
								<option disabled value='default'>
									Gender
								</option>
								<option value='Male'>Male</option>
								<option value='Female'>Female</option>
							</select>
							{genderErr && <p className='mt-2 ml-1 text-red-600 text-xs'>{genderErr}</p>}
						</div>
						<div>
							<input
								type='tel'
								placeholder='Phone Number'
								className='input input-bordered mx-auto block'
								{...register('phone', { required: true })}
							/>
							{errors.phone?.type === 'required' && (
								<p className='mt-2 ml-1 text-red-600 text-xs' role='alert'>
									Phone is required
								</p>
							)}
						</div>
					</div>
					<input
						type='text'
						placeholder='Home Address'
						className='input input-bordered w-full mx-auto block'
						{...register('address', { required: true })}
					/>
					{errors.address?.type === 'required' && (
						<p className='mt-2 ml-1 text-red-600 text-xs' role='alert'>
							Address is required
						</p>
					)}
					{error && <p className='mt-2 ml-1 text-red-600 text-xs'>{error}</p>}
					{loading ? (
						<button
							type='button'
							className='btn btn-block bg-[#8de4af] dark:bg-gray-700 flex justify-center items-center'>
							<GiSpinningBlades size={25} className='animate-spin text-slate-900 dark:text-white' />
						</button>
					) : (
						<button
							type='submit'
							className='btn btn-block  bg-[#8de4af] dark:bg-gray-700 hover:bg-[#54cc82] dark:hover:bg-gray-800 flex justify-center items-center'>
							sign up
						</button>
					)}
					<p className='ml-3 text-sm'>
						Already have an account?{' '}
						<Link className='underline ml-2' to='/login'>
							Login Here
						</Link>
					</p>
				</form>
				<GoogleLogin setLoading={setLoading} setError={setError}/>
			</div>
		</div>
	);
};

export default Signup;
