import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import InstructorCard from './InstructorCard';

const PopularInstructors = () => {
	const { data: popularInstructors = [] } = useQuery({
		queryKey: ['popular-instructors'],
		queryFn: async () => {
			const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/popular-instructors`);
			return res.data;
		}
	});

	return (
		<div className='my-16 mx-5'>
			<div className=' max-w-lg text-center mx-auto space-y-5'>
				<h2 className='text-2xl sm:text-4xl font-bold text-gray-800'>
					Meet Our Popular Instructors: Learn from the Best!
				</h2>
				<p className='text-gray-500'>
					Explore a Diverse Team of Experienced Instructors and Expand Your Language Skills!
				</p>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12'>
				{popularInstructors.map((instructor) => (
					<InstructorCard key={instructor?._id} instructor={instructor} />
				))}
			</div>
		</div>
	);
};

export default PopularInstructors;
