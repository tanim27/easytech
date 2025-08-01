'use client'

import { Discount } from '@mui/icons-material'
import { useEffect, useState } from 'react'

const PromoSection = () => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	})

	useEffect(() => {
		const endTime = new Date()
		endTime.setHours(endTime.getHours() + 48) // Set promo to expire in 48 hours

		const updateCountdown = () => {
			const now = new Date()
			const difference = endTime - now

			if (difference <= 0) {
				setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
				clearInterval(intervalId)
			} else {
				const days = Math.floor(difference / (1000 * 60 * 60 * 24))
				const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
				const minutes = Math.floor((difference / 1000 / 60) % 60)
				const seconds = Math.floor((difference / 1000) % 60)
				setTimeLeft({ days, hours, minutes, seconds })
			}
		}

		const intervalId = setInterval(updateCountdown, 1000)
		updateCountdown() // Initialize immediately

		return () => clearInterval(intervalId)
	}, [])

	return (
		<section className='bg-gradient-to-b from-white to-teal-100 text-gray-800 py-20 px-6'>
			<div className='max-w-6xl mx-auto text-center'>
				<div className='flex flex-col items-center justify-center gap-4 mb-10'>
					<Discount className='text-white text-5xl' />
					<h2 className='text-3xl md:text-4xl font-bold'>
						Limited Time Offer – 30% OFF!
					</h2>
					<p className='text-lg max-w-xl'>
						Use code <span className='font-bold tracking-wider'>EASY30</span> at
						checkout to get 30% off all courses. Offer ends soon!
					</p>
				</div>

				{/* Countdown Timer */}
				<div className='flex justify-center gap-6 text-center text-black'>
					{['Days', 'Hours', 'Minutes', 'Seconds'].map((label, i) => {
						const value = Object.values(timeLeft)[i]
						return (
							<div
								key={label}
								className='bg-white w-20 h-20 rounded-md flex flex-col items-center justify-center shadow-md'
							>
								<p className='text-2xl font-bold text-teal-700'>
									{value.toString().padStart(2, '0')}
								</p>
								<span className='text-xs font-semibold text-gray-600'>
									{label}
								</span>
							</div>
						)
					})}
				</div>

				<button className='mt-10 bg-white text-teal-700 font-bold px-6 py-3 rounded-sm hover:bg-gray-100 transition shadow-md'>
					Enroll Now & Save
				</button>
			</div>
		</section>
	)
}

export default PromoSection
