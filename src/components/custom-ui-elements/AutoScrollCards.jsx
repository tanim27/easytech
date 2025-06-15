'use client'

import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const cards = [
	{ id: 1, title: '1' },
	{ id: 2, title: '2' },
	{ id: 3, title: '3' },
	{ id: 4, title: '4' },
]

const AutoScrollCards = () => {
	const containerRef = useRef(null)
	const tweenRef = useRef(null)

	useEffect(() => {
		const container = containerRef.current
		const totalWidth = container.scrollWidth / 2 // half because we duplicate cards

		// GSAP infinite horizontal scroll
		tweenRef.current = gsap.to(container, {
			x: -totalWidth,
			duration: 20,
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

	const repeatedCards = [...cards, ...cards] // Duplicate for seamless looping

	return (
		<section className='w-full overflow-hidden py-10'>
			<div className='relative w-full'>
				<div
					className='flex w-max space-x-4'
					ref={containerRef}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					{repeatedCards.map((card, index) => (
						<div
							key={index}
							className='min-w-[250px] h-40 bg-white shadow-md rounded-lg flex items-center justify-center text-xl font-semibold'
						>
							{card.title}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default AutoScrollCards
