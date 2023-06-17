import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import Loader from '../../../components/Loader/Loader';
import Empty from '../../../components/Empty';
import ClassRow from './ClassRow';

const ManageClasses = () => {
	useEffect(() => {
		// scroll to top of page
		window.scrollTo(0, 0);
		document.title = 'Manage Classes | SpeakSmart';
	}, []);

	const {
		data: allClasses = [],
		isLoading,
		refetch
	} = useQuery({
		queryKey: ['all-classes'],
		queryFn: async () => {
			const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/classes?status=all`);
			return res.data;
		}
	});

	return (
		<>
			{isLoading ? (
				<Loader />
			) : allClasses.length === 0 && Array.isArray(allClasses) ? (
				<Empty title='Home' path='/' />
			) : (
				<div className='mx-6'>
					<h1 className='text-2xl md:text-4xl text-gray-700 font-bold text-center my-6'>All Payments</h1>
					<div className='overflow-x-auto'>
						<table className='table'>
							{/* head */}
							<thead>
								<tr>
									<th>#</th>
									<th>Class</th>
									<th>Instructor</th>
									<th>Available Seats</th>
									<th>Status</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{allClasses.map((singleClass, i) => (
									<ClassRow key={singleClass._id} singleClass={singleClass} i={i} refetch={refetch} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			)}
		</>
	);
};

export default ManageClasses;
