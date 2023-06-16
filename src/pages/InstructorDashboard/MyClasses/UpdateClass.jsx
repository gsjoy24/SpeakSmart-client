import { useLoaderData, useNavigate } from 'react-router-dom';
import SectionHeading from '../../../components/SectionHeading';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Providers/AuthProvider';
import { GiSpinningBlades } from 'react-icons/gi';
import { toast } from 'react-hot-toast';

const UpdateClass = () => {
	const { user } = useContext(AuthContext);
	const { data: singleClass } = useLoaderData();
	const [axiosSecure] = useAxiosSecure();
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		// scroll to top of page
		window.scrollTo(0, 0);
		document.title = 'update | SpeakSmart';
	}, []);

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const onSubmit = (formData) => {
		setLoading(true);
		if (user && user?.email) {
			axiosSecure.put(`/classes/${singleClass?._id}`, formData).then((res) => {
				if (res.data.modifiedCount > 0) {
					toast.success('Class updated successfully!');
					setLoading(false);
					navigate('/dashboard/my-classes');
				}
			});
		}
	};
	return (
		<div>
			<SectionHeading heading={`Update ${singleClass?.className}`} />
			<form onSubmit={handleSubmit(onSubmit)} className='w-full p-3 space-y-3 max-w-3xl mx-auto mb-12'>
				<div className='flex flex-col sm:flex-row gap-4 align-baseline'>
					{/* class name */}
					<div className='w-full'>
						<div className='text-sm ml-2 mb-3'>Class Name</div>
						<input
							type='text'
							placeholder='Class Name'
							defaultValue={singleClass?.className}
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
							defaultValue={singleClass?.image}
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
							defaultValue={singleClass?.platform}
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
							defaultValue={singleClass?.duration}
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
							defaultValue={singleClass?.orientation}
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
							defaultValue={singleClass?.price}
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
						defaultValue={singleClass?.availableSeats}
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
						defaultValue={singleClass?.requirements}
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
						defaultValue={singleClass?.description}
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
						Update
					</button>
				)}
			</form>
		</div>
	);
};

export default UpdateClass;
