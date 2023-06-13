import { FaLaptopHouse, FaPuzzlePiece } from 'react-icons/fa';
import { GiLifeSupport, GiTeacher } from 'react-icons/gi';
import SectionHeading from '../../../components/SectionHeading';
const WhyChooseUs = () => {
	return (
		<div className='py-8 mx-4 md:mx-12'>
			<SectionHeading heading='Why Choose Us?' subHeading='A choice that makes the difference.' />

			<div className='grid grid-cols-1 lg:grid-cols-2 mt-16 gap-8'>
				{/* 1 */}
				<div className='mx-auto  px-6 py-12 text-center bg-[#bbffbb9f] shadow-lg rounded-3xl max-w-lg'>
					<GiTeacher size={50} className='mx-auto' />
					<p className='text-xl font-bold  my-4'>Highly Skilled Instructors</p>
					<p>
						Benefit from our team of knowledgeable and experienced instructors who are committed to helping you achieve
						your language learning goals.
					</p>
				</div>
				{/* 2 */}
				<div className='mx-auto  px-6 py-12 text-center bg-[#bbffbb9f] shadow-lg rounded-3xl max-w-lg'>
					<FaPuzzlePiece size={50} className='mx-auto' />
					<p className='text-xl font-bold  my-4'>Well-Structured Curriculum</p>
					<p>
						Gain proficiency in all language aspects, including grammar, vocabulary, pronunciation, and conversation,
						through our thoughtfully designed curriculum that ensures a comprehensive and engaging learning experience.
					</p>
				</div>
				{/* 3 */}
				<div className='mx-auto  px-6 py-12 text-center bg-[#bbffbb9f] shadow-lg rounded-3xl max-w-lg'>
					<FaLaptopHouse size={50} className='mx-auto' />
					<p className='text-xl font-bold  my-4'>Convenient Learning Options</p>
					<p>
						Enjoy the flexibility of choosing from a variety of learning options, including both in-person and online
						classes, to fit your schedule and learning preferences, ensuring a convenient and personalized learning
						journey.
					</p>
				</div>
				{/* 4 */}
				<div className='mx-auto px-6 py-12 text-center bg-[#bbffbb9f] shadow-lg rounded-3xl max-w-lg'>
					<GiLifeSupport size={50} className='mx-auto' />
					<p className='text-xl font-bold  my-4'>Supportive Learning Environment</p>
					<p>
						Experience a supportive and inclusive learning environment where you can feel comfortable practicing and
						improving your language skills. Our instructors create a welcoming atmosphere that encourages participation
						and fosters a sense of community among learners
					</p>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
