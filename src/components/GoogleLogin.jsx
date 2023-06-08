import { useContext } from 'react';
import googleImg from '../assets/google.png';
import { AuthContext } from '../Providers/AuthProvider';
const GoogleLogin = () => {
	const { continueWithGoogle } = useContext(AuthContext);
	const handleGoogleLogin = () => {
		continueWithGoogle().then((data) => {
			console.log(data.user);
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
