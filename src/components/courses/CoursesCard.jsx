'use client'

import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import GroupIcon from '@mui/icons-material/Group'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import SchoolIcon from '@mui/icons-material/School'
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront'
import Image from 'next/image'
import Link from 'next/link'

const CoursesCard = ({ course }) => {
	const {
		image,
		title,
		description,
		mode,
		level,
		course_duration,
		course_starting_date,
		total_live_classes,
		total_joined,
		course_price,
	} = course?.overview ?? {}

	return (
		<div
			className='bg-white rounded-xl overflow-hidden shadow-lg text-gray-800 flex flex-col my-4
      w-full
      max-w-[600px]
      min-w-[280px]
      mx-auto
      sm:max-w-[450px]
      md:max-w-[550px]
      lg:max-w-[600px]'
		>
			{/* Image */}
			<div className='relative h-48 sm:h-56 md:h-60 w-full'>
				{image ? (
					<Image
						src={image}
						alt={title ?? 'Course Image'}
						fill
						className='object-cover'
						priority
					/>
				) : (
					<div className='bg-gray-200 w-full h-full flex items-center justify-center text-gray-400'>
						No Image
					</div>
				)}
			</div>

			{/* Content */}
			<div className='p-4 sm:p-6 flex flex-col flex-1'>
				<h2 className='text-xl sm:text-2xl font-semibold leading-tight mb-2 sm:mb-3'>
					{title?.length > 50
						? `${title.slice(0, 50)}...`
						: title ?? 'Untitled Course'}
				</h2>

				<p className='text-justify text-gray-600 mb-3 sm:mb-4 flex-grow text-sm sm:text-base'>
					{description?.length > 150
						? `${description.slice(0, 150)}...`
						: description ?? 'No description available.'}
				</p>

				{/* Course info grid */}
				<div className='grid grid-cols-2 gap-3 text-xs sm:text-sm text-gray-500 mb-5'>
					<div className='flex items-center gap-2'>
						<PlayCircleIcon
							fontSize='small'
							className='text-teal-600'
						/>
						<span>{mode ?? 'Mode unknown'}</span>
					</div>
					<div className='flex items-center gap-2'>
						<SchoolIcon
							fontSize='small'
							className='text-teal-600'
						/>
						<span>{level ?? 'Level unknown'}</span>
					</div>
					<div className='flex items-center gap-2'>
						<AccessTimeIcon
							fontSize='small'
							className='text-teal-600'
						/>
						<span>{course_duration ?? 'Duration unknown'}</span>
					</div>
					<div className='flex items-center gap-2'>
						<CalendarTodayIcon
							fontSize='small'
							className='text-teal-600'
						/>
						<span>
							{course_starting_date
								? `Starts ${course_starting_date}`
								: 'Start date TBD'}
						</span>
					</div>
					<div className='flex items-center gap-2'>
						<VideoCameraFrontIcon
							fontSize='small'
							className='text-teal-600'
						/>
						<span>
							{total_live_classes != null
								? `${total_live_classes} live classes`
								: 'Live classes info N/A'}
						</span>
					</div>
					<div className='flex items-center gap-2'>
						<GroupIcon
							fontSize='small'
							className='text-teal-600'
						/>
						<span>Total joined: {total_joined ?? 'Joined count unknown'}</span>
					</div>
				</div>

				{/* Price and buttons */}
				<div className='flex flex-col gap-3'>
					<div className='text-2xl sm:text-3xl font-bold text-teal-600'>
						{course_price ?? 'Price not available'}
					</div>
					<div className='flex gap-3 flex-wrap sm:flex-nowrap'>
						<button
							className='flex-1 bg-teal-600 hover:bg-teal-700 text-white py-2 sm:py-3 rounded-lg font-semibold transition text-sm flex items-center justify-center'
							type='button'
						>
							Enroll Now →
						</button>
						<Link
							href={`/courses/${course?.id ?? ''}`}
							className='flex-1 border border-gray-300 hover:bg-gray-100 py-2 sm:py-3 rounded-lg text-center text-gray-600 font-semibold transition text-sm flex items-center justify-center'
						>
							Details
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CoursesCard
