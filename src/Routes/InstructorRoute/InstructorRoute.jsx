import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Loader from '../../components/Loader/Loader';
import { Navigate } from 'react-router-dom';

const InstructorRoute = ({ children }) => {
	const { loading, role } = useContext(AuthContext);
	if (loading) {
		return <Loader />;
	} else if (role === 'instructor') {
		return <>{children}</>;
	}
	return <Navigate to='/'></Navigate>;
};

export default InstructorRoute;
