import { Link } from 'react-router-dom';
import empty from '../assets/empty.jpg';

const Empty = ({ title, path }) => {
	return (
		<div className='w-full h-[100vh] flex flex-col justify-center items-center mx-4'>
			<h2 className='text-4xl font-bold'>No data Found!</h2>
			<img className='max-w-lg px-20 my-5' src={empty} alt='no data found' />
			<Link to={path} className='btn bg-[#8de4af] dark:bg-gray-800 px-12'>
				{title}
			</Link>
		</div>
	);
};

export default Empty;
