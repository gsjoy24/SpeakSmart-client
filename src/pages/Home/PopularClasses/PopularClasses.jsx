import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import DisplayCard from './DisplayCard';

const PopularClasses = () => {
	const { data: popularClasses = [] } = useQuery({
		queryKey: ['popular-classes'],
		queryFn: async () => {
			const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/popular-classes`);
			return res.data;
		}
	});

	return (
		<div className='my-14 mx-5'>
			<div className=' max-w-lg text-center mx-auto space-y-5'>
				<h2 className='text-2xl sm:text-4xl font-bold text-gray-800'>Explore Our Popular Courses!</h2>
				<p className='text-gray-500'>Discover the Most Enrolled Language Classes and Enhance Your Language Skills!</p>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12'>
				{popularClasses.map((SingleClass) => (
					<DisplayCard key={SingleClass?._id} SingleClass={SingleClass} />
				))}
			</div>
		</div>
	);
};

export default PopularClasses;
