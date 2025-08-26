import AuthForm from '@/components/authform/AuthForm'

export const metadata = {
	title: 'EasyTech | Signup',
	description: 'This is the signup page.',
}

const page = () => {
	return <AuthForm type='Signup' />
}

export default page
