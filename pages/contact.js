import { Formik } from 'formik';

import Navbar from '../components/nav/Navbar';
import * as yup from 'yup';

function Contact() {
	return (
		<>
			<Navbar />
			<div>
				<h1>Contact us</h1>
				<Formik
					initialValues={{
						firstname: '',
						lastname: '',
						email: '',
						subject: '',
						message: '',
					}}
					validate={(values) => {
						const errors = {};
						if (!values.email) {
							errors.email = 'Required';
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
						) {
							errors.email = 'Invalid email address';
						}

						if (!values.firstname) {
							errors.firstname = 'First name is required';
						} else if (values.firstname.length < 3) {
							errors.firstname = 'First name requires at least 3 characters';
						}

						if (!values.lastname) {
							errors.lastname = 'First name is required';
						} else if (values.lastname.length < 4) {
							errors.lastname = 'Last name requires at least 4 characters';
						}
						return errors;
					}}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);
					}}>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting,
						/* and other goodies */
					}) => (
						<form onSubmit={handleSubmit}>
							<div>
								<input
									type='text'
									name='firstname'
									placeholder='First name'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.firstname}
								/>
								{errors.firstname && touched.firstname && errors.firstname}
							</div>
							<div>
								<input
									type='text'
									name='lastname'
									placeholder='Last name'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.lastname}
								/>
								{errors.lastname && touched.lastname && errors.lastname}
							</div>
							<div>
								<input
									type='email'
									name='email'
									placeholder='Email'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
								/>
								{errors.email && touched.email && errors.email}
							</div>

							<button type='submit' disabled={isSubmitting}>
								Submit
							</button>
						</form>
					)}
				</Formik>
			</div>
		</>
	);
}

export default Contact;
