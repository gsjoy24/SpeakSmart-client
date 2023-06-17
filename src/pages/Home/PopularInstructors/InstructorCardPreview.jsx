import { Fade } from 'react-awesome-reveal';
const InstructorCardPreview = ({ instructor }) => {
	return (
		<Fade>
			<div
				className={`card max-w-[320px] h-full shadow-xl mx-auto hover:scale-105 duration-150 hover:bg-[#45ff455d] group`}>
				<figure>
					<img className='group-hover:scale-105 duration-150' src={instructor?.photoURL} alt={instructor?.name} />
				</figure>
				<div className='p-2'>
					<h2 className='text-center text-xl font-bold'> {instructor?.name}</h2>
				</div>
			</div>
		</Fade>
	);
};

export default InstructorCardPreview;
