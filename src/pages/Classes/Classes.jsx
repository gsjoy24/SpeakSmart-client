import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import bgImg from '../../assets/classes.jpg';
import SectionHeading from '../../components/SectionHeading';
import ClassCard from './ClassCard';
import { useEffect } from 'react';

const Classes = () => {
	useEffect(() => {
		// scroll to top of page
		window.scrollTo(0, 0);
		document.title = 'Classes | SpeakSmart';
	}, []);

	const { data: approvedClasses = [] } = useQuery({
		queryKey: ['approvedClasses'],
		queryFn: async () => {
			const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/classes?status=approved`);
			return res.data;
		}
	});

	return (
		<div>
			<div className='relative '>
				<img className='h-44 md:h-72 w-full object-cover blur-sm' src={bgImg} alt='instructors' />
				<h1
					className='text-4xl sm:text-6xl font-bold absolute top-1/2 -translate-y-1/2 left-10 md:left-20 text-[#8DE4AF] uppercase'
					style={{ textShadow: ' 2px 2px 10px black' }}>
					Classes
				</h1>
			</div>
			<SectionHeading
				heading='Master the Art of Language with our Dynamic Classes'
				subHeading='Immerse Yourself in a World of Linguistic Proficiency and Cultural Fluency'
			/>

			<div className='grid grid-cols-1  md:grid-cols-1 gap-12 py-12 mx-4 md:mx-12'>
				{approvedClasses.map((singleClass) => (
					<ClassCard key={singleClass._id} singleClass={singleClass} />
				))}
			</div>
		</div>
	);
};

export default Classes;
