'use client'

import { ErrorMessage, Field, Form, Formik } from 'formik'
import Link from 'next/link'
import * as Yup from 'yup'

const AuthForm = ({ type = 'login' }) => {
	const initialValues = {
		name: '',
		email: '',
		password: '',
	}

	const validationSchema = Yup.object({
		name:
			type === 'signup'
				? Yup.string().required('Name is required')
				: Yup.string(),
		email: Yup.string()
			.email('Invalid email address')
			.required('Email is required'),
		password: Yup.string()
			.min(6, 'Password must be at least 6 characters')
			.required('Password is required'),
	})

	const handleSubmit = (values) => {
		console.log(`${type.toUpperCase()} data:`, values)
		// API call goes here
	}

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
			<div className='w-full max-w-3xl bg-white shadow-xl p-8 sm:p-10'>
				<h2 className='font-extrabold text-4xl text-gray-800 text-center mb-6'>
					{type === 'login' ? 'Login here' : 'Create Your Account'}
				</h2>

				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					<Form className='space-y-5'>
						{type === 'signup' && (
							<div>
								<label
									htmlFor='name'
									className='block text-sm font-medium text-gray-700 mb-1'
								>
									Name
								</label>
								<Field
									name='name'
									type='text'
									placeholder='John Doe'
									className='w-full px-4 py-3 border-1 border-gray-300 focus:border-teal-500 focus:outline-none transition duration-200'
								/>
								<ErrorMessage
									name='name'
									component='div'
									className='text-red-500 text-sm mt-1'
								/>
							</div>
						)}

						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-gray-700 mb-1'
							>
								Email
							</label>
							<Field
								name='email'
								type='email'
								placeholder='you@example.com'
								className='w-full px-4 py-3 border-1 border-gray-300 focus:border-teal-500 focus:outline-none transition duration-200'
							/>
							<ErrorMessage
								name='email'
								component='div'
								className='text-red-500 text-sm mt-1'
							/>
						</div>

						<div>
							<label
								htmlFor='password'
								className='block text-sm font-medium text-gray-700 mb-1'
							>
								Password
							</label>
							<Field
								name='password'
								type='password'
								placeholder='••••••••'
								className='w-full px-4 py-3 border-1 border-gray-300 focus:border-teal-500 focus:outline-none transition duration-200'
							/>
							<ErrorMessage
								name='password'
								component='div'
								className='text-red-500 text-sm mt-1'
							/>
						</div>

						<button
							type='submit'
							className='w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 transition-all duration-300 shadow-md cursor-pointer'
						>
							{type === 'login' ? 'Login' : 'Sign Up'}
						</button>
					</Form>
				</Formik>

				<p className='text-sm text-center mt-6 text-gray-700'>
					{type === 'login' ? (
						<>
							Don&apos;t have an account?{' '}
							<Link
								href='/auth/signup'
								className='text-teal-600 hover:underline font-medium'
							>
								Sign Up
							</Link>
						</>
					) : (
						<>
							Already have an account?{' '}
							<Link
								href='/auth/login'
								className='text-teal-600 hover:underline font-medium'
							>
								Login
							</Link>
						</>
					)}
				</p>
			</div>
		</div>
	)
}

export default AuthForm
