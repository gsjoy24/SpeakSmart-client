import { Link } from 'react-router-dom';
import errImg from '../assets/error.svg';
const ErrorPage = () => {
	return (
		<div className='flex flex-col justify-center items-center h-[100vh]'>
			<img className='w-full max-w-lg' src={errImg} alt='error' />
			<Link to='/' className='btn bg-[#8de4af] hover:bg-[#41b86f]  border-0'>
				HOME
			</Link>
		</div>
	);
};

export default ErrorPage;
