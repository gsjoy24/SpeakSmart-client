import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import SelectedClassRow from './SelectedClassRow';

const SelectedClasses = () => {
	const { user } = useContext(AuthContext);
	console.log(user?.email);

	const [axiosSecure] = useAxiosSecure();
	const { data: selectedClasses = [], refetch } = useQuery({
		queryKey: ['selected-class', user],
		queryFn: async () => {
			const res = await axiosSecure(`/selected-classes/${user?.email}`);
			return res.data;
		}
	});
	return (
		<div className='mx-6'>
			<h1 className='text-2xl md:text-4xl text-gray-700 font-bold text-center my-6'>All Selected Classes</h1>
			<div className='overflow-x-auto'>
				<table className='table'>
					{/* head */}
					<thead>
						<tr>
							<th>#</th>
							<th>Class</th>
							<th>Instructor</th>
							<th>Delete</th>
							<th>Pay</th>
						</tr>
					</thead>
					<tbody>
						{selectedClasses.map((selectedClass, i) => (
							<SelectedClassRow key={selectedClass._id} selectedClass={selectedClass} i={i} refetch={refetch} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default SelectedClasses;
