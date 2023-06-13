import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import bgImg from '../../assets/instructors.jpg';
import SectionHeading from '../../components/SectionHeading';
import InstructorCard from './InstructorCard';

const Instructors = () => {
	const { data: allInstructors = [] } = useQuery({
		queryKey: ['allInstructors'],
		queryFn: async () => {
			const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/instructors`);
			return res.data;
		}
	});

	console.log(allInstructors);
	return (
		<div>
			<div className='relative '>
				<img className='h-44 md:h-72 w-full object-cover blur-sm' src={bgImg} alt='instructors' />
				<h1
					className='text-4xl sm:text-6xl font-bold absolute top-1/2 -translate-y-1/2 left-10 md:left-20 text-[#8DE4AF] uppercase'
					style={{ textShadow: ' 2px 2px 10px black' }}>
					Instructors
				</h1>
			</div>
			<SectionHeading
				heading='Meet Our Expert Instructors'
				subHeading='Passionate Educators Dedicated to Your Success!'
			/>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 py-12 mx-12'>
				{allInstructors.map((instructor) => (
					<InstructorCard key={instructor._id} instructor={instructor} />
				))}
			</div>
		</div>
	);
};

export default Instructors;
