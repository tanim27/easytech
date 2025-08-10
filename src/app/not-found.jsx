'use client'

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function NotFoundPage() {
	const [isVisible, setIsVisible] = useState(false)
	const router = useRouter()

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), 100)
		return () => clearTimeout(timer)
	}, [])

	return (
		<div className='flex items-center justify-center bg-gradient-to-br px-4'>
			<div
				className={`max-w-xl text-center transition-all duration-700 ease-out transform ${
					isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
				}`}
			>
				{/* Optional Illustration */}
				<div className='mb-6'>
					<Image
						src='/assets/illustrations/404.png'
						alt='Not Found'
						width={600}
						height={400}
						className='mx-auto'
					/>
				</div>

				<h1 className='text-[5rem] md:text-[6rem] font-black text-teal-600 drop-shadow-md tracking-tight leading-none'>
					404
				</h1>
				<h2 className='text-2xl md:text-3xl font-semibold text-gray-800 mt-2'>
					Page Not Found
				</h2>
				<p className='text-gray-600 text-base md:text-lg mt-4'>
					Oops! The page you're looking for doesn't exist or has been moved.
				</p>

				<button
					onClick={() => router.push('/')}
					className='mt-8 inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full text-base md:text-lg font-medium shadow-md transition-all duration-300 cursor-pointer'
				>
					<ArrowBackRoundedIcon fontSize='medium' />
					Go Back Home
				</button>
			</div>
		</div>
	)
}
