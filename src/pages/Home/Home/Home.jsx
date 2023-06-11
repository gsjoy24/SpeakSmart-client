import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
	return (
		<div>
			<Banner />
			<PopularClasses />
			<PopularInstructors />
			<WhyChooseUs/>
		</div>
	);
};

export default Home;
