'use client'

import AccessTimeIcon from '@mui/icons-material/AccessTime'
import MenuBookIcon from '@mui/icons-material/MenuBook'

const CoursesCard = ({ course }) => {
	return (
		<div className='bg-white w-full max-w-md h-[600px] rounded-xl overflow-hidden shadow-lg  text-gray-800 transition duration-300 flex flex-col'>
			{/* Image */}
			<div className='relative h-60'>
				<img
					src={course.image}
					alt={course.title}
					className='object-cover w-full h-full'
				/>
			</div>

			{/* Content */}
			<div className='relative p-6 flex flex-col flex-1'>
				<h2 className='text-2xl font-semibold leading-tight mb-2'>
					{course.title.length > 50
						? `${course.title.slice(0, 50)}...`
						: course.title}
				</h2>

				{/* Description with fixed height */}
				<p className='text-justify text-gray-500 pb-4'>
					{course.description.length > 150
						? `${course.description.slice(0, 150)}...`
						: course.description}
				</p>

				{/* Metadata at fixed position */}
				<div className='absolute bottom-40 left-6 right-6 flex justify-between items-center text-sm text-gray-500'>
					<span className='flex items-center gap-1'>
						<AccessTimeIcon fontSize='small' /> {course.duration}
					</span>
					<span className='flex items-center gap-1'>
						<MenuBookIcon fontSize='small' /> {course.classes}
					</span>
				</div>

				{/* Spacer to push buttons to bottom */}
				<div className='mt-auto pb-2'>
					<div className='text-3xl font-bold text-teal-600 mb-4'>
						{course.price}
					</div>
					<div className='flex gap-3'>
						<button className='flex-1 bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg text-center font-semibold transition'>
							Enroll Now →
						</button>
						<button className='flex-1 border border-gray-200  hover:bg-gray-100 py-3 rounded-lg text-center text-gray-500 font-semibold transition'>
							Details
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CoursesCard
