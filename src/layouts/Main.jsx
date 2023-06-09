import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Main = () => {
	const { user, logOutUser } = useContext(AuthContext);

	const navItems = (
		<>
			<NavLink className={({ isActive }) => (isActive ? `bg-[#8de4af] p-2 rounded-md` : `p-2`)} to='/'>
				Home
			</NavLink>

			{user && (
				<NavLink className={({ isActive }) => (isActive ? 'bg-[#8de4af] p-2 rounded-md' : 'p-2')} to='/dashboard'>
					Dashboard
				</NavLink>
			)}
			<NavLink className={({ isActive }) => (isActive ? 'bg-[#8de4af] p-2 rounded-md' : 'p-2')} to='/instructors'>
				Instructors
			</NavLink>
			<NavLink className={({ isActive }) => (isActive ? 'bg-[#8de4af] p-2 rounded-md' : 'p-2')} to='/classes'>
				Classes
			</NavLink>
			{!user && (
				<>
					<NavLink className={({ isActive }) => (isActive ? 'bg-[#8de4af] p-2 rounded-md' : 'p-2')} to='/login'>
						Login
					</NavLink>
					<NavLink className={({ isActive }) => (isActive ? 'bg-[#8de4af] p-2 rounded-md' : 'p-2')} to='/signup'>
						Sign up
					</NavLink>
				</>
			)}
			{user && user?.email && (
				<>
					<span onClick={logOutUser}>Log Out</span>
					<img className='w-10 h-10 rounded-full mx-auto' src={user?.photoURL} alt={user.displayName} />
				</>
			)}
		</>
	);
	return (
		<div className='drawer'>
			<input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content flex flex-col'>
				{/* Navbar */}
				<div className='w-full navbar bg-[#de4af] shadow-xl'>
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
						<ul className='menu menu-horizontal items-center gap-4 font-semibold'>
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
				<label htmlFor='my-drawer-3' className='drawer-overlay'></label>
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
