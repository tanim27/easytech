'use client'

import { useForgotPasswordWithEmail } from '@/hooks/useAuth'
import { ForgotPasswordValidationSchema } from '@/libs/validations'
import { Alert, Snackbar } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import Link from 'next/link'
import { useState } from 'react'

const ForgotPassword = ({ type = 'Email' }) => {
	const { mutateAsync, isPending } = useForgotPasswordWithEmail()

	const initialValues = type === 'Email' ? { email: '' } : { contact: '' }

	const successMessage =
		type === 'Email'
			? 'Password reset link sent to your email.'
			: 'An OTP has been sent to your contact number.'

	const [snackBar, setSnackBar] = useState({
		open: false,
		message: '',
		severity: '',
	})

	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		try {
			await mutateAsync(values)
			resetForm()
			showSnackBar(`${successMessage}`, 'success')
		} catch {
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
		<div className='flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-32'>
			<div className='bg-white w-full max-w-3xl shadow-xl p-8 sm:p-10'>
				<h2 className='font-extrabold text-4xl text-gray-800 text-center mb-6'>
					Forgot Password
				</h2>
				<Formik
					initialValues={initialValues}
					validationSchema={ForgotPasswordValidationSchema}
					onSubmit={handleSubmit}
				>
					<Form className='space-y-4'>
						{type === 'Email' ? (
							<>
								<div>
									<label className='block text-sm font-medium text-gray-700 mb-1'>
										Email
									</label>
									<Field
										name='email'
										type='email'
										placeholder='you@example.com'
										className='w-full px-4 py-3 border border-gray-300 focus:border-teal-500 focus:outline-none transition duration-200'
									/>
									<ErrorMessage
										name='email'
										component='div'
										className='text-red-500 text-sm mt-1'
									/>
								</div>
							</>
						) : (
							<>
								<div>
									<label className='block text-sm font-medium text-gray-700 mb-1'>
										Contact
									</label>
									<Field
										name='contact'
										type='string'
										placeholder='01XXXXXXXXX'
										className='w-full px-4 py-3 border border-gray-300 focus:border-teal-500 focus:outline-none transition duration-200'
									/>
									<ErrorMessage
										name='contact'
										component='div'
										className='text-red-500 text-sm mt-1'
									/>
								</div>
							</>
						)}

						<button
							type='submit'
							disabled={isPending}
							className='w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50'
						>
							{isPending
								? 'Processing...'
								: type.toLowerCase() === 'email'
								? 'Send reset link to your mail'
								: 'Send OTP to your phone'}
						</button>

						{type === 'Email' ? (
							<p className='text-sm text-center mt-6 text-gray-700'>
								<Link
									href='/password-reset-request/otp'
									className='text-teal-600 hover:underline font-medium'
								>
									Get OTP on your phone
								</Link>
							</p>
						) : (
							<p className='text-sm text-center mt-6 text-gray-700'>
								<Link
									href='/password-reset-request/email'
									className='text-teal-600 hover:underline font-medium'
								>
									Get reset link to your email
								</Link>
							</p>
						)}
					</Form>
				</Formik>
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

export default ForgotPassword
