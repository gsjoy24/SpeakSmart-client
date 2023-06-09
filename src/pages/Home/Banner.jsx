import { Link } from 'react-router-dom';

const Banner = () => {
	return (
		<div className='relative'>
			<img className='h-[90vh] w-full object-cover blur-sm' src='https://i.ibb.co/GtXLxrj/banner.png' alt='banner' />
			<div className='bg-gray-800 w-full h-full absolute top-0 bg-opacity-50 text-white text-center flex justify-center items-center'>
				<div className='max-w-[700px] mx-auto px-2 space-y-5'>
					<p className='text-4xl md:text-6xl font-bold leading-tight'>Ignite Your Passion, Master Your Melodies!</p>
					<p className='text-xl'>
						Discover the Symphony Within: Unleash Your Musical Potential with Instrumental Classes
					</p>
					<Link to='/classes' className='btn'>
						Our Classes
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Banner;
