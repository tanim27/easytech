'use client'

import { PlayCircle, PsychologyAlt } from '@mui/icons-material'
import Image from 'next/image'
import { useState } from 'react'

const Agency = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [activeVideo, setActiveVideo] = useState(null)

	// Replace this with your actual YouTube video URL
	const youtubeUrl =
		'https://www.youtube.com/embed/FAEIdG0LolI?si=tfQjpCVkvZyrkxeC'
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

	return (
		<>
			{/* Hero Section */}
			<section className='bg-[#f2f2f2] w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[280px] flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-20 py-8 gap-4'>
				<h1 className='font-extrabold text-4xl lg:text-5xl text-center text-gray-800'>
					Our Agency
				</h1>
			</section>

			{/* About Us Section */}
			<section className='w-full px-4 sm:px-6 md:px-12 lg:px-20 py-16 bg-white'>
				<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start'>
					{/* Text Content */}
					<div className='text-start mb-6'>
						<p className='font-semibold text-sm text-teal-600 uppercase'>
							Distance Learning
						</p>
						<h2 className='text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug mt-2'>
							Build Your Project Management Skills Online, Anytime
						</h2>
						<p className='font-medium text-gray-600 text-justify mt-4'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<p className='font-bold text-gray-600 text-justify mt-4'>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo.
						</p>
					</div>

					{/* Image Section */}
					<div className='w-full h-[400px] relative overflow-hidden'>
						<Image
							src='/assets/illustrations/image-5.jpg' // Replace with your image
							alt='Agency Team'
							fill
							className='object-cover'
						/>
					</div>
				</div>
			</section>

			{/* Vision + Video Section */}
			<section className='px-4 sm:px-8 md:px-12 py-20 flex justify-center items-center'>
				<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center'>
					{/* Video Section */}
					<div className='rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden z-20'>
						<div
							className='bg-gray-100 relative w-full h-120 rounded-xl flex items-center justify-center cursor-pointer group'
							onClick={openModal}
						>
							<img
								// src={thumbnailUrl}
								src='/assets/illustrations/image-5.jpg'
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

					{/* Modal */}
					{isOpen && (
						<div
							className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm'
							onClick={closeModal}
						>
							<div className='relative w-full max-w-5xl mx-auto px-4'>
								<div className='rounded-lg overflow-hidden shadow-lg'>
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
									className='absolute -top-12 right-4 lg:-top-14 lg:-right-14
               flex items-center justify-center
               h-8 w-8 lg:h-10 lg:w-10
               bg-white text-teal-500 hover:text-white hover:bg-teal-500
               rounded-full shadow-xl transition cursor-pointer'
									aria-label='Close modal'
								>
									<span className='text-xl lg:text-2xl leading-none'>
										&times;
									</span>
								</button>
							</div>
						</div>
					)}

					{/* Text Content */}
					<div className='text-start mb-6'>
						<p className='font-semibold text-sm text-teal-600 uppercase'>
							Distance Learning
						</p>
						<h2 className='text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug mt-2'>
							Build Your Project Management Skills Online, Anytime
						</h2>
						<p className='font-medium text-gray-600 text-justify mt-4'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<p className='font-bold text-gray-600 text-justify mt-4'>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo.
						</p>
					</div>
				</div>
			</section>

			{/* What We Offer Section */}
			<section className='w-full px-4 sm:px-6 md:px-12 lg:px-20 py-20 bg-teal-50'>
				<div className='text-center flex flex-col gap-2 mb-16'>
					<p className='font-semibold text-teal-600 uppercase'>What We Offer</p>
					<h2 className='font-extrabold text-3xl md:text-4xl text-gray-900 leading-tight'>
						What We Offer
					</h2>
					<p className='max-w-2xl mx-auto text-gray-600 text-base'>
						We provide full-spectrum digital services that empower startups and
						global brands alike.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
					{[
						{
							title: 'Custom Development',
							desc: 'We build scalable web and mobile apps tailored to your needs.',
						},
						{
							title: 'Creative Design',
							desc: 'Our UI/UX team crafts beautiful, intuitive interfaces.',
						},
						{
							title: 'Digital Strategy',
							desc: 'We align tech solutions with your long-term business goals.',
						},
					].map((item, idx) => (
						<div
							key={idx}
							className='bg-white rounded-sm shadow-sm p-6 transition text-center'
						>
							<div className='text-teal-600 text-6xl'>
								<PsychologyAlt fontSize='inherit' />
							</div>
							<h3 className='text-xl font-semibold text-teal-700 mb-2'>
								{item.title}
							</h3>
							<p className='text-gray-600 text-sm leading-relaxed'>
								{item.desc}
							</p>
						</div>
					))}
				</div>
			</section>
		</>
	)
}

export default Agency
