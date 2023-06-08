import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import App from '../App';
import ErrorPage from '../pages/ErrorPage';
import Signup from '../pages/Signup/Signup';
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
				path: '/',
				element: <App />
			}
		]
	}
]);
export default router;
