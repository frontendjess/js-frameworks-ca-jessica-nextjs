import { useState, useEffect } from 'react';
import { getSession, signIn } from 'next-auth/react';

function Admin() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const secureAdminPage = async () => {
			const session = await getSession();
			if (!session) {
				signIn();
			} else {
				setLoading(false);
			}
		};
		secureAdminPage();
	}, []);

	if (loading) {
		return <h2>Loading...</h2>;
	}

	return (
		<div>
			<h1>Admin</h1>
		</div>
	);
}

export default Admin;
