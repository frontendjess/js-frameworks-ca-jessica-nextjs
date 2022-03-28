import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { signIn, signOut, useSession } from 'next-auth/react';

function Navbar() {
	const { data: session, status } = useSession();
	console.log('session', session, 'status is', status);
	return (
		<div className={styles.navbar}>
			<div>
				<Link href='/'>
					<a className={styles.navlinks}>Home</a>
				</Link>
				<Link href='/contact'>
					<a className={styles.navlinks}>Contact</a>
				</Link>
				{session && status == 'authenticated' && (
					<Link href='/admin'>
						<a className={styles.navlinks}>Admin Dashboard</a>
					</Link>
				)}

				{!session && status == 'unauthenticated' && (
					<Link href='/api/auth/signin'>
						<a
							onClick={(e) => {
								e.preventDefault();
								signIn();
							}}
							className={styles.navlinks}>
							Sign In
						</a>
					</Link>
				)}

				{session && status == 'authenticated' && (
					<Link href='/api/auth/signout'>
						<a
							onClick={(e) => {
								e.preventDefault();
								signOut();
							}}
							className={styles.navlinks}>
							Sign Out
						</a>
					</Link>
				)}
			</div>
		</div>
	);
}

export default Navbar;
