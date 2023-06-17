import { useContext } from 'react';
import { BsGlobeEuropeAfrica } from 'react-icons/bs';
import { FaUserTie, FaCalendarCheck, FaClock, FaDollarSign, FaCheckDouble, FaEnvelope } from 'react-icons/fa';
import { MdLocationOn, MdChair } from 'react-icons/md';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import { Fade } from 'react-awesome-reveal';

const ClassCard = ({ singleClass }) => {
	const {
		className,
		image,
		description,
		requirements,
		instructor,
		orientation,
		duration,
		platform,
		price,
		availableSeats,
		instructorEmail
	} = singleClass;

	const { user, role } = useContext(AuthContext);
	const [axiosSecure] = useAxiosSecure();
	const navigate = useNavigate();

	const selectClass = () => {
		if (!user && !user?.email) {
			navigate('/login');
			Swal.fire({
				icon: 'warning',
				title: 'Please log in to select any classes!',
				showConfirmButton: false,
				timer: 2000
			});
			return;
		}
		const classInfo = {
			student: user?.email,
			classId: singleClass?._id,
			className,
			image,
			price,
			instructor,
			instructorEmail
		};
		axiosSecure.post('/select-class', classInfo).then((res) => {
			if (res.data.insertedId) {
				toast.success('Class Selected');
			}
		});
	};
	return (
		<Fade>
			<div
				className={`card lg:card-side shadow-xl mx-auto duration-150 hover:bg-[#45ff455d] group first-line:border  ${
					!singleClass?.availableSeats && 'bg-red-200 hover:bg-red-300'
				}`}>
				<figure>
					<img
						className='group-hover:scale-105 duration-150 lg:h-[250px] lg:pl-8 w-full object-cover border-b'
						src={image}
						alt={className}
					/>
				</figure>
				<div className='card-body space-y-2'>
					<h2 className='card-title mb-2'>
						<BsGlobeEuropeAfrica size={24} className='mr-2' /> {className}
					</h2>
					<p>{description}</p>
					<p className='flex items-center gap-3 mt-4'>
						<FaCheckDouble size={20} />
						<span>
							<span className='font-bold'>Requirements</span> : {requirements}
						</span>
					</p>
					<div className='flex flex-col md:flex-row gap-3'>
						<p className='flex items-center gap-3'>
							<FaUserTie size={20} />
							<span>
								<span className='font-bold'>Instructor</span> : {instructor}
							</span>
						</p>
						<p className='flex items-center gap-3'>
							<FaEnvelope size={20} />
							<span>
								<span className='font-bold'>Email</span> : {instructorEmail}
							</span>
						</p>
					</div>

					<div className='flex flex-col md:flex-row gap-3'>
						<p className='flex items-center gap-3'>
							<FaClock size={20} />
							<span>
								<span className='font-bold'>Duration</span> : {duration}
							</span>
						</p>
						<p className='flex items-center gap-3'>
							<MdLocationOn size={24} />
							<span>
								<span className='font-bold'>Platform</span> : {platform}
							</span>
						</p>
					</div>

					<div className='flex flex-col md:flex-row gap-3'>
						<p className='flex items-center gap-3'>
							<MdChair size={23} />
							<span>
								<span className='font-bold'>Available Seats </span>: {availableSeats}
							</span>
						</p>
						<p className='flex items-center gap-3'>
							<FaDollarSign size={20} />
							<span>
								<span className='font-bold'>Price</span> : {price}
							</span>
						</p>
					</div>
					<p className='flex items-center gap-3'>
						<FaCalendarCheck size={20} />
						<span>
							<span className='font-bold'>Orientation</span>: {orientation}
						</span>
					</p>
				</div>
				<button
					onClick={selectClass}
					disabled={!availableSeats || role === 'admin' || role === 'instructor'}
					className='btn m-3 bg-[#8de4af] hover:bg-[#62dc91]'>
					select
				</button>
			</div>
		</Fade>
	);
};

export default ClassCard;
