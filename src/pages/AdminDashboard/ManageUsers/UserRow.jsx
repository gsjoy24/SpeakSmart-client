import { FaEnvelope, FaUserAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Bounce } from 'react-awesome-reveal';

const UserRow = ({ user, refetch, i }) => {
	const [axiosSecure] = useAxiosSecure();

	const changeUserRole = (id, role) => {
		Swal.fire({
			title: 'Are you sure?',
			text: `You are allowing this user to be an ${role}`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#45d17a',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Confirm'
		}).then((result) => {
			if (result.isConfirmed) {
				axiosSecure.patch(`/user-role/${id}`, { role }).then((res) => {
					console.log(res.data);
					Swal.fire({
						title: `${user?.name} is an ${role} now!`,
						icon: 'success',
						showConfirmButton: false,
						timer: 2000
					});
					refetch();
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
						<Bounce className='mask mask-squircle w-12 h-12'>
							<img src={user?.photoURL} alt={user?.name} />
						</Bounce>
					</div>
					<div>
						<div className='font-bold'>{user?.name}</div>
						<div className='text-sm opacity-50 flex items-center gap-2'>
							<FaEnvelope /> {user?.email}
						</div>
					</div>
				</div>
			</td>
			<td>
				<span className='flex items-center gap-2'>
					<FaUserAlt /> <span>{user?.role}</span>
				</span>
			</td>

			<td className='flex flex-col gap-2'>
				<button
					onClick={() => changeUserRole(user?._id, 'admin')}
					disabled={user?.role === 'admin'}
					className='btn btn-sm bg-[#8de4af] hover:bg-[#61cc8a]'>
					make admin
				</button>
				<button
					onClick={() => changeUserRole(user?._id, 'instructor')}
					disabled={user?.role === 'instructor'}
					className='btn btn-sm bg-[#8de4af] hover:bg-[#61cc8a]'>
					make instructor
				</button>
			</td>
		</tr>
	);
};

export default UserRow;
