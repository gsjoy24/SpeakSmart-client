import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import DisplayCard from './DisplayCard';
import SectionHeading from '../../../components/SectionHeading';

const PopularClasses = () => {
	const { data: popularClasses = [] } = useQuery({
		queryKey: ['popular-classes'],
		queryFn: async () => {
			const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/popular-classes`);
			return res.data;
		}
	});

	return (
		<div className='py-8 mx-5'>
			<SectionHeading
				heading='Explore Our Popular Courses!'
				subHeading=' Discover the Most Enrolled Language Classes and Enhance Your Language Skills!'
			/>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12'>
				{popularClasses.map((SingleClass) => (
					<DisplayCard key={SingleClass?._id} SingleClass={SingleClass} />
				))}
			</div>
		</div>
	);
};

export default PopularClasses;
