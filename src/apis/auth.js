export const saveUser = (user) => {
	const currentUser = {
		name: user?.displayName,
		email: user?.email
	};
	fetch(`${import.meta.env.VITE_SERVER_URL}/users/${user?.email}`, {
		method: 'PUT',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(currentUser)
	})
		.then((res) => res.json())
		.then((data) => console.log(data))
		.catch((err) => console.log(err));
};
