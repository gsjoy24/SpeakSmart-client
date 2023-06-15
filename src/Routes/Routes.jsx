import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../pages/ErrorPage';
import Signup from '../pages/Signup/Signup';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home/Home';
import Instructors from '../pages/Instructors/Instructors';
import Classes from '../pages/Classes/Classes';
import StudentDashboard from '../layouts/StudentDashboard';
import SelectedClasses from '../pages/SelectedClasses/SelectedClasses';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/signup',
				element: <Signup />
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/instructors',
				element: <Instructors />
			},
			{
				path: '/classes',
				element: <Classes />
			}
		]
	},
	{
		path: '/dashboard',
		element: <StudentDashboard />,
		children: [
			{
				path: 'my-selected-classes',
				element: <SelectedClasses />
			}
		]
	}
]);
export default router;
