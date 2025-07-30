'use client'

import { PlayCircle } from '@mui/icons-material'
import { useState } from 'react'
import { successStoriesData } from './successStoriesData'

const SuccessStory = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [activeVideo, setActiveVideo] = useState(null)

	const openModal = (videoUrl) => {
		setActiveVideo(videoUrl)
		setIsOpen(true)
	}

	const closeModal = () => {
		setIsOpen(false)
		setActiveVideo(null)
	}

	return (
		<>
			<div className='bg-gray-200 w-full h-[200px] md:h-[250px] flex flex-col justify-end items-center gap-4'>
				<h1 className='font-extrabold text-4xl md:text-5xl text-center text-gray-800 '>
					Our Success Stories
				</h1>

				<p className='text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto'>
					Real stories from our successful students. Discover how EasyTech
					helped shape their careers.
				</p>
			</div>

			<div className='bg-gray-100 min-h-screen py-16 px-8'>
				<div className='max-w-7xl mx-auto text-center'>
					<div className='grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
						{successStoriesData.map((review) => {
							const videoId = new URL(review.youtubeUrl).pathname
								.split('/embed/')[1]
								?.split('?')[0]
							const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

							return (
								<div
									key={review.id}
									className='rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden'
								>
									<div
										className='relative w-full h-60 bg-gray-100 rounded-xl flex items-center justify-center cursor-pointer group'
										onClick={() => openModal(review.youtubeUrl)}
									>
										<img
											src={thumbnailUrl}
											alt={`Thumbnail for ${review.name}'s review`}
											className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
										/>
										<div className='absolute inset-0 bg-black/30 flex items-center justify-center'>
											<PlayCircle
												className='text-white group-hover:text-teal-400 transition'
												style={{ fontSize: 80 }}
											/>
										</div>
									</div>
								</div>
							)
						})}
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
									title='Student Review Video'
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
		</>
	)
}

export default SuccessStory
