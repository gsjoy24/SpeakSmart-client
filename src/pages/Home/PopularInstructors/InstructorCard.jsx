const InstructorCard = ({ instructor }) => {
	console.log(instructor);
	return (
		<div className={`card max-w-[320px] shadow-xl mx-auto`}>
			<figure>
				<img src={instructor?.photoURL} alt={instructor?.name} />
			</figure>
			<div className='card-body text-sm'>
				<h2 className='card-title'>Name: {instructor?.name}</h2>
				<p>Email: {instructor?.email}</p>
				<p>Classes: {instructor?.classes}</p>
			</div>
		</div>
	);
};

export default InstructorCard;
