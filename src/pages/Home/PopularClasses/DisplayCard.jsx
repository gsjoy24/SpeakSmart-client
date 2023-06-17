import { TbArmchair } from 'react-icons/tb';
import { BsGlobeEuropeAfrica } from 'react-icons/bs';
import { Fade } from 'react-awesome-reveal';
const DisplayCard = ({ SingleClass }) => {
	return (
		<Fade>
			<div
				className={`card max-w-[320px] h-full hover:scale-105 duration-150 hover:bg-[#45ff455d] ${
					!SingleClass?.availableSeats && 'bg-red-200 hover:bg-red-300'
				} shadow-xl mx-auto`}>
				<figure>
					<img className='h-48 w-full object-cover' src={SingleClass?.image} alt={SingleClass?.className} />
				</figure>
				<div className='card-body text-sm'>
					<h2 className='card-title mb-2'>
						<BsGlobeEuropeAfrica size={24} className='mr-2' /> {SingleClass?.className}
					</h2>
					<p className='flex items-center gap-3'>
						{SingleClass?.availableSeats === 0 ? (
							<>
								<TbArmchair size={24} /> Apologies, all seats are currently occupied.
							</>
						) : SingleClass?.availableSeats === 1 ? (
							<>
								<TbArmchair size={24} /> only 1 seat is available
							</>
						) : (
							<>
								<TbArmchair size={24} /> only {SingleClass?.availableSeats} seats are available
							</>
						)}
					</p>
				</div>
			</div>
		</Fade>
	);
};

export default DisplayCard;
