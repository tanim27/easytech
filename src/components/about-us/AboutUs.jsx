'use client'

import {
	AllInclusive,
	AutoAwesome,
	LaptopChromebook,
	PlayCircle,
	PsychologyAlt,
	School,
} from '@mui/icons-material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
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
			<section className='bg-gray-200 w-full h-[200px] md:h-[250px] flex justify-center items-center'>
				<h1 className='font-extrabold text-4xl md:text-5xl text-center text-gray-800 mb-12'>
					About Us
				</h1>
			</section>

			<section className='bg-gray-100 relative px-8 py-32 overflow-hidden'>
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
			</section>

			<section className='bg-teal-600 py-20'>
				<div className='max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center text-white relative'>
					{/* Stat 1 */}
					<div className='px-4'>
						<h2 className='text-4xl font-extrabold'>97</h2>
						<p className='mt-2 text-sm font-bold uppercase'>
							Finished Sessions
						</p>
					</div>

					{/* Divider */}
					<div className='hidden lg:block absolute top-1/2 left-1/4 transform -translate-y-1/2 h-58 w-px bg-white/40'></div>

					{/* Stat 2 */}
					<div className='px-4'>
						<h2 className='text-4xl font-extrabold'>15,485</h2>
						<p className='mt-2 text-sm font-bold uppercase'>
							Enrolled Learners
						</p>
					</div>

					{/* Divider */}
					<div className='hidden lg:block absolute top-1/2 left-2/4 transform -translate-y-1/2 h-58 w-px bg-white/40'></div>

					{/* Stat 3 */}
					<div className='px-4'>
						<h2 className='text-4xl font-extrabold'>250</h2>
						<p className='mt-2 text-sm font-bold uppercase'>
							Online Instructors
						</p>
					</div>

					{/* Divider */}
					<div className='hidden lg:block absolute top-1/2 left-3/4 transform -translate-y-1/2 h-58 w-px bg-white/40'></div>

					{/* Stat 4 */}
					<div className='px-4'>
						<h2 className='text-4xl font-extrabold'>97.55%</h2>
						<p className='mt-2 text-sm font-bold uppercase'>
							Satisfaction Rate
						</p>
					</div>
				</div>
			</section>

			<section className='bg-gray-100 py-20 px-4'>
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
							className='bg-white rounded-t-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'
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

			<section className='bg-white py-16 px-4 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
				{/* Updated Image Section */}
				<div className='relative grid grid-cols-2 gap-6'>
					<div className='flex flex-col gap-6'>
						<img
							src='/assets/illustrations/image-1.jpg'
							alt='Team collaboration'
							className='w-full h-48 object-cover rounded-md shadow-xl'
						/>
						<img
							src='/assets/illustrations/image-2.jpg'
							alt='Remote work'
							className='w-3/4 h-40 object-cover rounded-md shadow-xl ml-auto'
						/>
					</div>
					<div className='flex flex-col gap-6 mt-8'>
						<img
							src='/assets/illustrations/image-3.jpg'
							alt='Creative session'
							className='w-3/4 h-40 object-cover rounded-md shadow-xl'
						/>
						<img
							src='/assets/illustrations/image-5.jpg'
							alt='Brainstorming'
							className='w-full h-48 object-cover rounded-md shadow-xl'
						/>
					</div>
				</div>

				{/* Text Section (unchanged) */}
				<div>
					<p className='text-sm font-semibold text-teal-600 uppercase'>
						Distance Learning
					</p>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 leading-snug mt-2'>
						89% of people learning for professional development report career
						benefits like getting a promotion, starting a new career
					</h2>
					<p className='text-gray-600 mt-4'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<p className='text-gray-600 mt-3'>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo.
					</p>

					<div className='grid grid-cols-2 gap-4 mt-6'>
						<div className='flex items-center gap-2'>
							<School className='text-teal-600' />
							<span className='font-semibold text-gray-800'>
								Expert Trainers
							</span>
						</div>
						<div className='flex items-center gap-2'>
							<LaptopChromebook className='text-teal-600' />
							<span className='font-semibold text-gray-800'>
								Remote Learning
							</span>
						</div>
						<div className='flex items-center gap-2'>
							<AllInclusive className='text-teal-600' />
							<span className='font-semibold text-gray-800'>
								Lifetime Access
							</span>
						</div>
						<div className='flex items-center gap-2'>
							<AutoAwesome className='text-teal-600' />
							<span className='font-semibold text-gray-800'>
								Self Development
							</span>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-gray-100 py-16'>
				<div className='max-w-7xl mx-auto px-4 text-center'>
					<p className='text-teal-600 font-semibold uppercase'>
						Education For Everyone
					</p>
					<h2 className='text-4xl font-extrabold text-gray-900 mt-2 mb-4'>
						Online Coaching Lessons For <br /> Remote Learning
					</h2>
					<p className='text-gray-600 max-w-2xl mx-auto'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>

					<div className='flex flex-wrap justify-center gap-8 mt-12'>
						{/* Card 1 */}
						<div className='bg-white w-[280px] h-[300px] p-8 rounded-sm hover:-translate-y-2 transition duration-400 flex flex-col justify-center gap-4'>
							<div className='flex flex-col justify-center gap-4'>
								<div className='text-teal-600 text-6xl'>
									<PsychologyAlt fontSize='inherit' />
								</div>
								<h3 className='text-xl font-semibold text-gray-900'>
									Learn the Latest Skills
								</h3>
								<p className='text-gray-600'>
									Learning top skills can bring an extra-ordinary outcome in a
									career.
								</p>
								<div className='flex justify-center'>
									<p
										className='text-teal-600 text-sm font-semibold cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-teal-600 
				after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 inline-block'
									>
										Start Now!
									</p>
								</div>
							</div>
						</div>

						{/* Card 2 */}
						<div className='bg-white w-[280px] h-[300px] p-8 rounded-sm hover:-translate-y-2 transition duration-400 flex flex-col justify-center gap-4'>
							<div className='flex flex-col justify-center gap-4'>
								<div className='text-teal-600 text-6xl'>
									<PsychologyAlt fontSize='inherit' />
								</div>
								<h3 className='text-xl font-semibold text-gray-900'>
									Learn the Latest Skills
								</h3>
								<p className='text-gray-600'>
									Learning top skills can bring an extra-ordinary outcome in a
									career.
								</p>
								<div className='flex justify-center'>
									<p
										className='text-teal-600 text-sm font-semibold cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-teal-600 
				after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 inline-block'
									>
										Start Now!
									</p>
								</div>
							</div>
						</div>

						{/* Card 3 */}
						<div className='bg-white w-[280px] h-[300px] p-8 rounded-sm hover:-translate-y-2 transition duration-400 flex flex-col justify-center gap-4'>
							<div className='flex flex-col justify-center gap-4'>
								<div className='text-teal-600 text-6xl'>
									<PsychologyAlt fontSize='inherit' />
								</div>
								<h3 className='text-xl font-semibold text-gray-900'>
									Learn the Latest Skills
								</h3>
								<p className='text-gray-600'>
									Learning top skills can bring an extra-ordinary outcome in a
									career.
								</p>
								<div className='flex justify-center'>
									<p
										className='text-teal-600 text-sm font-semibold cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-teal-600 
				after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 inline-block'
									>
										Start Now!
									</p>
								</div>
							</div>
						</div>

						{/* Card 4 */}
						<div className='bg-white w-[280px] h-[300px] p-8 rounded-sm hover:-translate-y-2 transition duration-400 flex flex-col justify-center gap-4'>
							<div className='flex flex-col justify-center gap-4'>
								<div className='text-teal-600 text-6xl'>
									<PsychologyAlt fontSize='inherit' />
								</div>
								<h3 className='text-xl font-semibold text-gray-900'>
									Learn the Latest Skills
								</h3>
								<p className='text-gray-600'>
									Learning top skills can bring an extra-ordinary outcome in a
									career.
								</p>
								<div className='flex justify-center'>
									<p
										className='text-teal-600 text-sm font-semibold cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-teal-600 
				after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 inline-block'
									>
										Start Now!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default AboutUs
