import { toast } from 'react-hot-toast';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { FaUserTie, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SelectedClassRow = ({ selectedClass, i, refetch }) => {
	const [axiosSecure] = useAxiosSecure();

	// delete selected class
	const handleDelete = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#46db7f',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.isConfirmed) {
				axiosSecure.delete(`/selected-class/${id}`).then((data) => {
					if (data.data.deletedCount > 0) {
						toast.success('Class deleted successfully!');
						refetch();
					}
				});
			}
		});
	};
	return (
		<tr>
			<th>{i + 1}</th>
			<td>
				<div className='flex items-center space-x-3'>
					<div className='avatar'>
						<div className='mask mask-squircle w-12 h-12'>
							<img src={selectedClass?.image} alt={selectedClass?.className} />
						</div>
					</div>
					<div>
						<div className='font-bold'>{selectedClass.className}</div>
						<div className='text-sm opacity-50'>Price: $ {selectedClass?.price}</div>
					</div>
				</div>
			</td>
			<td className='flex flex-col gap-2'>
				<span className='ml-2 flex items-center gap-2'>
					<FaUserTie />
					{selectedClass?.instructor}
				</span>
				<span className='badge badge-ghost badge-sm flex items-center gap-2 p-2'>
					<FaEnvelope /> {selectedClass?.instructorEmail}
				</span>
			</td>
			<td>
				<button onClick={() => handleDelete(selectedClass._id)} className='btn btn-sm btn-error'>
					delete
				</button>
			</td>
			<th>
				<Link to={`/dashboard/pay/${selectedClass._id}`} className='btn btn-sm btn-success'>
					pay
				</Link>
			</th>
		</tr>
	);
};

export default SelectedClassRow;
