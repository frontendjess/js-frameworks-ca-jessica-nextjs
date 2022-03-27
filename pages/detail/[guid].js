import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import employeesJson from '../../libs/employeesData';
import Navbar from '../../components/nav/Navbar';

export default function generatedEmployee({ name, occupation, phone }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Employee</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />

			<main className={styles.main}>
				<h1 className={styles.title}>305 Medical Center Employees</h1>

				<div className={styles.employeeCard}>
					<p>Name: {name}</p>
					<p>Occupation: {occupation}</p>
					<p>Phone number: {phone}</p>
				</div>

				<div>
					<Link href='/'>
						<a>Go back</a>
					</Link>
				</div>
			</main>

			<footer className={styles.footer}>
				<p>FEU2 class course assignment by Jessica Warr - </p>
				<p>Built in Next.Js with hard coded JSON, Formik & NextAuth</p>
			</footer>
		</div>
	);
}

export async function getStaticPaths() {
	const paths = employeesJson.map((employee) => {
		return {
			params: {
				guid: employee.guid,
			},
		};
	});
	return {
		paths: paths,
		fallback: false, // false or 'blocking'
	};
}

export async function getStaticProps({ params }) {
	const foundEmployee = employeesJson.find((employee) => {
		return employee.guid === params.guid;
	});
	return { props: foundEmployee };
}