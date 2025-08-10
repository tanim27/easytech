import ScrollToTop from '@/components/scroll-to-top/ScrollToTop'
import ClientWrapper from './ClientWrapper'

// app/layout.js
export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body cz-shortcut-listen='true'>
				<ClientWrapper>
					{children}
					<ScrollToTop />
				</ClientWrapper>
			</body>
		</html>
	)
}
