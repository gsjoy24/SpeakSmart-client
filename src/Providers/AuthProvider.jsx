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

import { app } from '../Firebase/firebase.config';
const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// create a new user
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// sign in user with google
	const loginWithGoogle = () => {
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
		const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
			setUser(currenUser);
			setLoading(false);
		});
		return () => unsubscribe();
	}, []);

	const authInfo = {
		user,
		loading,
		createUser,
		loginWithGoogle,
		updateUserProfile,
		loginWithEmail,
		logOutUser
	};

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
