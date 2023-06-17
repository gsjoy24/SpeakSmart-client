import { Slide } from 'react-awesome-reveal';
const SectionHeading = ({ heading, subHeading }) => {
	return (
		<Slide>
			<div className=' max-w-lg text-center mx-auto space-y-5 my-12'>
				<h2 className='text-2xl sm:text-4xl font-bold text-gray-800'>{heading}</h2>
				<p className='text-gray-500'>{subHeading}</p>
			</div>
		</Slide>
	);
};

export default SectionHeading;
