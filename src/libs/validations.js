import * as Yup from 'yup'

export const loginSchema = Yup.object({
	email: Yup.string()
		.email('Invalid email address')
		.required('Email is required'),
	password: Yup.string()
		.min(6, 'Password must be at least 6 characters')
		.required('Password is required'),
})

export const signupSchema = Yup.object({
	name: Yup.string().required('Name is required'),
	email: Yup.string()
		.email('Invalid email address')
		.required('Email is required'),
	contact: Yup.string().required('Contact number is required'),
	// .matches(/^01[3-9]\d{9}$/, 'Enter a valid BD number e.g. 01XXXXXXXXX'),
	password: Yup.string()
		.min(6, 'Password must be at least 6 characters')
		.required('Password is required'),
})
