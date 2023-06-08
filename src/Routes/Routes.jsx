import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import App from '../App';
import ErrorPage from '../pages/ErrorPage';
import Signup from '../pages/Signup/Signup';
import Login from '../pages/Login/Login';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <App />
			},
			{
				path: '/signup',
				element: <Signup />
			},
			{
				path: '/login',
				element: <Login />
			}
		]
	}
]);
export default router;
