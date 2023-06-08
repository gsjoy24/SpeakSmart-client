import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Main = () => {
	const navItems = (
		<>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/dashboard'>Dashboard</NavLink>
			<NavLink to='/instructors'>Instructors</NavLink>
			<NavLink to='/classes'>Classes</NavLink>
		</>
	);
	return (
		<div className='drawer'>
			<input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content flex flex-col'>
				{/* Navbar */}
				<div className='w-full navbar bg-[#8de4af]'>
					<div className='flex-none lg:hidden'>
						<label htmlFor='my-drawer-3' className='btn btn-square btn-ghost'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								className='inline-block w-6 h-6 stroke-current'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
							</svg>
						</label>
					</div>
					<div className='flex-1 px-2 mx-2 text-xl font-bold'>RhythmRoam</div>
					<div className='flex-none hidden lg:block'>
						<ul className='menu menu-horizontal gap-4 font-semibold'>
							{/* Navbar menu content here */}
							{navItems}
						</ul>
					</div>
				</div>
				{/* Page content here */}
				<div className='min-h-[calc(100vh-80px)]'>
					<Outlet />
				</div>
				<Footer />
			</div>
			<div className='drawer-side'>
				<label htmlFor='my-drawer-3' className='drawer-overlay'></label>s
				<ul className='menu w-80 h-full bg-base-200 gap-5 text-xl font-semibold text-center'>
					<p className='text-2xl font-bold bg-[#8de4af] p-4 '>RhythmRoam</p>
					{/* Sidebar content here */}
					{navItems}
				</ul>
			</div>
		</div>
	);
};

export default Main;
