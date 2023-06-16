import { FaCheckCircle, FaClock, FaUserAlt } from 'react-icons/fa';
import { RxCrossCircled } from 'react-icons/rx';
import FeedbackModal from './FeedbackModal';
import { Link } from 'react-router-dom';
const MyClassesRow = ({ singleClass, i }) => {
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
			<td>
				<span className='flex items-center justify-center gap-2'>
					<FaUserAlt /> <span>{singleClass?.enrolledStudents}</span>
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
			<td>
				{singleClass?.feedback ? (
					<>
						<FeedbackModal feedback={singleClass?.feedback} />
						<button onClick={() => window.my_modal_3.showModal()} className='btn btn-sm bg-red-300 hover:bg-red-400 '>
							feedback
						</button>
					</>
				) : (
					<Link to={`update/${singleClass._id}`} className='btn btn-sm bg-[#8de4af] hover:bg-[#61cc8a]'>
						update
					</Link>
				)}
			</td>
		</tr>
	);
};

export default MyClassesRow;
