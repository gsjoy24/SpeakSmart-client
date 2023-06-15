import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../pages/ErrorPage';
import Signup from '../pages/Signup/Signup';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home/Home';
import Instructors from '../pages/Instructors/Instructors';
import Classes from '../pages/Classes/Classes';
import StudentDashboard from '../layouts/StudentDashboard';
import SelectedClasses from '../pages/StudentDashboard/SelectedClasses/SelectedClasses';
import PaymentPage from '../pages/StudentDashboard/PaymentPage/PaymentPage';
import axios from 'axios';
import Payments from '../pages/StudentDashboard/Payments/Payments';

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
			},
			{
				path: 'pay/:id',
				element: <PaymentPage />,
				loader: ({ params }) => axios.get(`http://localhost:5000/selected-class/${params.id}`)
			},
			{
				path: 'payment-history',
				element: <Payments />
			}
		]
	}
]);
export default router;
