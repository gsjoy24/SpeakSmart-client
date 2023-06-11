const DisplayCard = ({ SingleClass }) => {
	return (
		<div
			className={`card max-w-[320px] hover:scale-105 duration-150 hover:bg-[#45ff455d] ${
				!SingleClass?.availableSlots && 'bg-red-200 hover:bg-red-300'
			} shadow-xl mx-auto`}>
			<figure>
				<img className="h-48 w-full object-cover" src={SingleClass?.image} alt={SingleClass?.className} />
			</figure>
			<div className='card-body text-sm'>
				<h2 className='card-title'>{SingleClass?.className}</h2>
				<p>Enrolled Students: {SingleClass.enrolledStudents}</p>
				<p>Seats available: {SingleClass?.availableSlots}</p>
			</div>
		</div>
	);
};

export default DisplayCard;
