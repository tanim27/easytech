import * as Yup from 'yup'

// Regex patterns
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const contactRegex = /^01[3-9]\d{8}$/
const passwordRegex =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/

// Login Schema
export const loginSchema = Yup.object().shape({
	identifier: Yup.string()
		.required('Email or Contact is required')
		.test('is-valid', 'Enter a valid email or contact number', (value) => {
			if (!value) return false
			return emailRegex.test(value) || contactRegex.test(value)
		}),
	password: Yup.string().required('Password is required'),
})

// Signup Schema
export const signupSchema = Yup.object().shape({
	name: Yup.string()
		.required('Name is required')
		.min(3, 'Name must be at least 3 characters')
		.max(50, 'Name cannot exceed 50 characters'),
	email: Yup.string()
		.required('Email is required')
		.matches(emailRegex, 'Enter a valid email address'),
	contact: Yup.string()
		.required('Contact number is required')
		.matches(contactRegex, 'Enter a valid Bangladeshi contact number'),
	password: Yup.string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters')
		.max(64, 'Password cannot exceed 64 characters')
		.matches(
			passwordRegex,
			'Password must contain at least one uppercase letter, one lowercase letter, and one special character',
		),
	confirmPassword: Yup.string()
		.required('Confirm Password is required')
		.oneOf([Yup.ref('password'), null], 'Passwords must match'),
})
