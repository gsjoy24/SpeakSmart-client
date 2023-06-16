import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';

const ManageUsers = () => {
	useEffect(() => {
		// scroll to top of page
		window.scrollTo(0, 0);
		document.title = 'Manage Classes | SpeakSmart';
	}, []);

	const { data: allClasses = [] } = useQuery({
		queryKey: ['all-classes'],
		queryFn: async () => {
			const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/classes?status=all`);
			return res.data;
		}
	});
	console.log(allClasses);
	return <div>ManageUsers</div>;
};

export default ManageUsers;
