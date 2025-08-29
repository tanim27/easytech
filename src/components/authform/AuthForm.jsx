'use client'

import { useUserLogin, useUserRegister } from '@/hooks/useAuth'
import { loginSchema, signupSchema } from '@/libs/validations'
import { Alert, Snackbar } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import Link from 'next/link'
import { useState } from 'react'

const AuthForm = ({ type = 'Login' }) => {
	const initialValues =
		type === 'Login'
			? { identifier: '', password: '' }
			: { name: '', email: '', contact: '', password: '' }
	const validationSchema = type === 'Login' ? loginSchema : signupSchema
	const mutation = type === 'Login' ? useUserLogin() : useUserRegister()
	const successMessage =
		type === 'Login' ? 'Logged in successfully!' : 'Registration successful!'

	const [snackBar, setSnackBar] = useState({
		open: false,
		message: '',
		severity: '',
	})

	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		try {
			await mutation.mutateAsync(values)
			resetForm()
			showSnackBar(`${successMessage}`, 'success')
		} catch (error) {
			const backendMessage =
				error?.response?.data?.message ||
				error.message ||
				'Something went wrong'
			showSnackBar(`${type} error. ${backendMessage}`, 'error')
		} finally {
			setSubmitting(false)
		}
	}

	const showSnackBar = (message, severity) => {
		setSnackBar({ open: true, message, severity })
	}

	const handleCloseSnackbar = () => {
		setSnackBar({ ...snackBar, open: false })
	}

	return (
		<div className='flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-20'>
			<div className='bg-white w-full max-w-3xl shadow-xl p-8 sm:p-10'>
				<h2 className='font-extrabold text-4xl text-gray-800 text-center mb-6'>
					{type === 'Login' ? 'Login here' : 'Create Your Account'}
				</h2>

				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					<Form className='space-y-5'>
						{type === 'Login' ? (
							<div>
								<label className='block text-sm font-medium text-gray-700 mb-1'>
									Email or Contact
								</label>
								<Field
									name='identifier'
									type='text'
									placeholder='you@example.com or 01XXXXXXXXX'
									className='w-full px-4 py-3 border-1 border-gray-300 focus:border-teal-500 focus:outline-none transition duration-200'
								/>
								<ErrorMessage
									name='identifier'
									component='div'
									className='text-red-500 text-sm mt-1'
								/>
							</div>
						) : (
							<>
								<div>
									<label className='block text-sm font-medium text-gray-700 mb-1'>
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

								<div>
									<label className='block text-sm font-medium text-gray-700 mb-1'>
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
									<label className='block text-sm font-medium text-gray-700 mb-1'>
										Contact Number
									</label>
									<Field
										name='contact'
										type='string'
										placeholder='01XXXXXXXXX'
										className='w-full px-4 py-3 border-1 border-gray-300 focus:border-teal-500 focus:outline-none transition duration-200'
									/>
									<ErrorMessage
										name='contact'
										component='div'
										className='text-red-500 text-sm mt-1'
									/>
								</div>
							</>
						)}

						<div>
							<label className='block text-sm font-medium text-gray-700 mb-1'>
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
							{type === 'Login' ? 'Login' : 'Sign Up'}
						</button>
					</Form>
				</Formik>

				<p className='text-sm text-center mt-6 text-gray-700'>
					{type === 'Login' ? (
						<>
							Don't have an account?{' '}
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

			{/* Snackbar */}
			<Snackbar
				open={snackBar.open}
				autoHideDuration={3000}
				onClose={handleCloseSnackbar}
				anchorOrigin={{ vertical: 'bottom-left', horizontal: 'center' }}
			>
				<Alert
					onClose={handleCloseSnackbar}
					severity={snackBar.severity}
					sx={{ width: '100%' }}
				>
					{snackBar.message}
				</Alert>
			</Snackbar>
		</div>
	)
}

export default AuthForm
