import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loader from '../../../components/Loader/Loader';
import Empty from '../../../components/Empty';
import UserRow from './UserRow';

const ManageUsers = () => {
	const [axiosSecure] = useAxiosSecure();
	useEffect(() => {
		// scroll to top of page
		window.scrollTo(0, 0);
		document.title = 'Manage Classes | SpeakSmart';
	}, []);

	const {
		data: allUsers = [],
		isLoading,
		refetch
	} = useQuery({
		queryKey: ['all-users'],
		queryFn: async () => {
			const res = await axiosSecure.get(`${import.meta.env.VITE_SERVER_URL}/users`);
			return res.data;
		}
	});

	return (
		<>
			{isLoading ? (
				<Loader />
			) : allUsers.length === 0 && Array.isArray(allUsers) ? (
				<Empty title='Add Classes' path='/dashboard/add-class' />
			) : (
				<div className='mx-6'>
					<h1 className='text-2xl md:text-4xl text-gray-700 font-bold text-center my-6'>Manage Users</h1>
					<div className='overflow-x-auto'>
						<table className='table'>
							{/* head */}
							<thead>
								<tr>
									<th>#</th>
									<th>User</th>
									<th>Role</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{allUsers.map((user, i) => (
									<UserRow key={user._id} user={user} i={i} refetch={refetch} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			)}
		</>
	);
};

export default ManageUsers;
