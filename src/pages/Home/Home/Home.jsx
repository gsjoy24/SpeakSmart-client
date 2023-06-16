import { useEffect } from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import StudentRoute from '../../../Routes/StudentRoute/StudentRoute';

const Home = () => {
	useEffect(() => {
		// scroll to top of page
		window.scrollTo(0, 0);
		document.title = 'Home | SpeakSmart';
	}, []);
	return (
		<div>
			<Banner />
			<PopularClasses />
			<PopularInstructors />
			<WhyChooseUs />
		</div>
	);
};

export default Home;
