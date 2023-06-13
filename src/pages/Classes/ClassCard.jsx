import { useContext } from 'react';
import { BsGlobeEuropeAfrica } from 'react-icons/bs';
import { FaUserTie, FaCalendarCheck, FaClock, FaDollarSign, FaCheckDouble } from 'react-icons/fa';
import { MdLocationOn, MdChair } from 'react-icons/md';
import { AuthContext } from '../../Providers/AuthProvider';

const ClassCard = ({ singleClass }) => {
	const { role } = useContext(AuthContext);

	return (
		<div
			className={`card shadow-xl max-w-lg mx-auto hover:scale-105 duration-150 hover:bg-[#45ff455d] group first-line:border  ${
				!singleClass?.availableSlots && 'bg-red-200 hover:bg-red-300'
			}`}>
			<figure>
				<img
					className='group-hover:scale-105 duration-150 h-56 w-full object-cover border-b'
					src={singleClass?.image}
					alt={singleClass?.className}
				/>
			</figure>
			<div className='card-body'>
				<h2 className='card-title mb-2'>
					<BsGlobeEuropeAfrica size={24} className='mr-2' /> {singleClass?.className}
				</h2>
				<p>{singleClass?.description}</p>
				<p className='flex items-center gap-3 mt-4'>
					<FaCheckDouble size={20} />
					<span>
						<span className='font-bold'>Requirements</span> : {singleClass?.requirements}
					</span>
				</p>
				<div className='my-2 space-y-4'>
					<p className='flex items-center gap-3'>
						<FaUserTie size={20} />
						<span>
							<span className='font-bold'>Instructor</span> : {singleClass?.instructor}
						</span>
					</p>

					<p className='flex items-center gap-3'>
						<FaCalendarCheck size={20} />
						<span>
							<span className='font-bold'>Orientation</span>: {singleClass?.orientation}
						</span>
					</p>
				</div>

				<div className='flex flex-col gap-4 lg:flex-row'>
					<p className='flex items-center gap-3'>
						<FaClock size={20} />
						<span>
							<span className='font-bold'>Duration</span> : {singleClass?.duration}
						</span>
					</p>
					<p className='flex items-center gap-3'>
						<MdLocationOn size={22} />
						<span>
							<span className='font-bold'>Platform</span> : {singleClass?.location}
						</span>
					</p>
				</div>

				<div className='flex flex-col gap-4 lg:flex-row'>
					<p className='flex items-center gap-3'>
						<MdChair size={20} />
						<span>
							<span className='font-bold'>Available Seats </span>: {singleClass?.availableSlots}
						</span>
					</p>
					<p className='flex items-center gap-3'>
						<FaDollarSign size={20} />
						<span>
							<span className='font-bold'>Price</span> : {singleClass?.price}
						</span>
					</p>
				</div>
			</div>
			<button
				disabled={!singleClass?.availableSlots || role === 'admin' || role === 'instructor'}
				className='btn m-3 bg-[#8de4af] hover:bg-[#62dc91]'>
				select
			</button>
		</div>
	);
};

export default ClassCard;
