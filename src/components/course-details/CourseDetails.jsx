'use client'

import { AccessTime, PlayCircle, School, Translate } from '@mui/icons-material'
import Image from 'next/image'

const CourseDetails = () => {
	return (
		<div className='w-full'>
			{/* Hero Section */}
			<section className='bg-[#f2f2f2] text-gray-800 py-12 px-4'>
				<div className='max-w-7xl mx-auto'>
					<h1 className='text-3xl md:text-5xl font-bold mb-2'>
						Full Stack Web Development
					</h1>
					<p className='text-sm md:text-base'>
						Home / Courses / Full Stack Web Development
					</p>
				</div>
			</section>

			{/* Overview */}
			{/* Overview */}
			<section className='max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 items-center gap-16'>
				{/* Thumbnail */}
				<div className='w-full aspect-video relative'>
					<Image
						src='/assets/illustrations/image-5.jpg'
						alt='Full Stack Course'
						fill
						className='rounded-lg object-cover'
					/>
				</div>

				{/* Course Info */}
				<div>
					<h2 className='font-bold text-teal-600 text-xl mb-4'>
						Course Overview
					</h2>
					<h1 className='font-bold text-4xl md:text-5xl text-gray-800 mb-4'>
						MERN Stack for Beginners
					</h1>
					<p className='text-gray-700 text-justify mb-6'>
						Learn to build dynamic, database-driven websites and web apps using
						HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. No
						prior coding experience required!
					</p>

					<ul className='space-y-4 text-gray-600'>
						<li className='flex items-center gap-2'>
							<PlayCircle className='text-teal-600' />
							<span>Mode: Online (Recorded + Live)</span>
						</li>
						<li className='flex items-center gap-2'>
							<School className='text-teal-600' />
							<span>Level: Beginner to Advanced</span>
						</li>
						<li className='flex items-center gap-2'>
							<Translate className='text-teal-600' />
							<span>Language: English & Bangla</span>
						</li>
						<li className='flex items-center gap-2'>
							<AccessTime className='text-teal-600' />
							<span>Course Duration: 12 Weeks</span>
						</li>
						<li className='flex items-center gap-2'>
							<AccessTime className='text-teal-600' />
							<span>Start Date: 15th August 2025</span>
						</li>
						<li className='flex items-center gap-2'>
							<AccessTime className='text-teal-600' />
							<span>Total Classes: 36</span>
						</li>
						<li className='flex items-center gap-2'>
							<AccessTime className='text-teal-600' />
							<span>Class Duration: 2 Hours per Session</span>
						</li>
					</ul>

					<button className='w-full md:w-[200px] bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-sm transition duration-300 shadow-md cursor-pointer mt-4'>
						Enroll Now
					</button>
				</div>
			</section>

			{/* What You’ll Learn */}
			<section className='bg-gray-50 py-12 px-4'>
				<div className='max-w-5xl mx-auto'>
					<h2 className='text-2xl font-bold text-teal-700 mb-6'>
						What You’ll Learn
					</h2>
					<ul className='grid md:grid-cols-2 gap-4 text-gray-700 list-disc list-inside'>
						<li>Build responsive websites using HTML, CSS, and Tailwind CSS</li>
						<li>Develop full stack apps with React and Node.js</li>
						<li>Use MongoDB for data storage</li>
						<li>Deploy applications on platforms like Vercel or Render</li>
						<li>Master Git & GitHub for version control</li>
						<li>Understand RESTful APIs and JWT authentication</li>
					</ul>
				</div>
			</section>

			{/* Syllabus */}
			<section className='max-w-5xl mx-auto px-4 py-12'>
				<h2 className='text-2xl font-bold text-teal-700 mb-6'>
					Course Syllabus
				</h2>
				<ol className='list-decimal list-inside space-y-2 text-gray-700'>
					<li>HTML & CSS Fundamentals</li>
					<li>JavaScript Essentials</li>
					<li>Modern React (Hooks, Router, State)</li>
					<li>Node.js & Express.js</li>
					<li>MongoDB & Mongoose</li>
					<li>Authentication & Authorization</li>
					<li>Project: Full Stack E-commerce App</li>
				</ol>
			</section>

			{/* Instructor Section */}
			<section className='bg-teal-50 py-12 px-4'>
				<div className='max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-16'>
					<Image
						src='/assets/person-2.jpg'
						alt='Instructor'
						width={300}
						height={200}
						className='rounded-sm object-cover'
					/>
					<div>
						<h3 className='text-xl font-semibold text-teal-800'>
							Alister Cock
						</h3>
						<p className='text-gray-600 mb-2'>
							Senior Full Stack Instructor at EasyTech
						</p>
						<p className='text-gray-700'>
							With over 7 years of experience in web development and teaching,
							Cock has helped thousands of students become job-ready full stack
							developers.
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default CourseDetails
