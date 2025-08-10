'use client'

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { useEffect, useState } from 'react'

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true)
			} else {
				setIsVisible(false)
			}
		}

		window.addEventListener('scroll', toggleVisibility)
		return () => window.removeEventListener('scroll', toggleVisibility)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<div
			className='fixed bottom-6 right-0 w-full flex justify-end pointer-events-none'
			style={{ zIndex: 999 }}
		>
			<div className='max-w-7xl w-full px-4 flex justify-end'>
				{isVisible && (
					<button
						onClick={scrollToTop}
						className='pointer-events-auto p-3 rounded-full bg-teal-600 text-white shadow-lg hover:bg-teal-700 transition duration-300 cursor-pointer'
						aria-label='Scroll to top'
					>
						<ArrowUpwardIcon />
					</button>
				)}
			</div>
		</div>
	)
}
