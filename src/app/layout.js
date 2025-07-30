import ClientWrapper from './ClientWrapper'

export const metadata = {
	title: 'EasyTech',
	description: 'This is a homepage.',
}

// app/layout.js
export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className='bg-gray-50'>
				<ClientWrapper>{children}</ClientWrapper>
			</body>
		</html>
	)
}
