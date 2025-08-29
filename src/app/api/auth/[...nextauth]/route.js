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
				const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(credentials),
				})

				const user = await res.json()
				if (res.ok && user) return user
				return null
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
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
