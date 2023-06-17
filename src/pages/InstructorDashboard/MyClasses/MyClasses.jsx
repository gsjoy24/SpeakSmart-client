import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loader from '../../../components/Loader/Loader';
import Empty from '../../../components/Empty';
import MyClassesRow from './MyClassesRow';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const MyClasses = () => {
	const { user } = useContext(AuthContext);
	const { data: allClasses = [], isLoading } = useQuery({
		queryKey: ['all-classes'],
		enabled: !!user,
		queryFn: async () => {
			const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/instructor-classes/${user?.email}`);
			return res.data;
		}
	});

	return (
		<>
			{isLoading ? (
				<Loader />
			) : allClasses.length === 0 && Array.isArray(allClasses) ? (
				<Empty title='Add Classes' path='/dashboard/add-class' />
			) : (
				<div className='mx-6'>
					<h1 className='text-2xl md:text-4xl text-gray-700 font-bold text-center my-6'>Classes Added by You</h1>
					<div className='overflow-x-auto'>
						<table className='table'>
							{/* head */}
							<thead>
								<tr>
									<th>#</th>
									<th>Class</th>
									<th>Enrolled Students</th>
									<th>Status</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{allClasses.map((singleClass, i) => (
									<MyClassesRow key={singleClass._id} singleClass={singleClass} i={i} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			)}
		</>
	);
};

export default MyClasses;
