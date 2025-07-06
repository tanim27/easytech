'use client'

import Star from '@mui/icons-material/Star'
import StarBorder from '@mui/icons-material/StarBorder'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const cards = [
	{
		id: 1,
		name: 'John Doe',
		image: '/assets/hero-image.jpg',
		review: 'Amazing product! Highly recommend it.',
		rating: 5,
	},
	{
		id: 2,
		name: 'Jane Smith',
		image: '/assets/hero-image.jpg',
		review: 'Good quality and fast delivery.',
		rating: 4,
	},
	{
		id: 3,
		name: 'Alex Johnson',
		image: '/assets/hero-image.jpg',
		review: 'Satisfied with the purchase.',
		rating: 4,
	},
	{
		id: 4,
		name: 'Emily Davis',
		image: '/assets/hero-image.jpg',
		review: 'Loved it! Will buy again.',
		rating: 5,
	},
	{
		id: 5,
		name: 'John Doe',
		image: '/assets/hero-image.jpg',
		review: 'Amazing product! Highly recommend it.',
		rating: 5,
	},
	{
		id: 6,
		name: 'Jane Smith',
		image: '/assets/hero-image.jpg',
		review: 'Good quality and fast delivery.',
		rating: 4,
	},
	{
		id: 7,
		name: 'Alex Johnson',
		image: '/assets/hero-image.jpg',
		review: 'Satisfied with the purchase.',
		rating: 4,
	},
	{
		id: 8,
		name: 'Emily Davis',
		image: '/assets/hero-image.jpg',
		review: 'Loved it! Will buy again.',
		rating: 5,
	},
	{
		id: 9,
		name: 'John Doe',
		image: '/assets/hero-image.jpg',
		review: 'Amazing product! Highly recommend it.',
		rating: 5,
	},
	{
		id: 10,
		name: 'Jane Smith',
		image: '/assets/hero-image.jpg',
		review: 'Good quality and fast delivery.',
		rating: 4,
	},
	{
		id: 11,
		name: 'Alex Johnson',
		image: '/assets/hero-image.jpg',
		review: 'Satisfied with the purchase.',
		rating: 4,
	},
	{
		id: 12,
		name: 'Emily Davis',
		image: '/assets/hero-image.jpg',
		review: 'Loved it! Will buy again.',
		rating: 5,
	},
]

const AutoScrollCards = () => {
	const containerRef = useRef(null)
	const tweenRef = useRef(null)

	useEffect(() => {
		const container = containerRef.current
		const totalWidth = container.scrollWidth / 2

		tweenRef.current = gsap.to(container, {
			x: -totalWidth,
			duration: 100,
			ease: 'linear',
			repeat: -1,
		})

		return () => {
			tweenRef.current?.kill()
		}
	}, [])

	const handleMouseEnter = () => {
		tweenRef.current?.pause()
	}

	const handleMouseLeave = () => {
		tweenRef.current?.resume()
	}

	const repeatedCards = [...cards, ...cards]

	const renderStars = (rating) => {
		const stars = []
		for (let i = 1; i <= 5; i++) {
			if (i <= rating) {
				stars.push(
					<Star
						key={i}
						className='text-yellow-500'
						fontSize='small'
					/>,
				)
			} else {
				stars.push(
					<StarBorder
						key={i}
						className='text-yellow-400'
						fontSize='small'
					/>,
				)
			}
		}
		return <div className='flex items-center gap-1 mt-2'>{stars}</div>
	}

	return (
		<section className='w-full overflow-hidden py-10 bg-gray-50'>
			<div className='relative w-full'>
				<div
					className='flex w-max space-x-6 px-4'
					ref={containerRef}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					{repeatedCards.map((card, index) => (
						<div
							key={index}
							className='min-w-[320px] max-w-xs bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-between text-center hover:shadow-lg transition-shadow duration-300'
						>
							<img
								src={card.image}
								alt={card.name}
								className='w-20 h-20 object-cover rounded-full border-4 border-white shadow-md mb-4'
							/>
							<h5 className='font-bold text-lg text-gray-800'>{card.name}</h5>
							<p className='text-sm text-gray-600 mt-2'>{card.review}</p>
							{renderStars(card.rating)}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default AutoScrollCards
