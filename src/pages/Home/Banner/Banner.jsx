import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const Banner = () => {
	return (
		<div className='relative'>
			<img className='h-[90vh] w-full object-cover blur-sm' src='https://i.ibb.co/tYW2Ycm/people.jpg' alt='banner' />
			<div className='bg-gray-800 w-full h-full absolute top-0 bg-opacity-50  text-center flex justify-center items-center'>
				<Fade>
					<div className='max-w-[790px] mx-auto px-5 space-y-5'>
						<p className='text-4xl md:text-5xl font-bold leading-tight md:leading-tight text-[#8DE4AF] uppercase'>
							Elevate Your Communication Skills, Unleash Your Potential!
						</p>
						<p className='text-lg text-white'>
							❝SpeakSmart: Where Language Proficiency Opens Limitless Possibilities &quot❞
						</p>
						<Link to='/classes' className='btn'>
							Our Classes
						</Link>
					</div>
				</Fade>
			</div>
		</div>
	);
};

export default Banner;
