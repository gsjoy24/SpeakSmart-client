import { FaUserTie, FaEnvelope } from 'react-icons/fa';

const InstructorCard = ({ instructor }) => {
	return (
		<div className='card max-w-[320px] shadow-xl mx-auto hover:scale-105 duration-150 hover:bg-[#45ff455d] group first-line:border'>
			<figure>
				<img className='group-hover:scale-105 duration-150' src={instructor?.photoURL} alt={instructor?.name} />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>
					<FaUserTie /> {instructor?.name}
				</h2>
				<p className='flex items-center gap-3'>
					<FaEnvelope size={20} /> Email : {instructor?.email}
				</p>
			</div>
		</div>
	);
};

export default InstructorCard;
