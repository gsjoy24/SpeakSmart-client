import { FaUserTie, FaEnvelope } from 'react-icons/fa';
import { Bounce } from 'react-awesome-reveal';

const InstructorCard = ({ instructor }) => {
	return (
		<div className='card max-w-[320px] shadow-xl mx-auto hover:scale-105 duration-150 hover:bg-[#45ff455d] dark:hover:bg-[#252b31] group first-line:border'>
			<figure>
				<Bounce>
					<img className='group-hover:scale-105 duration-150 h-72' src={instructor?.photoURL} alt={instructor?.name} />
				</Bounce>
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>
					<FaUserTie /> {instructor?.name}
				</h2>
				<p className='flex items-center gap-3'>
					<FaEnvelope size={20} /> {instructor?.email}
				</p>
			</div>
		</div>
	);
};

export default InstructorCard;
