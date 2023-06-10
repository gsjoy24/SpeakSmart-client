const DisplayCard = ({ SingleClass }) => {
	return (
		<div className={`card max-w-[320px] ${!SingleClass?.availableSlots && 'bg-red-200'} shadow-xl mx-auto`}>
			<figure>
				<img src={SingleClass?.image} alt={SingleClass?.className} />
			</figure>
			<div className='card-body text-sm'>
				<h2 className='card-title'>{SingleClass?.className}</h2>
				<p>Instructor: {SingleClass.instructor}</p>
				<p>Price: $ {SingleClass.price}</p>
				<p>Enrolled Students: {SingleClass.enrolledStudents}</p>
				<p>Seats available: {SingleClass?.availableSlots}</p>
			</div>
		</div>
	);
};

export default DisplayCard;
