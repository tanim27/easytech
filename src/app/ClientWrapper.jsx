'use client'

import Footer from '@/components/shared/footer/Footer'
import Navbar from '@/components/shared/header/Navbar'
import HexLoader from '@/components/shared/loader/Hexloader'
import '@/styles/globals.css'
import { usePathname } from 'next/navigation'
import { useLayoutEffect, useState } from 'react'

export default function ClientWrapper({ children }) {
	const pathname = usePathname()
	const [loading, setLoading] = useState(false)

	useLayoutEffect(() => {
		let timeout
		setLoading(true)

		// simulate slight delay to show spinner briefly
		timeout = setTimeout(() => {
			setLoading(false)
		}, 2000) // adjust if needed

		return () => clearTimeout(timeout)
	}, [pathname])

	return (
		<>
			<Navbar />
			<main className='min-h-screen relative'>
				{children}
				{loading && (
					<div className='fixed inset-0 z-50 bg-white flex items-center justify-center'>
						<HexLoader />
					</div>
				)}
			</main>
			<Footer />
		</>
	)
}
