import { createContext, useState, useEffect } from 'react';
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth';
import axios from 'axios';
import { app } from '../Firebase/firebase.config';
import { userRole } from '../apis/auth';
const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [role, setRole] = useState(null);
	const [loading, setLoading] = useState(true);

	// create a new user
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// sign in user with google
	const continueWithGoogle = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	// login user with email and password
	const loginWithEmail = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	// logout the user
	const logOutUser = () => {
		return signOut(auth);
	};

	// update the user profile with name and photo
	const updateUserProfile = (name, photo) => {
		setLoading(true);
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo
		});
	};

	// observing the user state
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
			if (currentUser && currentUser.email) {
				axios
					.post(`${import.meta.env.VITE_SERVER_URL}/jwt`, { email: currentUser.email })
					.then((data) => {
						// console.log(data);
						localStorage.setItem('access_token', data.data.token);
					})
					.catch((err) => {
						console.log(err);
					});
			} else {
				localStorage.removeItem('access_token');
			}
		});

		return () => {
			return unsubscribe();
		};
	}, []);

	// getting the user role
	useEffect(() => {
		if (user && user?.email) {
			userRole(user?.email).then((data) => setRole(data));
		}
	}, [user]);

	const authInfo = {
		user,
		role,
		loading,
		createUser,
		continueWithGoogle,
		updateUserProfile,
		loginWithEmail,
		logOutUser
	};

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
