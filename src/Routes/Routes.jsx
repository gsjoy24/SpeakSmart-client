import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../pages/ErrorPage';
import Signup from '../pages/Signup/Signup';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home/Home';
import Instructors from '../pages/Instructors/Instructors';
import Classes from '../pages/Classes/Classes';
import Dashboard from '../layouts/Dashboard';
import SelectedClasses from '../pages/StudentDashboard/SelectedClasses/SelectedClasses';
import PaymentPage from '../pages/StudentDashboard/PaymentPage/PaymentPage';
import axios from 'axios';
import Payments from '../pages/StudentDashboard/Payments/Payments';
import MyEnrolledClasses from '../pages/StudentDashboard/MyEnrolledClasses/MyEnrolledClasses';
import StudentRoute from './StudentRoute/StudentRoute';

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
		element: <Dashboard />,
		children: [
			{
				path: 'my-selected-classes',
				element: (
					<StudentRoute>
						<SelectedClasses />
					</StudentRoute>
				)
			},
			{
				path: 'pay/:id',
				element: (
					<StudentRoute>
						<PaymentPage />
					</StudentRoute>
				),
				loader: ({ params }) => axios.get(`http://localhost:5000/selected-class/${params.id}`)
			},
			{
				path: 'my-enrolled-classes',
				element: (
					<StudentRoute>
						<MyEnrolledClasses />
					</StudentRoute>
				)
			},
			{
				path: 'payment-history',
				element: (
					<StudentRoute>
						<Payments />
					</StudentRoute>
				)
			}
		]
	}
]);
export default router;
