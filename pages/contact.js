import { Formik, Field } from 'formik';
import Navbar from '../components/nav/Navbar';
import styles from '../styles/Home.module.css';

function Contact() {
	return (
		<>
			<div className={styles.contactContainer}>
				<h1>Contact us</h1>
				<div>
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
								errors.lastname = 'Last name is required';
							} else if (values.lastname.length < 4) {
								errors.lastname = 'Last name requires at least 4 characters';
							}

							if (!values.subject) {
								errors.subject = 'A subject must be selected';
							} else if (values.subject.any) {
								errors.subject = 'Required';
							}

							if (!values.message) {
								errors.message = 'Message is required';
							} else if (values.message.length < 10) {
								errors.message = 'Please enter a minimum of 10 characters';
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
								<div>
									<label htmlFor='subject'>Subject</label>
									<Field component='select' id='subject' name='subject'>
										<option value='Subject choice'>Choose one:</option>
										<option value='Tech'>Tech</option>
										<option value='Admin'>Admin</option>
										<option value='Other'>Other</option>
									</Field>
									{errors.subject && touched.subject && errors.subject}
								</div>
								<div>
									<input
										type='text'
										name='message'
										placeholder='Your message'
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.message}
									/>
									{errors.message && touched.message && errors.message}
								</div>

								<button type='submit' disabled={isSubmitting}>
									Submit
								</button>
							</form>
						)}
					</Formik>
				</div>
			</div>
		</>
	);
}

export default Contact;
