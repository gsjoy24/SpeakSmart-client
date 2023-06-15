import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../components/Loader/Loader';
import Empty from '../../../components/Empty';
import PaymentRow from './PaymentRow';

const Payments = () => {
	const { user } = useContext(AuthContext);
	const [axiosSecure] = useAxiosSecure();

	const { data: payments = [], isLoading } = useQuery({
		queryKey: ['payments', user],
		queryFn: async () => {
			const res = await axiosSecure(`/payments/${user?.email}`);
			return res.data;
		}
	});

	return (
		<>
			{isLoading ? (
				<Loader />
			) : payments.length === 0 && Array.isArray(payments) ? (
				<Empty title='Pay for classes' path='/my-selected-classes' />
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
									<th>Transaction Id</th>
									<th>Date</th>
								</tr>
							</thead>
							<tbody>
								{payments.map((payment, i) => (
									<PaymentRow key={payment._id} payment={payment} i={i} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			)}
		</>
	);
};

export default Payments;
