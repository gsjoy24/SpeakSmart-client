import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes.jsx';
import AuthProvider from './Providers/AuthProvider';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<QueryClientProvider client={queryClient}>
			<Toaster />
			<div className='max-w-[1440px] mx-auto'>
				<RouterProvider router={router} />
			</div>
		</QueryClientProvider>
	</AuthProvider>
);
