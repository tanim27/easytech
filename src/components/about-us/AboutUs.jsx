'use client'

import { PlayCircle } from '@mui/icons-material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

const AboutUs = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [activeVideo, setActiveVideo] = useState(null)

	// Replace this with your actual YouTube video URL
	const youtubeUrl =
		'https://www.youtube.com/embed/HhiBpR20RHE?si=nA9y4UoL9_wlW70O'
	const videoId = new URL(youtubeUrl).pathname
		.split('/embed/')[1]
		?.split('?')[0]
	const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

	const openModal = () => {
		setActiveVideo(youtubeUrl)
		setIsOpen(true)
	}

	const closeModal = () => {
		setIsOpen(false)
		setActiveVideo(null)
	}

	const shapeRef = useRef(null)

	useEffect(() => {
		if (!shapeRef.current) return

		gsap.to(shapeRef.current, {
			x: 100, // move 100px to the right
			duration: 4,
			repeat: -1,
			yoyo: true,
			ease: 'sine.inOut',
		})
	}, [])

	return (
		<>
			<div className='bg-gray-200 w-full h-[200px] md:h-[250px] flex justify-center items-center'>
				<h1 className='font-extrabold text-4xl md:text-5xl text-center text-gray-800 mb-12'>
					About Us
				</h1>
			</div>

			<div className='bg-gray-100 relative px-8 py-32 overflow-hidden'>
				<div className='mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
					{/* Text Content */}
					<div className='space-y-6'>
						<h2 className='text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight'>
							Empowering <span className='text-teal-600'>Tech Careers</span>{' '}
							Through Real Learning
						</h2>
						<p className='text-gray-600 text-lg sm:text-xl leading-relaxed'>
							At EasyTech, we’re reshaping the way people learn technology. Our
							platform is designed to bridge the gap between theoretical
							knowledge and practical skills — helping learners build confidence
							and real-world expertise.
						</p>
						<p className='text-gray-500 text-base'>
							With a diverse community of mentors, structured courses, and
							hands-on projects, we make tech education accessible, interactive,
							and outcome-driven. Whether you're starting fresh or upskilling,
							EasyTech supports your journey every step of the way.
						</p>
						<div className='pt-4'>
							<button className='bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-medium shadow-lg transition duration-300 cursor-pointer'>
								Learn More
							</button>
						</div>
					</div>

					{/* Video Section */}
					<div className='rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden z-20'>
						<div
							className='bg-gray-100 relative w-full h-140 rounded-xl flex items-center justify-center cursor-pointer group'
							onClick={openModal}
						>
							<img
								src={thumbnailUrl}
								alt='YouTube Thumbnail'
								className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
							/>
							<div className='absolute inset-0 bg-black/30 flex items-center justify-center'>
								<PlayCircle
									className='text-white group-hover:text-teal-400 transition'
									style={{ fontSize: 80 }}
								/>
							</div>
						</div>
					</div>

					<div
						ref={shapeRef}
						className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-30 pointer-events-none'
					>
						<img
							src='/assets/shape.png'
							alt='shape'
							className='h-auto'
						/>
					</div>

					{/* Modal */}
					{isOpen && (
						<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm'>
							<div className='relative w-full max-w-5xl mx-auto px-4'>
								<div className='bg-white rounded-lg overflow-hidden shadow-lg'>
									<iframe
										className='w-full aspect-video'
										src={activeVideo}
										title='About Us Video'
										frameBorder='0'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
										allowFullScreen
									></iframe>
								</div>
								<button
									onClick={closeModal}
									className='h-[60px] w-[60px] absolute -top-14 -right-14 bg-white text-teal-500 hover:text-white hover:bg-teal-500 rounded-full p-2 shadow-xl transition cursor-pointer'
									aria-label='Close modal'
								>
									<span className='text-4xl font-bold'>&times;</span>
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default AboutUs
