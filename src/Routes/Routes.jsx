import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import App from '../App';
import ErrorPage from '../pages/ErrorPage';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <App />
			}
		]
	}
]);
export default router;
