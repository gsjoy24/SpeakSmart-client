import { Link } from 'react-router-dom';
import authImg from '../../assets/authImg.svg';
import { useForm } from 'react-hook-form';
const Signup = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const onSubmit = (data) => console.log(data);
	return (
		<div className='md:flex justify-center items-center py-12'>
			<div className='w-full md:w-1/2'>
				<img className='w-full max-w-xl' src={authImg} alt='signup' />
			</div>

			{/* form */}
			<div className='w-full md:w-1/2'>
				<form onSubmit={handleSubmit(onSubmit)} className='w-full p-3 space-y-3 max-w-md mx-auto'>
					<span className='text-2xl font-bold text-gray-900 uppercase text-center block mb-3'>sign up now</span>
					<input
						type='text'
						placeholder='Full Name'
						className='input input-bordered w-full mx-auto block'
						{...register('name')}
					/>
					<input
						type='email'
						placeholder='Email Address'
						className='input input-bordered w-full mx-auto block'
						{...register('email')}
					/>
					<input
						type='text'
						placeholder='Photo URL'
						className='input input-bordered w-full mx-auto block'
						{...register('photo-url')}
					/>
					{/* password */}
					<div className='flex gap-2 justify-center items-center'>
						<input type='password' placeholder='Password' className='input input-bordered' {...register('password')} />
						<input
							type='password'
							placeholder='Confirm Password'
							className='input input-bordered'
							{...register('confirm-password')}
						/>
					</div>
					{/* gender and phone number */}
					<div className='flex gap-3 justify-center items-center'>
						<select
							{...register('gender')}
							defaultValue='default'
							className={`select select-bordered w-[calc(50%-2px)] mx-auto block`}>
							<option disabled value='default'>
								Gender
							</option>
							<option value='Male'>Male</option>
							<option value='Female'>Female</option>
						</select>
						<input
							type='tel'
							placeholder='Phone Number'
							className='input input-bordered mx-auto block'
							{...register('phone')}
						/>
					</div>
					<input
						type='text'
						placeholder='Home Address'
						className='input input-bordered w-full mx-auto block'
						{...register('address')}
					/>

					<button type='submit' className='btn btn-block bg-[#8de4af] hover:bg-[#54cc82]'>
						Sign up
					</button>
					<p className='ml-3 text-sm'>
						Already have an account?{' '}
						<Link className='underline' to='/login'>
							Login
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Signup;
