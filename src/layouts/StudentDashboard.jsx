import { useEffect } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { CgMenuRight } from 'react-icons/cg';

const StudentDashboard = () => {
	useEffect(() => {
		// scroll to top of page
		window.scrollTo(0, 0);
		document.title = 'Dashboard | SpeakSmart';
	}, []);
	return (
		<div>
			<div className='drawer lg:drawer-open duration-0'>
				<input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
				<div className='drawer-content flex flex-col overflow-hidden'>
					{/* Page content here */}
					<Outlet />
				</div>
				<div className='drawer-side'>
					<label htmlFor='my-drawer-2' className='drawer-overlay'></label>
					<ul className='menu p-4 w-80 h-full bg-base-200 text-base-content space-y-5 text-lg font-semibold duration-0'>
						{/* Sidebar content here */}
						<li>
							{/* 2 */}
							<Link to='../' className='text-2xl font-bold bg-[#8de4af] flex justify-center'>
								SpeakSmart
							</Link>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'bg-[#8de4af] p-4' : 'p-4 border-2 border-gray-400')}
								to='my-selected-classes'>
								My Selected Classes
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'bg-[#8de4af] p-4' : 'p-4 border-2 border-gray-400')}
								to='my-enrolled-classes'>
								My Enrolled Classes
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
			<label
				htmlFor='my-drawer-2'
				className='p-3 rounded-full hover:bg-slate-200 lg:hidden absolute top-4 right-2 shadow-md'>
				<CgMenuRight size={22} />
			</label>
		</div>
	);
};

export default StudentDashboard;
