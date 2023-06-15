import { FaEnvelope, FaUserTie, FaCalendarAlt } from 'react-icons/fa';

const EnrolledClassRow = ({ enrolledClass, i }) => {
	const date = new Date(enrolledClass?.date);
	const normalDate = date.toLocaleDateString();
	return (
		<tr>
			<th>{i + 1}</th>
			<td>
				<div className='flex items-center space-x-3'>
					<div className='avatar'>
						<div className='mask mask-squircle w-12 h-12'>
							<img src={enrolledClass?.image} alt={enrolledClass?.className} />
						</div>
					</div>
					<div>
						<div className='font-bold'>{enrolledClass.className}</div>
						<div className='text-sm opacity-50'>Price: $ {enrolledClass?.price}</div>
					</div>
				</div>
			</td>
			<td className='flex flex-col gap-2'>
				<span className='ml-2 flex items-center gap-2'>
					<FaUserTie />
					{enrolledClass?.instructor}
				</span>
				<span className='badge badge-ghost badge-sm flex items-center gap-2 p-2'>
					<FaEnvelope /> {enrolledClass?.instructorEmail}
				</span>
			</td>
			<td>
				<span className='flex items-center gap-2'>
					<FaCalendarAlt />
					{normalDate}
				</span>
			</td>
		</tr>
	);
};

export default EnrolledClassRow;
