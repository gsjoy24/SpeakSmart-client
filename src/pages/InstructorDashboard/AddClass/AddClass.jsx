import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import SectionHeading from '../../../components/SectionHeading';
import { AuthContext } from '../../../Providers/AuthProvider';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';
import { GiSpinningBlades } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

const AddClass = () => {
	const { user } = useContext(AuthContext);
	const [axiosSecure] = useAxiosSecure();
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		// scroll to top of page
		window.scrollTo(0, 0);
		document.title = 'Add a Class | SpeakSmart';
	}, []);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const onSubmit = (formData) => {
		setLoading(true);
		const { price, availableSeats, ...classData } = formData;
		const newClass = {
			...classData,
			instructor: user?.displayName,
			instructorEmail: user?.email,
			availableSeats: parseFloat(formData?.availableSeats),
			price: parseFloat(formData?.price),
			enrolledStudents: 0,
			status: 'pending'
		};

		if (user && user?.email) {
			axiosSecure.post('/classes', newClass).then((res) => {
				if (res.data.insertedId) {
					toast.success('Class Added successfully!');
					setLoading(false);
					navigate('/dashboard/my-classes');
				}
			});
		}
	};
	return (
		<div>
			<SectionHeading heading='Add a Class' />
			<form onSubmit={handleSubmit(onSubmit)} className='w-full p-3 space-y-3 max-w-3xl mx-auto mb-12'>
				{/* instructor info */}
				<div className='flex flex-col sm:flex-row gap-4 align-baseline'>
					{/* 1 */}
					<div className='w-full'>
						<div className='text-sm ml-2 mb-3'>Instructor Name</div>
						<input
							type='text'
							defaultValue={user?.displayName}
							disabled
							className='input input-bordered w-full mx-auto block'
						/>
					</div>
					{/* 2 */}
					<div className='w-full'>
						<div className='text-sm ml-2 mb-3'>Instructor Email</div>
						<input
							type='email'
							defaultValue={user?.email}
							disabled
							className='input input-bordered w-full mx-auto block'
						/>
					</div>
				</div>

				<div className='flex flex-col sm:flex-row gap-4 align-baseline'>
					{/* class name */}
					<div className='w-full'>
						<div className='text-sm ml-2 mb-3'>Class Name</div>
						<input
							type='text'
							placeholder='Class Name'
							className='input input-bordered w-full mx-auto block'
							{...register('className', { required: true })}
						/>
						{errors.className?.type === 'required' && (
							<p className='mt-2 ml-1 text-red-600 text-xs' role='alert'>
								Class Name is required!
							</p>
						)}
					</div>

					{/* Image url */}
					<div className='w-full'>
						<div className='text-sm ml-2 mb-3'>Image URL</div>
						<input
							type='text'
							placeholder='Image URL'
							className='input input-bordered w-full mx-auto block'
							{...register('image', { required: true })}
						/>
						{errors.image?.type === 'required' && (
							<p className='mt-2 ml-1 text-red-600 text-xs' role='alert'>
								Image URL is required!
							</p>
						)}
					</div>
				</div>

				{/* duration and platform */}
				<div className='flex gap-4 align-baseline'>
					{/* 1 */}
					<div className='w-full'>
						<div className='text-sm ml-2 mb-3'>Platform</div>
						<input
							type='text'
							placeholder='Platform'
							className='input input-bordered w-full mx-auto block'
							{...register('platform', { required: true })}
						/>
						{errors.platform?.type === 'required' && (
							<p className='mt-2 ml-1 text-red-600 text-xs' role='alert'>
								Platform is required!
							</p>
						)}
					</div>
					{/* 2 */}
					<div className='w-full'>
						<div className='text-sm ml-2 mb-3'>Duration</div>
						<input
							type='text'
							placeholder='Duration per day (60 minutes)'
							className='input input-bordered w-full mx-auto block'
							{...register('duration', { required: true })}
						/>
						{errors.duration?.type === 'required' && (
							<p className='mt-2 ml-1 text-red-600 text-xs' role='alert'>
								Duration is required!
							</p>
						)}
					</div>
				</div>

				{/* orientation and price */}
				<div className='flex gap-4 align-baseline'>
					{/* 1 */}
					<div className='w-full'>
						<div className='text-sm ml-2 mb-3'>Orientation</div>
						<input
							type='text'
							placeholder='Orientation (dd/mm/yyyy)'
							className='input input-bordered w-full mx-auto block'
							{...register('orientation', { required: true })}
						/>
						{errors.orientation?.type === 'required' && (
							<p className='mt-2 ml-1 text-red-600 text-xs' role='alert'>
								Orientation is required!
							</p>
						)}
					</div>
					{/* 2 */}
					<div className='w-full'>
						<div className='text-sm ml-2 mb-3'>Price</div>
						<input
							type='number'
							placeholder='Price'
							className='input input-bordered w-full mx-auto block'
							{...register('price', { required: true })}
						/>
						{errors.price?.type === 'required' && (
							<p className='mt-2 ml-1 text-red-600 text-xs' role='alert'>
								Price is required!
							</p>
						)}
					</div>
				</div>

				<div className='w-full'>
					<div className='text-sm ml-2 mb-3'>Available Seats</div>
					<input
						type='number'
						placeholder='Available Seats'
						className='input input-bordered w-full mx-auto block'
						{...register('availableSeats', { required: true })}
					/>
					{errors.availableSeats?.type === 'required' && (
						<p className='mt-2 ml-1 text-red-600 text-xs' role='alert'>
							Available Seats is required!
						</p>
					)}
				</div>

				<div className='w-full'>
					<div className='text-sm ml-2 mb-3'>Requirements</div>
					<textarea
						type='number'
						placeholder='Requirements'
						className='input input-bordered w-full mx-auto block pt-2'
						{...register('requirements', { required: true })}
					/>
					{errors.requirements?.type === 'required' && (
						<p className='mt-2 ml-1 text-red-600 text-xs' role='alert'>
							Requirements is required!
						</p>
					)}
				</div>

				<div className='w-full'>
					<div className='text-sm ml-2 mb-3'>Description</div>
					<textarea
						type='number'
						placeholder='Description'
						className='input input-bordered w-full mx-auto block pt-2'
						{...register('description', { required: true })}
					/>
					{errors.description?.type === 'required' && (
						<p className='mt-2 ml-1 text-red-600 text-xs' role='alert'>
							Description is required!
						</p>
					)}
				</div>

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
						Add
					</button>
				)}
			</form>
		</div>
	);
};

export default AddClass;
