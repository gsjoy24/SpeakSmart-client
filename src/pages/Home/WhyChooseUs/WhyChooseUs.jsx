import { FaLaptopHouse, FaPuzzlePiece } from 'react-icons/fa';
import { GiLifeSupport, GiTeacher } from 'react-icons/gi';
import SectionHeading from '../../../components/SectionHeading';
import {Zoom,Roll } from 'react-awesome-reveal';
const WhyChooseUs = () => {
	return (
		<div className='py-8 mx-4 md:mx-12'>
			<SectionHeading heading='Why Choose Us?' subHeading='A choice that makes the difference.' />

			<div className='grid grid-cols-1 lg:grid-cols-2 mt-16 gap-8'>
				{/* 1 */}
				<Roll direction='left' delay='50'>
					<div className='mx-auto h-full w-full px-6 py-12 text-center shadow-lg rounded-3xl max-w-lg dark:text-gray-400 bg-[#4cec4c9f] dark:bg-[#252b31]'>
						<GiTeacher size={50} className='mx-auto' />
						<p className='text-xl font-bold my-4'>Highly Skilled Instructors</p>
						<p>
							Benefit from our team of knowledgeable and experienced instructors who are committed to helping you
							achieve your language learning goals.
						</p>
					</div>
				</Roll>
				{/* 2 */}
				<Roll direction='right' delay='50'>
					<div className='mx-auto h-full w-full px-6 py-12 text-center shadow-lg rounded-3xl max-w-lg dark:text-gray-400 bg-[#4cec4c9f] dark:bg-[#252b31]'>
					<FaPuzzlePiece size={50} className='mx-auto' />
					<p className='text-xl font-bold  my-4'>Well-Structured Curriculum</p>
					<p>
						Gain proficiency in all language aspects, including grammar, vocabulary, pronunciation, and conversation,
						through our thoughtfully designed curriculum that ensures a comprehensive and engaging learning experience.
					</p>
				</div>
				</Roll>
				
				{/* 3 */}
				<Zoom direction='down' delay='50'>
				<div className='mx-auto h-full w-full px-6 py-12 text-center shadow-lg rounded-3xl max-w-lg dark:text-gray-400 bg-[#4cec4c9f] dark:bg-[#252b31]'>
					<FaLaptopHouse size={50} className='mx-auto' />
					<p className='text-xl font-bold  my-4'>Convenient Learning Options</p>
					<p>
						Enjoy the flexibility of choosing from a variety of learning options, including both in-person and online
						classes, to fit your schedule and learning preferences, ensuring a convenient and personalized learning
						journey.
					</p>
					</div>
				</Zoom>
				{/* 4 */}
				<Zoom direction='right' delay='20'>
					<div className='mx-auto px-6 py-12 text-center shadow-lg rounded-3xl max-w-lg dark:text-gray-400 bg-[#4cec4c9f] dark:bg-[#252b31]'>
						<GiLifeSupport size={50} className='mx-auto' />
						<p className='text-xl font-bold  my-4'>Supportive Learning Environment</p>
						<p>
							Experience a supportive and inclusive learning environment where you can feel comfortable practicing and
							improving your language skills. Our instructors create a welcoming atmosphere that encourages
							participation and fosters a sense of community among learners
						</p>
					</div>
				</Zoom>
			</div>
		</div>
	);
};

export default WhyChooseUs;
