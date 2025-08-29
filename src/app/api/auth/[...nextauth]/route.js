import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

// connect to DB first
connectDB()

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				try {
					const user = await axiosRequest({
						req,
						url: '/api/auth/login',
						method: 'POST',
						data: credentials,
					})

					if (user) {
						return user
					} else {
						return null
					}
				} catch (error) {
					throw new Error('Invalid credentials')
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
			}
			return token
		},
		async session({ session, token }) {
			session.user = {
				id: token.id,
				email: token.email,
				name: token.name,
			}
			session.accessToken = token
			return session
		},
	},
	pages: {
		signIn: '/auth/signin',
	},
})

export { handler as GET, handler as POST }
