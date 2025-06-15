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
		<div className='flex items-start justify-center min-h-screen bg-teal-50 px-4'>
			<div
				className={`text-center transition-all duration-700 ease-out transform ${
					isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
				}`}
			>
				<h1 className='text-[10rem] font-extrabold text-teal-400 drop-shadow-md'>
					404
				</h1>
				<h2 className='text-3xl md:text-4xl font-bold text-teal-600 mb-4'>
					Page Not Found
				</h2>
				<p className='text-gray-600 text-lg md:text-xl mb-8'>
					Sorry, we couldn’t find what you’re looking for.
				</p>
				<button
					onClick={() => router.push('/')}
					className='bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full text-lg shadow-lg transition duration-300'
				>
					Go Back Home
				</button>
			</div>
		</div>
	)
}
