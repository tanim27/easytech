import axiosRequest from '@/utils/axiosRequest'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				try {
					const user = await axiosRequest({
						url: '/login',
						method: 'POST',
						data: credentials,
					})

					if (user && user.id) {
						return user
					}
					return null
				} catch (error) {
					console.error('Authorize error:', error)
					return null
				}
			},
		}),
	],
	session: {
		strategy: 'jwt',
	},
	jwt: {
		secret: process.env.NEXTAUTH_SECRET,
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id
				token.email = user.email
				token.name = user.name
				token.accessToken = user.token || null // if backend returns JWT
			}
			return token
		},
		async session({ session, token }) {
			session.user = {
				id: token.id,
				email: token.email,
				name: token.name,
			}
			session.accessToken = token.accessToken || null
			return session
		},
	},
	pages: {
		signIn: '/auth/signin',
	},
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
