import AuthForm from '@/components/authform/AuthForm'

export const metadata = {
	title: 'EasyTech | Login',
	description: 'This is the login page.',
}

const page = () => {
	return <AuthForm type='login' />
}

export default page
