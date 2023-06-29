import { useContext } from 'react';
import googleImg from '../assets/google.png';
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { saveUser, userRole } from '../apis/auth';
const GoogleLogin = ({ setLoading,setError }) => {
	const navigate= useNavigate()
	const { continueWithGoogle } = useContext(AuthContext);
	const handleGoogleLogin = () => {
		setLoading(true)

		continueWithGoogle().then((data) => {
			setLoading(false);
			navigate('/');
			userRole(data?.user?.email).then((role) => {
				if (!role) {
					saveUser(data?.user)
				}
			});

			toast.success('successfully logged in');
			})
			.catch((err) => {
				setLoading(false);
				console.log(err.message);
				setError(err.message);
			});
	};
	return (
		<div className='max-w-sm mx-auto px-4'>
			<div className='divider'>or</div>
			<div onClick={handleGoogleLogin} className='flex items-center justify-evenly border rounded-lg cursor-pointer'>
				<img className='w-12' src={googleImg} alt='google logo' />
				<span>Continue with Google</span>
			</div>
		</div>
	);
};

export default GoogleLogin;
