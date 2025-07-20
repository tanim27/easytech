'use client'
// NotFoundPage.jsx
import { useRouter } from 'next/navigation' // Remove if not using Next.js
import { useEffect, useState } from 'react'

export default function NotFoundPage() {
	const [isVisible, setIsVisible] = useState(false)
	const router = useRouter() // Remove if not using Next.js

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), 100)
		return () => clearTimeout(timer)
	}, [])

	return (
		<div className='min-h-screen flex items-center justify-center bg-teal-50 px-4'>
			<div
				className={`text-center transition-all duration-700 ease-out transform ${
					isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
				}`}
			>
				<h1 className='text-[6rem] font-extrabold text-teal-600 drop-shadow-md'>
					404
				</h1>
				<h2 className='text-xl font-bold text-teal-600'>Page Not Found</h2>
				<p className='text-gray-600 text-lg md:text-xl my-6'>
					Sorry, we couldn’t find what you’re looking for.
				</p>
				<button
					onClick={() => router.push('/')}
					className='bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full text-lg shadow-lg transition duration-300 cursor-pointer'
				>
					Go Back Home
				</button>
			</div>
		</div>
	)
}
