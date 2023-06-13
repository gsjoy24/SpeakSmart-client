const InstructorCardPreview = ({ instructor }) => {
	return (
		<div className={`card max-w-[320px] shadow-xl mx-auto hover:scale-105 duration-150 hover:bg-[#45ff455d] group`}>
			<figure>
				<img className='group-hover:scale-105 duration-150' src={instructor?.photoURL} alt={instructor?.name} />
			</figure>
			<div className='p-2'>
				<h2 className='text-center text-xl font-bold'> {instructor?.name}</h2>
			</div>
		</div>
	);
};

export default InstructorCardPreview;