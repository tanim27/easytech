import ScrollToTop from '@/components/scroll-to-top/ScrollToTop'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import ClientWrapper from './ClientWrapper'

// app/layout.js
export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body cz-shortcut-listen='true'>
				<ClientWrapper>
					<ReactQueryProvider>
						{children}
						<ScrollToTop />
					</ReactQueryProvider>
				</ClientWrapper>
			</body>
		</html>
	)
}
