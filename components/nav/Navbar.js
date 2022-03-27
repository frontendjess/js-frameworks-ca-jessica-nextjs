import Link from 'next/link';
import styles from '../../styles/Home.module.css';

function Navbar() {
	return (
		<div className={styles.navbar}>
			<div>
				<Link href='/'>
					<a className={styles.navlinks}>Home</a>
				</Link>
				<Link href='/contact'>
					<a className={styles.navlinks}>Contact</a>
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
