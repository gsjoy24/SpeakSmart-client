import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import InstructorCardPreview from './InstructorCardPreview';
import SectionHeading from '../../../components/SectionHeading';

const PopularInstructors = () => {
	const { data: popularInstructors = [] } = useQuery({
		queryKey: ['popular-instructors'],
		queryFn: async () => {
			const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/popular-instructors`);
			return res.data;
		}
	});

	return (
		<div className='py-8 mx-5'>
			<SectionHeading
				heading='Meet Our Popular Instructors: Learn from the Best!'
				subHeading='Explore a Diverse Team of Experienced Instructors and Expand Your Language Skills!'
			/>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12'>
				{popularInstructors.map((instructor) => (
					<InstructorCardPreview key={instructor?._id} instructor={instructor} />
				))}
			</div>
		</div>
	);
};

export default PopularInstructors;
