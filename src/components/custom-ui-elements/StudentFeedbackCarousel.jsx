'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import Image from 'next/image'
import { Pagination } from 'swiper/modules'
import { cards } from './AutoScrollCards'

import '@/styles/globals.css'

const StudentFeedbackCarousel = () => {
	return (
		<>
			<Swiper
				spaceBetween={20} // default
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					640: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 100,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 100,
					},
				}}
				modules={[Pagination]}
				className='student-swiper !pb-16'
			>
				{cards.map((card, index) => (
					<SwiperSlide key={index}>
						<div className='w-full max-w-[500px] h-auto mx-auto bg-white shadow-md p-4 relative overflow-hidden sm:h-[250px]'>
							{/* Folded Corner */}
							<div className='absolute bottom-0 right-0 w-0 h-0 border-b-[25px] border-b-white border-l-[25px] border-l-[#f5f5f5]'></div>

							{/* Top section */}
							<div className='flex justify-between items-start mb-4 pb-4 border-b border-gray-100'>
								<div className='flex gap-4'>
									<Image
										src={card.image}
										alt={card.name}
										width={80}
										height={80}
										className='rounded-lg w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]'
									/>
									<div className='flex flex-col items-start'>
										<h3 className='font-semibold text-base sm:text-lg text-gray-900'>
											{card.name}
										</h3>
										<p className='text-teal-600 text-xs sm:text-sm'>
											California
										</p>
									</div>
								</div>
								<div className='flex flex-col justify-end items-end'>
									<div className='text-xs sm:text-sm text-gray-400'>
										3 Days ago
									</div>
									<div className='text-teal-600 text-5xl sm:text-7xl leading-none'>
										”
									</div>
								</div>
							</div>

							{/* Review */}
							<p className='text-gray-400 text-xs sm:text-sm text-justify'>
								{card.review.length > 250
									? `${card.review.slice(0, 250)}...`
									: card.review}
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

export default StudentFeedbackCarousel
