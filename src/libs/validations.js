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
	contact: Yup.number()
		.typeError('Contact number must be a number')
		.required('Contact number is required'),
	// .test(
	// 	'is-valid-bd-number',
	// 	'Enter a valid BD number e.g. 01XXXXXXXXX',
	// 	(value) => {
	// 		if (!value) return false
	// 		const str = value.toString()
	// 		return /^01[3-9]\d{8}$/.test(str)
	// 	},
	// ),

	password: Yup.string()
		.min(6, 'Password must be at least 6 characters')
		.required('Password is required'),
})
