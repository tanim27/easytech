'use client'

import { PlayCircle } from '@mui/icons-material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import StudentFeedbackCarousel from '../custom-ui-elements/StudentFeedbackCarousel'
import { instructors } from './Instructor'

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
			<section className='bg-[#f2f2f2] w-full h-[200px] md:h-[250px] flex justify-center items-center'>
				<h1 className='font-extrabold text-4xl md:text-5xl text-center text-gray-800 mb-12'>
					About Us
				</h1>
			</section>

			<section className=' relative px-8 py-32 overflow-hidden'>
				<div className='mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
					{/* Text Content */}
					<div>
						<p className='text-sm font-semibold text-teal-600 uppercase'>
							Distance Learning
						</p>
						<h2 className='text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug mt-2'>
							Build Your Project Management Skills Online, Anytime
						</h2>
						<p className='font-medium text-gray-600 mt-4'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<p className='font-bold text-gray-600 mt-3'>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo.
						</p>
					</div>

					{/* Video Section */}
					<div className='rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden z-20'>
						<div
							className='bg-gray-100 relative w-full h-120 rounded-xl flex items-center justify-center cursor-pointer group'
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

						<div
							ref={shapeRef}
							className='absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10  pointer-events-none'
						>
							<img
								src='/assets/shape.png'
								alt='shape'
								className='h-auto'
							/>
						</div>
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
			</section>

			<section className='bg-teal-600 py-0 md:py-20'>
				<div className='max-w-7xl mx-auto relative'>
					{/* Dividers for large screens */}
					<div className='hidden md:block absolute inset-y-0 left-1/4 w-px bg-white/30' />
					<div className='hidden md:block absolute inset-y-0 left-1/2 w-px bg-white/30' />
					<div className='hidden md:block absolute inset-y-0 left-3/4 w-px bg-white/30' />

					{/* Responsive Layout */}
					<div className='hidden md:grid grid-cols-4 text-center text-white'>
						{/* Stat 1 */}
						<div className='px-4 py-6'>
							<h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold'>
								97
							</h2>
							<p className='mt-2 text-xs sm:text-sm md:text-base font-bold uppercase'>
								Finished Sessions
							</p>
						</div>

						{/* Stat 2 */}
						<div className='px-4 py-6'>
							<h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold'>
								15,485
							</h2>
							<p className='mt-2 text-xs sm:text-sm md:text-base font-bold uppercase'>
								Enrolled Learners
							</p>
						</div>

						{/* Stat 3 */}
						<div className='px-4 py-6'>
							<h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold'>
								250
							</h2>
							<p className='mt-2 text-xs sm:text-sm md:text-base font-bold uppercase'>
								Online Instructors
							</p>
						</div>

						{/* Stat 4 */}
						<div className='px-4 py-6'>
							<h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold'>
								97.55%
							</h2>
							<p className='mt-2 text-xs sm:text-sm md:text-base font-bold uppercase'>
								Satisfaction Rate
							</p>
						</div>
					</div>

					{/* Small screen layout */}
					<div className='relative md:hidden flex flex-col gap-6 text-white'>
						{/* Divider lines */}
						<div className='absolute left-1/2 top-0 bottom-0 w-px bg-white/30 z-10' />
						<div className='absolute top-1/2 left-0 right-0 h-px bg-white/30 z-10' />

						{/* Row 1 */}
						<div className='flex sm:flex-row gap-6'>
							<div className='w-full sm:w-1/2 aspect-square flex flex-col justify-center items-center text-center z-20'>
								<h2 className='text-2xl sm:text-3xl font-extrabold'>97</h2>
								<p className='mt-2 text-xs sm:text-sm font-bold uppercase'>
									Finished Sessions
								</p>
							</div>
							<div className='w-full sm:w-1/2 aspect-square flex flex-col justify-center items-center text-center z-20'>
								<h2 className='text-2xl sm:text-3xl font-extrabold'>15,485</h2>
								<p className='mt-2 text-xs sm:text-sm font-bold uppercase'>
									Enrolled Learners
								</p>
							</div>
						</div>

						{/* Row 2 */}
						<div className='flex sm:flex-row gap-6'>
							<div className='w-full sm:w-1/2 aspect-square flex flex-col justify-center items-center text-center z-20'>
								<h2 className='text-2xl sm:text-3xl font-extrabold'>250</h2>
								<p className='mt-2 text-xs sm:text-sm font-bold uppercase'>
									Online Instructors
								</p>
							</div>
							<div className='w-full sm:w-1/2 aspect-square flex flex-col justify-center items-center text-center z-20'>
								<h2 className='text-2xl sm:text-3xl font-extrabold'>97.55%</h2>
								<p className='mt-2 text-xs sm:text-sm font-bold uppercase'>
									Satisfaction Rate
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='py-16 px-4 text-center'>
				<h2 className='text-3xl font-semibold mb-12'>Learners Feedback</h2>
				<StudentFeedbackCarousel />
				{/* <AutoScrollCards /> */}
			</section>

			<section className='bg-[#f2f2f2] py-20 px-4'>
				<div className='text-center mb-12'>
					<p className='text-teal-600 font-semibold uppercase text-sm'>
						Course Advisor
					</p>
					<h2 className='text-4xl font-extrabold text-gray-900 mt-2 mb-4'>
						Meet Our World-class Instructors
					</h2>
					<p className='text-gray-500 max-w-2xl mx-auto text-base'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
					{instructors.map((instructor, index) => (
						<div
							key={index}
							className='bg-white rounded-t-md overflow-hidden shadow-md transition-shadow duration-300'
						>
							<div className='w-full h-[280px] relative'>
								<Image
									src={instructor.image}
									alt={instructor.name}
									fill
									className='object-cover'
								/>
							</div>
							<div className='py-6 text-center'>
								<h3 className='text-xl font-bold text-gray-900 mb-2'>
									{instructor.name}
								</h3>
								<p className='text-teal-600 font-medium text-sm'>
									{instructor.role}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	)
}

export default AboutUs
