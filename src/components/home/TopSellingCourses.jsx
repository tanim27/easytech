'use client'

import { School } from '@mui/icons-material'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import '@/styles/globals.css'

const TopSellingCourses = () => {
	return (
		<section className='py-24 px-4 md:px-20'>
			<div className='max-w-7xl mx-auto'>
				<p className='text-teal-600 font-semibold uppercase text-center'>
					Top Selling Courses
				</p>
				<h2 className='text-4xl font-extrabold text-gray-900 mt-2 mb-12 text-center'>
					Join Thousands of Learners
				</h2>

				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={30}
					slidesPerView={1}
					loop={true}
					// navigation={true}
					pagination={{ clickable: true }}
					autoplay={{ delay: 4500 }}
					breakpoints={{
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
					className='courses-swiper !pb-16'
				>
					{[
						{
							title: 'Complete Web Development',
							desc: 'Master HTML, CSS, JavaScript, React, Node.js & more.',
						},
						{
							title: 'Advanced Digital Marketing',
							desc: 'SEO, PPC, Analytics, Email & Social Media Strategy.',
						},
						{
							title: 'AI Content Creation Mastery',
							desc: 'Use ChatGPT, Midjourney, and Synthesia like a pro.',
						},
						{
							title: 'Freelancing with Upwork & Fiverr',
							desc: 'Build your profile, land jobs, and scale income.',
						},
					].map((course, index) => (
						<SwiperSlide key={index}>
							<div className='bg-white/70 backdrop-blur-lg rounded-md p-6 h-full flex flex-col justify-between shadow-md hover:shadow-lg transition duration-300'>
								<div className='flex items-center justify-center w-14 h-14 rounded-full bg-teal-100 mb-4'>
									<School className='text-teal-600 text-3xl' />
								</div>
								<h3 className='text-xl font-semibold text-gray-900 mb-2'>
									{course.title}
								</h3>
								<p className='text-gray-600 text-sm flex-grow'>{course.desc}</p>
								<button className='mt-6 inline-block text-sm font-semibold text-teal-700 hover:text-teal-900 transition cursor-pointer relative w-fit after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-teal-700 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300'>
									Enroll Now
								</button>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default TopSellingCourses
