import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../components/Loader/Loader';
import Empty from '../../../components/Empty';
import EnrolledClassRow from './EnrolledClassRow';

const MyEnrolledClasses = () => {
	const { user } = useContext(AuthContext);
	const [axiosSecure] = useAxiosSecure();
	const { data: enrolledClasses = [], isLoading } = useQuery({
		queryKey: ['enrolled-classes', user],
		queryFn: async () => {
			const res = await axiosSecure(`/enrolled-classes/${user?.email}`);
			return res.data;
		}
	});
	return (
		<>
			{isLoading ? (
				<Loader />
			) : enrolledClasses.length === 0 && Array.isArray(enrolledClasses) ? (
				<Empty title='See Classes' path='../../classes' />
			) : (
				<div className='mx-6'>
					<h1 className='text-2xl md:text-4xl text-gray-700 font-bold text-center my-6'>All Enrolled Classes</h1>
					<div className='overflow-x-auto'>
						<table className='table'>
							{/* head */}
							<thead>
								<tr>
									<th>#</th>
									<th>Class</th>
									<th>Instructor</th>
									<th>Enrolled On</th>
								</tr>
							</thead>
							<tbody>
								{enrolledClasses.map((enrolledClass, i) => (
									<EnrolledClassRow key={enrolledClass._id} enrolledClass={enrolledClass} i={i} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			)}
		</>
	);
};

export default MyEnrolledClasses;
