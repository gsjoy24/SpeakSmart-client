import './Banner.css';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Banner = () => {
	const [sliderData, setSliderData] = useState([]);
	console.log(sliderData);
	useEffect(() => {
		axios.get(`${import.meta.env.VITE_SERVER_URL}/sliders`).then((data) => setSliderData(data.data));
	}, []);
	const [sliderRef] = useKeenSlider();
	return (
		<div className=' overflow-hidden'>
			<div ref={sliderRef} className='keen-slider'>
				{sliderData.map((slider, i) => (
					<div key={slider._id} className={`keen-slider__slide number-slide${i + 1} relative`}>
						<img
							className='w-full h-[600px] lg:h-[calc(100vh-70px)] object-cover'
							src={slider.image}
							alt={slider.title}
						/>
						<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
							<p className='text-3xl font-semibold'>Lorem ipsum dolor sit amet consectetur.</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eius laboriosam pariatur at, nam
								quis iure in.
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Banner;
