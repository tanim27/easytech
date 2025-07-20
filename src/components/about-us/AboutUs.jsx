'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const AboutUs = () => {
	const textRef = useRef(null)
	const imageRef = useRef(null)

	useEffect(() => {
		gsap.fromTo(
			textRef.current,
			{ opacity: 0, x: -100 },
			{
				opacity: 1,
				x: 0,
				duration: 1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: textRef.current,
					start: 'top 80%',
				},
			},
		)

		gsap.fromTo(
			imageRef.current,
			{ opacity: 0, x: 100 },
			{
				opacity: 1,
				x: 0,
				duration: 1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: imageRef.current,
					start: 'top 80%',
				},
			},
		)
	}, [])

	return (
		<section className='relative px-8 py-32 overflow-hidden'>
			<div className='mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
				{/* Text Content */}
				<div
					className='space-y-6'
					ref={textRef}
				>
					<h2 className='text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight'>
						Redefining <span className='text-teal-600'>Tech Learning</span> for
						Everyone
					</h2>
					<p className='text-gray-600 text-lg sm:text-xl leading-relaxed'>
						At EasyTech, we’re building more than just a platform...
					</p>
					<p className='text-gray-500 text-base'>
						With mentors from across industries...
					</p>
					<div className='pt-4'>
						<button className='bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-medium shadow-lg transition duration-300 cursor-pointer'>
							Learn More
						</button>
					</div>
				</div>

				{/* Image Section */}
				<div
					className='relative w-full h-[350px] md:h-[450px]'
					ref={imageRef}
				>
					<div className='absolute inset-0 bg-teal-100 rounded-3xl transform rotate-2 scale-102 -z-10 shadow-xl'></div>
					<Image
						height={400}
						width={400}
						src='/assets/hero-image.jpg'
						alt='EasyTech Team'
						className='rounded-3xl shadow-2xl w-full h-full object-cover object-center transition duration-300 hover:rotate-2'
					/>
				</div>
			</div>
		</section>
	)
}

export default AboutUs
