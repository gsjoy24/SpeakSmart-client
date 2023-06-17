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
import AddClass from '../pages/InstructorDashboard/AddClass/AddClass';
import MyClasses from '../pages/InstructorDashboard/MyClasses/MyClasses';
import UpdateClass from '../pages/InstructorDashboard/MyClasses/UpdateClass';
import InstructorRoute from './InstructorRoute/InstructorRoute';
import ManageUsers from '../pages/AdminDashboard/ManageUsers/ManageUsers';
import ManageClasses from '../pages/AdminDashboard/ManageClasses/ManageClasses';
import AdminRoute from './AdminRoute/AdminRoute';

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
				loader: ({ params }) => axios.get(`${import.meta.env.VITE_SERVER_URL}/selected-class/${params.id}`)
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
			},

			{
				path: 'add-class',
				element: (
					<InstructorRoute>
						<AddClass />
					</InstructorRoute>
				)
			},
			{
				path: 'my-classes',
				element: (
					<InstructorRoute>
						<MyClasses />
					</InstructorRoute>
				)
			},
			{
				path: 'my-classes/update/:id',
				element: (
					<InstructorRoute>
						<UpdateClass />
					</InstructorRoute>
				),
				loader: ({ params }) => axios.get(`${import.meta.env.VITE_SERVER_URL}/classes/${params.id}`)
			},
			{
				path: 'manage-users',
				element: (
					<AdminRoute>
						<ManageUsers />
					</AdminRoute>
				)
			},
			{
				path: 'manage-classes',
				element: (
					<AdminRoute>
						<ManageClasses />
					</AdminRoute>
				)
			}
		]
	}
]);
export default router;
