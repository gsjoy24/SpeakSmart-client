import { FaCheckCircle, FaClock, FaEnvelope, FaUserAlt, FaUserTie } from 'react-icons/fa';
import { RxCrossCircled } from 'react-icons/rx';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

const ClassRow = ({ singleClass, i, refetch }) => {
	const [axiosSecure] = useAxiosSecure();
	const [approvalLoading, setApprovalLoading] = useState(false);

	const approveClass = (id) => {
		setApprovalLoading(true);
		axiosSecure
			.patch(`/approve-class/${id}`)
			.then((res) => {
				if (res.data.modifiedCount > 0) {
					toast.success('Class Approved!');
					console.log(res.data);
					setApprovalLoading(false);
					refetch();
				}
			})
			.catch((err) => {
				setApprovalLoading(false);
				console.log(err.message);
			});
	};

	return (
		<tr>
			<th>{i + 1}</th>
			<td>
				<div className='flex items-center space-x-3'>
					<div className='avatar'>
						<div className='mask mask-squircle w-12 h-12'>
							<img src={singleClass?.image} alt={singleClass?.className} />
						</div>
					</div>
					<div>
						<div className='font-bold'>{singleClass.className}</div>
						<div className='text-sm opacity-50'>Price: $ {singleClass?.price}</div>
					</div>
				</div>
			</td>
			<td className='flex flex-col gap-2'>
				<span className='ml-2 flex items-center gap-2'>
					<FaUserTie />
					{singleClass?.instructor}
				</span>
				<span className='badge badge-ghost badge-sm flex items-center gap-2 p-2'>
					<FaEnvelope /> {singleClass?.instructorEmail}
				</span>
			</td>
			<td>
				<span className='flex items-center gap-2'>
					<FaUserAlt /> <span>{singleClass?.availableSeats}</span>
				</span>
			</td>
			<td
				className={
					singleClass?.status === 'approved'
						? 'text-green-600'
						: singleClass?.status === 'pending'
						? 'text-yellow-500'
						: 'text-red-600'
				}>
				<span className='flex items-center justify-center gap-2'>
					{singleClass?.status === 'approved' ? (
						<FaCheckCircle size={16} />
					) : singleClass?.status === 'pending' ? (
						<FaClock size={16} />
					) : (
						<RxCrossCircled size={18} />
					)}
					<span>{singleClass?.status}</span>
				</span>
			</td>
			<td className='flex flex-col gap-2'>
				<button
					onClick={() => approveClass(singleClass?._id)}
					disabled={singleClass?.checked || approvalLoading}
					className='btn btn-xs bg-[#8de4af] hover:bg-[#49d17d]'>
					{approvalLoading ? 'approving' : 'approve'}
				</button>
				<button disabled={singleClass?.checked} className='btn btn-xs btn-error'>
					deny
				</button>
			</td>
		</tr>
	);
};

export default ClassRow;
