import { FaEnvelope, FaUserTie, FaKey, FaCalendarAlt } from 'react-icons/fa';

const PaymentRow = ({ payment, i }) => {
	const date = new Date(payment?.date);
	const normalDate = date.toLocaleDateString();
	return (
		<tr>
			<th>{i + 1}</th>
			<td>
				<div className='flex items-center space-x-3'>
					<div className='avatar'>
						<div className='mask mask-squircle w-12 h-12'>
							<img src={payment?.image} alt={payment?.className} />
						</div>
					</div>
					<div>
						<div className='font-bold'>{payment.className}</div>
						<div className='text-sm opacity-50'>Price: $ {payment?.amount}</div>
					</div>
				</div>
			</td>
			<td className='flex flex-col gap-2'>
				<span className='ml-2 flex items-center gap-2'>
					<FaUserTie />
					{payment?.instructor}
				</span>
				<span className='badge badge-ghost badge-sm flex items-center gap-2 p-2'>
					<FaEnvelope /> {payment?.instructorEmail}
				</span>
			</td>
			<td>
				<span className='flex items-center justify-center gap-2'>
					<FaKey /> <span>{payment?.transactionId}</span>
				</span>
			</td>
			<td>
				<span className='flex items-center justify-center gap-2'>
					<FaCalendarAlt /> <span>{normalDate}</span>
				</span>
			</td>
		</tr>
	);
};

export default PaymentRow;
