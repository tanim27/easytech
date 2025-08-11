'use client'

import {
	AccessTime,
	PlayCircle,
	PsychologyAlt,
	School,
} from '@mui/icons-material'
import CalendarToday from '@mui/icons-material/CalendarToday'
import Group from '@mui/icons-material/Group'
import VideoCameraFront from '@mui/icons-material/VideoCameraFront'
import Image from 'next/image'

import { ExpandMore } from '@mui/icons-material'
import { useEffect, useState } from 'react'

const sectionTabs = [
	{ label: 'Course Overview', id: 'overview' },
	{ label: 'Course Output', id: 'output' },
	{ label: 'Course Content', id: 'content' },
	{ label: 'Course Instructors', id: 'instructors' },
	{ label: 'Course Reviews', id: 'reviews' },
	{ label: 'Write A Review', id: 'write-a-review' },
]

const scrollToSection = (id) => {
	const section = document.getElementById(id)
	if (section) {
		section.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}
}

const CourseDetails = ({ course }) => {
	const [openIndex, setOpenIndex] = useState(null)
	const [activeSection, setActiveSection] = useState('overview')

	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: '0px 0px -50% 0px',
			threshold: 0.1,
		}

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id)
				}
			})
		}, observerOptions)

		sectionTabs.forEach(({ id }) => {
			const section = document.getElementById(id)
			if (section) observer.observe(section)
		})

		return () => observer.disconnect()
	}, [])

	const toggleAccordion = (index) => {
		setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
	}

	return (
		<div className='w-full'>
			{/* Hero Section */}
			<section className='bg-[#f2f2f2] text-gray-800 px-4 sm:px-8 md:px-12 py-16'>
				<div className='max-w-7xl mx-auto'>
					<h1 className='text-3xl md:text-5xl font-bold mb-2'>
						{course.overview.title}
					</h1>
					<p className='text-sm md:text-base'>
						Home / Courses / {course.overview.title}
					</p>
				</div>
			</section>

			{/* Tabs Navigation */}
			<section className='bg-white border-b border-gray-300 sticky top-0 z-50 py-4'>
				<div className='flex flex-wrap justify-center gap-4 max-w-7xl mx-auto px-4 sm:px-8'>
					{sectionTabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => scrollToSection(tab.id)}
							className={`px-5 py-2 rounded-full transition font-medium border cursor-pointer
              ${
								activeSection === tab.id
									? 'bg-teal-600 text-white border-teal-600'
									: 'bg-white text-gray-700 border-gray-300 hover:bg-teal-600 hover:text-white'
							}`}
						>
							{tab.label}
						</button>
					))}
				</div>
			</section>

			{/* Overview */}
			<section
				id='overview'
				className='max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-16 md:py-24 grid md:grid-cols-2 items-center gap-16'
			>
				{/* Thumbnail */}
				<div className='w-full aspect-video relative'>
					<Image
						src={course.overview.image}
						alt={course.overview.title}
						fill
						className='rounded-lg object-cover'
					/>
				</div>

				{/* Course Info */}
				<div>
					<h2 className='font-semibold text-sm text-teal-600 uppercase mb-2'>
						Course Overview
					</h2>
					<h1 className='font-bold text-3xl md:text-4xl text-gray-900 leading-tight mb-4'>
						{course.overview.title}
					</h1>
					<p className='text-gray-700 text-justify mb-6'>
						{course.overview.description}
					</p>

					<ul className='space-y-4 text-gray-600'>
						<li className='flex items-center gap-2'>
							<PlayCircle className='text-teal-600' />
							<span>Mode: {course.overview.mode}</span>
						</li>
						<li className='flex items-center gap-2'>
							<School className='text-teal-600' />
							<span>Level: {course.overview.level}</span>
						</li>
						<li className='flex items-center gap-2'>
							<AccessTime className='text-teal-600' />
							<span>Course Duration: {course.overview.course_duration}</span>
						</li>
						<li className='flex items-center gap-2'>
							<CalendarToday className='text-teal-600' />
							<span>Start Date: {course.overview.course_starting_date}</span>
						</li>
						<li className='flex items-center gap-2'>
							<VideoCameraFront className='text-teal-600' />
							<span>
								Total Live Classes: {course.overview.total_live_classes}
							</span>
						</li>
						<li className='flex items-center gap-2'>
							<Group className='text-teal-600' />
							<span>Total Joined: {course.overview.total_joined}</span>
						</li>
					</ul>

					<button className='w-full md:w-[200px] bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-sm transition duration-300 shadow-md cursor-pointer mt-4'>
						Enroll Now
					</button>
				</div>
			</section>

			{/* What You’ll Get */}
			<section
				id='output'
				className='bg-[#f2f2f2] px-4 sm:px-8 md:px-12 py-16 md:py-24'
			>
				<div className='max-w-7xl mx-auto'>
					<div className='text-center flex flex-col gap-2 mb-16'>
						<p className='font-semibold text-teal-600 uppercase'>
							Course Output
						</p>
						<h2 className='font-extrabold text-3xl md:text-4xl text-gray-900 leading-tight'>
							What You Will Get From <br /> This Course
						</h2>
						<p className='text-gray-500 max-w-2xl mx-auto text-base'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>

					<div className='flex flex-wrap justify-center gap-8'>
						{/* Card 1 */}
						<div className='bg-white w-[280px] h-[300px] p-8 rounded-sm shadow-xs hover:-translate-y-2 transition duration-400 flex flex-col justify-center gap-4'>
							<div className='flex flex-col justify-center items-center gap-4'>
								<div className='text-teal-600 text-6xl'>
									<PsychologyAlt fontSize='inherit' />
								</div>
								<h3 className='font-semibold text-gray-900 text-xl'>
									Learn the Latest Skills
								</h3>
								<p className='text-gray-600 text-justify'>
									Learning top skills can bring an extra-ordinary outcome in a
									career.
								</p>
							</div>
						</div>

						{/* Card 2 */}
						<div className='bg-white w-[280px] h-[300px] p-8 rounded-sm shadow-xs hover:-translate-y-2 transition duration-400 flex flex-col justify-center gap-4'>
							<div className='flex flex-col justify-center items-center gap-4'>
								<div className='text-teal-600 text-6xl'>
									<PsychologyAlt fontSize='inherit' />
								</div>
								<h3 className='font-semibold text-gray-900 text-xl'>
									Learn the Latest Skills
								</h3>
								<p className='text-gray-600 text-justify'>
									Learning top skills can bring an extra-ordinary outcome in a
									career.
								</p>
							</div>
						</div>

						{/* Card 3 */}
						<div className='bg-white w-[280px] h-[300px] p-8 rounded-sm shadow-xs hover:-translate-y-2 transition duration-400 flex flex-col justify-center gap-4'>
							<div className='flex flex-col justify-center items-center gap-4'>
								<div className='text-teal-600 text-6xl'>
									<PsychologyAlt fontSize='inherit' />
								</div>
								<h3 className='font-semibold text-gray-900 text-xl'>
									Learn the Latest Skills
								</h3>
								<p className='text-gray-600 text-justify'>
									Learning top skills can bring an extra-ordinary outcome in a
									career.
								</p>
							</div>
						</div>

						{/* Card 4 */}
						<div className='bg-white w-[280px] h-[300px] p-8 rounded-sm shadow-xs hover:-translate-y-2 transition duration-400 flex flex-col justify-center gap-4'>
							<div className='flex flex-col justify-center items-center gap-4'>
								<div className='text-teal-600 text-6xl'>
									<PsychologyAlt fontSize='inherit' />
								</div>
								<h3 className='font-semibold text-gray-900 text-xl'>
									Learn the Latest Skills
								</h3>
								<p className='text-gray-600 text-justify'>
									Learning top skills can bring an extra-ordinary outcome in a
									career.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Content */}
			<section
				id='content'
				className='max-w-5xl mx-auto px-4 sm:px-8 md:px-12 py-16 md:py-24'
			>
				<div className='text-center flex flex-col gap-2 mb-16'>
					<p className='font-semibold text-teal-600 uppercase'>
						Course Content
					</p>
					<h2 className='font-extrabold text-3xl md:text-4xl text-gray-900 leading-tight'>
						Watch Course Outline
					</h2>
				</div>

				<div className='space-y-4'>
					{course?.content?.map((week, index) => {
						const isOpen = openIndex === index

						return (
							<div
								key={index}
								className='bg-white overflow-hidden transition-all duration-300 shadow-sm'
							>
								<button
									className='flex items-center justify-between w-full border-b border-gray-200 px-6 py-5 text-left focus:outline-none group cursor-pointer'
									onClick={() => toggleAccordion(index)}
								>
									<span className='text-lg font-medium text-gray-900 group-hover:text-teal-600 transition'>
										{week.module}
									</span>
									<ExpandMore
										className={`text-gray-500 transform transition-transform duration-300 ${
											isOpen ? 'rotate-180 text-teal-600' : ''
										}`}
									/>
								</button>

								<div
									className={`px-4 bg-white text-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${
										isOpen
											? 'max-h-96 opacity-100 py-4'
											: 'max-h-0 opacity-0 py-0'
									}`}
								>
									<ul className='flex flex-wrap gap-3'>
										{week.topic.map((point, i) => (
											<li
												key={i}
												className='inline-flex items-center px-3 py-2 bg-white text-sm text-gray-800 border border-gray-400 rounded-full transition'
											>
												{point}
											</li>
										))}
									</ul>
								</div>
							</div>
						)
					})}
				</div>
			</section>

			{/* Instructor Section */}
			{/* Instructor Section */}
			<section
				id='instructors'
				className='px-4 sm:px-8 md:px-12 py-16 md:py-24'
			>
				<div className='max-w-7xl mx-auto'>
					{/* Heading */}
					<div className='text-center flex flex-col gap-2 mb-16'>
						<p className='font-semibold text-teal-600 uppercase'>Instructors</p>
						<h2 className='font-extrabold text-3xl md:text-4xl text-gray-900 leading-tight'>
							Meet Our Instructors
						</h2>
					</div>

					{/* Instructors Grid */}
					<div className='grid gap-16 lg:gap-20'>
						{course.instructor.map((instructor, idx) => (
							<div
								key={idx}
								className='flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-14'
							>
								{/* Instructor Image */}
								<div className='relative w-full h-52 sm:w-80 sm:h-52 lg:w-[300px] lg:h-[200px] shrink-0'>
									<div className='relative rounded-md overflow-hidden shadow-md w-full h-full'>
										<Image
											src={instructor.instructor_image}
											alt={instructor.instructor_name}
											width={800}
											height={500}
											className='object-cover object-center w-full h-auto rounded-md shadow-md'
										/>
									</div>
								</div>

								{/* Instructor Info */}
								<div className='w-full max-w-4xl'>
									<div className='border-l-2 border-gray-300 pl-5 sm:pl-6 space-y-4 text-base sm:text-lg text-justify leading-relaxed'>
										<p>{instructor.instructor_description}</p>

										<div className='pt-4'>
											<p className='font-bold text-teal-700 text-lg'>
												{instructor.instructor_name}
											</p>
											<p className='font-semibold text-sm text-gray-900'>
												{instructor.instructor_designation}
											</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Student Reviews */}
			<section
				id='reviews'
				className='px-4 sm:px-8 md:px-12 py-16 md:py-24'
			>
				<div className='max-w-7xl mx-auto'>
					<div className='text-center flex flex-col gap-2 mb-16'>
						<p className='font-semibold text-teal-600 uppercase'>Reviews</p>
						<h2 className='font-extrabold text-3xl md:text-4xl text-gray-900 leading-tight'>
							Review About This <br /> Course
						</h2>
					</div>

					<div className='flex flex-col gap-8'>
						{[
							{
								name: 'Ayesha Rahman',
								review:
									'This course helped me land my first internship! The instructors are very knowledgeable and explain everything clearly.',
								image: '/assets/person-1.jpg',
							},
							{
								name: 'Tanvir Hasan',
								review:
									'The MERN Stack course was well-structured and packed with real-world projects. Highly recommended for serious learners!',
								image: '/assets/person-2.jpg',
							},
							{
								name: 'Maria Islam',
								review:
									'I loved the community support and live Q&A sessions. I feel confident in applying for frontend developer roles now.',
								image: '/assets/person-1.jpg',
							},
						].map((student, idx) => (
							<div
								key={idx}
								className='bg-white shadow-md rounded-md p-6 flex flex-col md:flex-row gap-8 items-start max-w-7xl w-full mx-auto'
							>
								{/* Student Avatar */}
								<div className='w-full md:w-[200px] rounded-sm overflow-hidden flex-shrink-0'>
									<Image
										src={student.image}
										alt={student.name}
										width={200}
										height={150}
										className='object-cover w-full h-full'
									/>
								</div>

								{/* Review Content */}
								<div className='flex flex-col justify-between gap-4'>
									<p className='text-gray-700 text-justify text-lg mb-2'>
										{student.review}
									</p>
									<p className='font-semibold text-gray-900 text-xl'>
										{student.name}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Write a Review Section */}
			<section
				id='write-a-review'
				className='px-4 sm:px-8 md:px-12 py-16 md:py-24'
			>
				<div className='max-w-7xl mx-auto'>
					<div className='text-center flex flex-col gap-2 mb-8'>
						<p className='font-semibold text-teal-600 uppercase'>
							Share Your Thoughts
						</p>
						<h2 className='font-extrabold text-3xl md:text-4xl text-gray-900 leading-tight'>
							Write a Review
						</h2>
						<p className='text-gray-500 max-w-2xl mx-auto text-base'>
							We’d love to hear what you think about the course.
						</p>
					</div>

					{/* Review Input */}
					<div className='bg-white shadow-md rounded-md p-6 space-y-6'>
						<textarea
							className='w-full max-w-7xl border border-gray-300 rounded-md p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-600 transition resize-none min-h-[150px]'
							placeholder='Write your honest review here...'
						></textarea>
						<div className='text-right'>
							<button className='bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-sm transition duration-300 cursor-pointer'>
								Submit Review
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default CourseDetails
